import create from "zustand";

// slice
const sliceUser = (set) => ({
    // state & action

    email: null,
    userCredential: [],
    storeUser: (emailPar, userCrePar) => {
        set((state) => ({...state, email: emailPar, userCredential: userCrePar }));
        console.log(emailPar, userCrePar)
    },
});

// hoooks
const useUserStore = create(sliceUser);


//selector
export const selectEmail = (state) => state.email;
export const selectUserCredential = (state) => state.userCredential;
export const selectStoreUser =(state) => state.storeUser;

export default useUserStore;