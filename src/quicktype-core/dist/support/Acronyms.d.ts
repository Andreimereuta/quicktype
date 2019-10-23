export declare const acronyms: string[];
export declare enum AcronymStyleOptions {
    Pascal,
    Camel,
    Original,
    Lower,
}
export declare const acronymOption: (defaultOption: AcronymStyleOptions) => any;
export declare function acronymStyle(style: AcronymStyleOptions): (s: string) => string;
