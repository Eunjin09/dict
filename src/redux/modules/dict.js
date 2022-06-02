import { db } from '../../firebase'
import { collection, getDocs, getDoc, addDoc, updateDoc, doc, deleteDoc } from "@firebase/firestore";

// import { firestore } from "../../firebase";

// const dict_db = firestore.collection("dict");

// 액션 타입 (`리듀서명/모듈명/액션)
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const DELETE = "word/DELETE";
const UPDATE = "word/UPDATE";


// 초기 상태값을 만들어줍니다.
const initialState = { is_loaded: false, list: [] }



// 액션 생성 함수
export function loadDict(word_list) {
  return { type: LOAD, word_list };
}

export function createDict(word_info) {
  console.log('create액션발생!')
  return { type: CREATE, word_info };
}

export function deleteDict(word_index, word_list) {
  console.log('DELETE발생!')
  return { type: DELETE, word_index, word_list };
}

export function updateDict(word_index) {
  console.log('UPDATE!')
  return { type: UPDATE, word_index };
}



// ** Middlewares **
// 파이어스토어의 데이터 store에 넣기
// 리스트 조회
export const loadDictFB = () => {
  return async function (dispatch) {
    const dict_data = await getDocs(collection(db, "dict"));
    // collection의 데이터 다 불러오기

    let word_list = [];

    dict_data.forEach((doc) => {
      // console.log(doc.id, doc.data())
      word_list.push({ id: doc.id, ...doc.data() });
      // === dictionary_list.push(doc.data());
    })
    // console.log(word_list);
    dispatch(loadDict(word_list))
  }
}
// 추가
export const createDictFB = (dict) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dict"), dict)

    console.log((await getDoc(docRef)).data())
    const dict_data = { id: docRef, ...dict }


    dispatch(createDict(dict_data));
  }
}

export const updateDictFB = (dict_id, dict) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "dict", dict_id);
    // console.log(dict_id, dict)
    // dict.doc(dict.id).update({ completed: !dict.completed });
    // dispatch(updateDict(dict.id));




    // const docRef = doc(db, "dict", dict_id);

    await updateDoc(docRef, { completed: !dict.completed });

    // // if(completed ===)
    // await updateDoc(docRef, { completed: !dict_id.completed });

    const _dict_list = getState().dict.list;
    const dict_index = _dict_list.findIndex((e) => {
      return e.id === dict_id;
    })

    dispatch(updateDict(dict_index));

  }
}


// 삭제
export const deleteDictFB = (dict_id) => {
  return async function (dispatch, getState) {
    if (!dict_id) {
      window.alert('아이디가 없습니다')
      return;
    }

    const docRef = doc(db, "dict", dict_id);
    await deleteDoc(docRef);

    const _dict_list = getState().dict.list;
    const dict_index = _dict_list.findIndex((e) => {
      return e.id === dict_id;
    })

    dispatch(deleteDict(dict_index));
  }
}

// 리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    // 불러오기
    case "word/LOAD": {
      return { list: action.word_list };
    }
    // 추가
    case "word/CREATE": {
      const new_dict_list = { is_loaded: state.is_loaded, list: [...state.list, action.word_info] };
      console.log(new_dict_list);

      return { list: new_dict_list.list };
    }

    // 삭제
    case "word/DELETE": {
      console.log(state);
      const new_dict_list = state.list.filter((e, i) => {
        return Number(action.word_index) !== i;
      });

      console.log(new_dict_list);
      return { list: new_dict_list };
    };

    //수정
    case "word/UPDATE": {
      const new_bucket_list = state.list.map((e, idx) => {
        if (parseInt(action.word_index) === idx) {
          // console.log(e.completed)
          return { ...e, completed: !e.completed }
        } else {
          return e;
        }
      });
      return { list: new_bucket_list };
    }


    default:
      return state;
  }
}