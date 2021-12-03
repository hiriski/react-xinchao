import { StatusCodes } from 'http-status-codes'

/*
 * maybe i use custom response status from api like { acknowLedge: 1 }, i can define in this file.
 */

export const httpResponseOK = (status: number): boolean => status === StatusCodes.OK

export const httpResponseCreated = (status: number): boolean => status === StatusCodes.CREATED

export const httpResponseUnauthorized = (status: number): boolean => status === StatusCodes.UNAUTHORIZED

export const httpResponseForbidden = (status: number): boolean => status === StatusCodes.FORBIDDEN

export const httpResponseUnprocessableEntity = (status: number): boolean => status === StatusCodes.UNPROCESSABLE_ENTITY
