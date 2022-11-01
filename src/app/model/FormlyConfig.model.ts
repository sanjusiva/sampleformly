
export interface FormlyCfg{
type : string;
key: string;
className?:string;
props:PropCfg;
}

export interface SelectCfg{
    label:string;
    value:string | number;
}

export interface PropCfg{
    label:string;
    required?:boolean;
    options?:SelectCfg[];
}