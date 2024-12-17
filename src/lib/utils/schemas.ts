import * as yup from 'yup';

import { CompanyStatus } from '../api';

export const newCompanySchema = yup
  .object({
    avatar: yup
      .mixed()
      .test('fileSize', 'File size must be less than 3 MB', (val) => {
        if (Array.isArray(val) && val[0] instanceof File) {
          return val[0].size <= 3145728;
        }
        return false;
      }),
    status: yup
      .string()
      .oneOf(Object.values(CompanyStatus), 'Invalid value')
      .required('required'),
    countryTitle: yup.string().required('Required'),
    title: yup.string().required('Required'),
    categoryTitle: yup.string().required('Required'),
    joinedDate: yup.string().required('Required'),
    description: yup.string().required('Required'),
  })
  .required();
