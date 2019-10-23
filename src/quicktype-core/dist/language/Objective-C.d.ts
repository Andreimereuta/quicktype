import { TargetLanguage } from "../TargetLanguage";
import { Type, ClassType, EnumType, ClassProperty } from "../Type";
import { Name, Namer } from "../Naming";
import { Sourcelike } from "../Source";
import { ConvenienceRenderer, ForbiddenWordsInfo } from "../ConvenienceRenderer";
import { StringOption, BooleanOption, EnumOption, Option, OptionValues } from "../RendererOptions";
import { RenderContext } from "../Renderer";
export declare type MemoryAttribute = "assign" | "strong" | "copy";
export declare type OutputFeatures = {
    interface: boolean;
    implementation: boolean;
};
export declare const objcOptions: {
    features: EnumOption<{
        interface: boolean;
        implementation: boolean;
    }>;
    justTypes: BooleanOption;
    marshallingFunctions: BooleanOption;
    classPrefix: StringOption;
    extraComments: BooleanOption;
};
export declare class ObjectiveCTargetLanguage extends TargetLanguage {
    constructor();
    protected getOptions(): Option<any>[];
    protected makeRenderer(renderContext: RenderContext, untypedOptionValues: {
        [name: string]: any;
    }): ObjectiveCRenderer;
}
export declare class ObjectiveCRenderer extends ConvenienceRenderer {
    private readonly _options;
    private _currentFilename;
    private readonly _classPrefix;
    constructor(targetLanguage: TargetLanguage, renderContext: RenderContext, _options: OptionValues<typeof objcOptions>);
    private inferClassPrefix(name);
    protected forbiddenNamesForGlobalNamespace(): string[];
    protected forbiddenForObjectProperties(_c: ClassType, _className: Name): ForbiddenWordsInfo;
    protected forbiddenForEnumCases(_e: EnumType, _enumName: Name): ForbiddenWordsInfo;
    protected makeNamedTypeNamer(): Namer;
    protected namerForObjectProperty(_: ClassType, p: ClassProperty): Namer;
    protected makeUnionMemberNamer(): null;
    protected makeEnumCaseNamer(): Namer;
    protected namedTypeToNameForTopLevel(type: Type): Type | undefined;
    protected emitDescriptionBlock(lines: Sourcelike[]): void;
    protected emitBlock(line: Sourcelike, f: () => void): void;
    protected emitMethod(declaration: Sourcelike, f: () => void): void;
    protected emitExtraComments(...comments: Sourcelike[]): void;
    protected startFile(basename: Sourcelike, extension: string): void;
    protected finishFile(): void;
    protected memoryAttribute(t: Type, isNullable: boolean): MemoryAttribute;
    protected objcType(t: Type, nullableOrBoxed?: boolean): [Sourcelike, string];
    private jsonType(t);
    protected fromDynamicExpression(t: Type, ...dynamic: Sourcelike[]): Sourcelike;
    protected toDynamicExpression(t: Type, typed: Sourcelike): Sourcelike;
    protected implicitlyConvertsFromJSON(t: Type): boolean;
    protected implicitlyConvertsToJSON(t: Type): boolean;
    protected emitPropertyAssignment(propertyName: Name, jsonName: string, propertyType: Type): void;
    protected emitPrivateClassInterface(_: ClassType, name: Name): void;
    protected pointerAwareTypeName(t: Type | [Sourcelike, string]): Sourcelike;
    private emitNonClassTopLevelTypedef(t, name);
    private topLevelFromDataPrototype(name);
    private topLevelFromJSONPrototype(name);
    private topLevelToDataPrototype(name, pad?);
    private topLevelToJSONPrototype(name, pad?);
    private emitTopLevelFunctionDeclarations(_, name);
    private emitTryCatchAsError(inTry, inCatch);
    private emitTopLevelFunctions(t, name);
    private emitClassInterface(t, className);
    protected hasIrregularProperties(t: ClassType): boolean;
    protected hasUnsafeProperties(t: ClassType): boolean;
    private emitClassImplementation(t, className);
    protected emitMark(label: string): void;
    protected variableNameForTopLevel(name: Name): Sourcelike;
    private emitPseudoEnumInterface(enumType, enumName);
    private emitPseudoEnumImplementation(enumType, enumName);
    protected emitSourceStructure(proposedFilename: string): void;
    private readonly needsMap;
    protected emitMapFunction(): void;
}
