import { atom } from 'recoil';

export const AllMicrocmsWorksState = atom({
  key: 'AllMicrocmsWorksState',
  default: {
    githubUrl: '',
    productDatail: '',
    productImage: '',
    productTitle: '',
    productUrl: '',
    productComposition: '',
    productData: '',
    sortIndex: 0,
  },
});
