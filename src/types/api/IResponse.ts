export type IResponse<T>= IFailureResponse | ISuccessResponse<T>;

export interface IFailureResponse {
  success: false;
  message?: string;
  data?: {
    status: number;
    params?: Record<string, string>;
    details?: Record<string, { code: string; message: string; data: any }>;
  };
}
export interface ISuccessResponse<T> {
  success: true;
  data?: T;
}
