export const LOAD_OKR_LIST_ASYNC = 'LOAD_OKR_LIST_ASYNC';
export const LOAD_OKR_LIST = 'LOAD_OKR_LIST';

export function loadOkrList() {
    return {
      type: LOAD_OKR_LIST_ASYNC
    };
}