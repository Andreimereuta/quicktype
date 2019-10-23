import { TargetLanguage } from "../TargetLanguage";
import { EnumOption, StringOption, BooleanOption, Option, OptionValues } from "../RendererOptions";
import { Type, ClassType, UnionType } from "../Type";
import { ConvenienceRenderer, ForbiddenWordsInfo } from "../ConvenienceRenderer";
import { Namer, Name, DependencyName } from "../Naming";
import { Sourcelike } from "../Source";
import { RenderContext } from "../Renderer";
export declare const elmOptions: {
    justTypes: BooleanOption;
    useList: EnumOption<boolean>;
    moduleName: StringOption;
};
export declare class ElmTargetLanguage extends TargetLanguage {
    constructor();
    protected getOptions(): Option<any>[];
    readonly supportsOptionalClassProperties: boolean;
    readonly supportsUnionsWithBothNumberTypes: boolean;
    protected makeRenderer(renderContext: RenderContext, untypedOptionValues: {
        [name: string]: any;
    }): ElmRenderer;
}
export declare class ElmRenderer extends ConvenienceRenderer {
    private readonly _options;
    private readonly _topLevelDependents;
    private readonly _namedTypeDependents;
    constructor(targetLanguage: TargetLanguage, renderContext: RenderContext, _options: OptionValues<typeof elmOptions>);
    protected forbiddenNamesForGlobalNamespace(): string[];
    protected makeTopLevelDependencyNames(t: Type, topLevelName: Name): DependencyName[];
    protected makeNamedTypeNamer(): Namer;
    protected makeNamedTypeDependencyNames(_: Type, typeName: Name): DependencyName[];
    protected namerForObjectProperty(): Namer;
    protected forbiddenForObjectProperties(_c: ClassType, _className: Name): ForbiddenWordsInfo;
    protected makeUnionMemberNamer(): Namer;
    protected readonly unionMembersInGlobalNamespace: boolean;
    protected makeEnumCaseNamer(): Namer;
    protected readonly enumCasesInGlobalNamespace: boolean;
    protected proposeUnionMemberName(u: UnionType, unionName: Name, fieldType: Type, lookup: (n: Name) => string): string;
    protected readonly commentLineStart: string;
    protected emitDescriptionBlock(lines: Sourcelike[]): void;
    private readonly arrayType;
    private elmType(t, noOptional?);
    private elmProperty(p);
    private decoderNameForNamedType(t);
    private decoderNameForType(t, noOptional?);
    private decoderNameForProperty(p);
    private encoderNameForNamedType(t);
    private encoderNameForType(t, noOptional?);
    private encoderNameForProperty(p);
    private emitTopLevelDefinition(t, topLevelName);
    private emitClassDefinition(c, className);
    private emitEnumDefinition(e, enumName);
    private emitUnionDefinition(u, unionName);
    private emitTopLevelFunctions(t, topLevelName);
    private emitClassFunctions(c, className);
    private emitEnumFunctions(e, enumName);
    private emitUnionFunctions(u, unionName);
    protected emitSourceStructure(): void;
}
