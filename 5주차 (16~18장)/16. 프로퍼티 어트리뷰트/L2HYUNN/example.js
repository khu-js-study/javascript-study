/**
 * @description
 * Vue에서의 대용량 데이터 처리 및 성능 최적화 방법
 *
 * Vue는 data, state, computed, getters와 같은 모델이 선언되면 defineReactive를 통해 해당 객체는 반응형 관리 대상으로 등록되어 반응적으로 변경이 되는데
 * 이 과정에서 각 개체마다 Observe 생성되고 내부적으로 getter/setter가 생성된다. 실제로 모델의 데이터를 열어보면 __Ob__이 붙은 것을 확인할 수 있다.
 *
 * 생각해보자 10만건에 대해서 객체가 반응형이라면 개체 1개마다 getter/setter가 생성될 것이다.
 * 10만개의 데이터가 단순 배열이 아닌 객체구조라면?
 * 10만건에 대해 이러한 과정을 거치는 것이(memory write) js heap memory의 증가 이유가 된다.
 *
 * 그래서 가장 중요한 것은 대용량의 데이를 가지고 있는 모델은 Vue의 반응형 관리대상에서 제외를 시키는 것이다.
 *
 * @see {@link https://kdydesign.github.io/2019/04/10/vuejs-performance/}
 */

//state
export const state = {
  bookList: [],
};

// mutations
export const mutations = {
  setBookList(state, payload) {
    state.bookList = Object.freeze(payload);
  },
  addBookList(state, bookList) {
    // lodash clone
    let cloneBookList = _.cloneDeep(bookList);

    cloneBookList.splice(1, 0, { name: "add book", date: "2019-04-08" });

    state.bookList = Object.freeze(cloneBookList);
  },
};

// actions
export const actions = {
  getBookList({ commit }) {
    // API call
    // ...

    commit("setBookList");
  },
};
