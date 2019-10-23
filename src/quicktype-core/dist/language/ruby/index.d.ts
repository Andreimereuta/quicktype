import { Namer, Name } from "../../Naming";
import { ConvenienceRenderer, ForbiddenWordsInfo } from "../../ConvenienceRenderer";
import { TargetLanguage } from "../../TargetLanguage";
import { Option, BooleanOption, EnumOption, OptionValues } from "../../RendererOptions";
import { Type, ClassType } from "../../Type";
import { RenderContext } from "../../Renderer";
export declare enum Strictness {
    Strict,
    Coercible,
    None,
}
export declare const rubyOptions: {
    justTypes: BooleanOption;
    strictness: EnumOption<Strictness>;
};
export declare class RubyTargetLanguage extends TargetLanguage {
    constructor();
    protected getOptions(): Option<any>[];
    readonly supportsOptionalClassProperties: boolean;
    protected readonly defaultIndentation: string;
    protected makeRenderer(renderContext: RenderContext, untypedOptionValues: {
        [name: string]: any;
    }): RubyRenderer;
}
export declare class RubyRenderer extends ConvenienceRenderer {
    private readonly _options;
    constructor(targetLanguage: TargetLanguage, renderContext: RenderContext, _options: OptionValues<typeof rubyOptions>);
    protected readonly commentLineStart: string;
    protected readonly needsTypeDeclarationBeforeUse: boolean;
    protected canBeForwardDeclared(t: Type): boolean;
    protected forbiddenNamesForGlobalNamespace(): string[];
    protected forbiddenForObjectProperties(_c: ClassType, _classNamed: Name): ForbiddenWordsInfo;
    protected makeNamedTypeNamer(): Namer;
    protected namerForObjectProperty(): Namer;
    protected makeUnionMemberNamer(): Namer;
    protected makeEnumCaseNamer(): Namer;
    private dryType(t, isOptional?);
    private exampleUse(t, exp, depth?, optional?);
    private jsonSample(t);
    private fromDynamic(t, e, optional?, castPrimitives?);
    private toDynamic(t, e, optional?);
    private marshalsImplicitlyToDynamic(t);
    private propertyTypeMarshalsImplicitlyFromDynamic(t);
    private emitBlock(source, emit);
    private emitClass(c, className);
    private emitEnum(e, enumName);
    private emitUnion(u, unionName);
    private emitTypesModule();
    protected emitSourceStructure(): void;
}
