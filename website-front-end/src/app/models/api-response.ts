export class APIResponse {

    constructor(
        public responseCode: number,
        public responseBody: Promise<string>,
        public responseFrom: string,
        public successStatus?: boolean
    ) 
    {
     }
}
