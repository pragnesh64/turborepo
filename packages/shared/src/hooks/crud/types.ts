export type DeleteByIdProps = {
  apiname: string;
  id: number | string | Array<number | string>;
  forceDelete?: boolean;
};

export type ApiResponse<T> = {
  data: T;
  message: string;
};

export type FetchAllIDParams = {
  apiname: string;
  id?: string;
  skip?: boolean;
};
