export interface Show {
    id: number,
    title: string,
    year:number,
    episodes:number,
    image: string,
    //puede estar definido o no
    isSelected?: boolean,
}