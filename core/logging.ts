export const log = (log: Log) => {
    const jsonLog = JSON.stringify(log);
    if (log.type === 'Error') {
        console.error(jsonLog);
    } else {
        console.log(jsonLog);
    } 
}

export type LogType = 'Error' | 'Response';

export type Log = {
    type: LogType;
    code: any;
    body: any;
    route: string | null;
};
