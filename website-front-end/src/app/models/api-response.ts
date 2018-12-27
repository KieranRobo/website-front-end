export class APIResponse {

    constructor(
        public responseCode: number,
        public responseBody: string,
        public responseFrom: string,
        public successStatus?: boolean
    ) 
    {
     }
}
