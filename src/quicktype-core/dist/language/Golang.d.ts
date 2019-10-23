import { Type } from "../Type";
import { Name, DependencyName, Namer } from "../Naming";
import { StringOption, BooleanOption, Option, OptionValues } from "../RendererOptions";
import { Sourcelike } from "../Source";
import { TargetLanguage } from "../TargetLanguage";
import { ConvenienceRenderer } from "../ConvenienceRenderer";
import { RenderContext } from "../Renderer";
export declare const goOptions: {
    justTypes: BooleanOption;
    packageName: StringOption;
    multiFileOutput: BooleanOption;
};
export declare class GoTargetLanguage extends TargetLanguage {
    constructor();
    protected getOptions(): Option<any>[];
    readonly supportsUnionsWithBothNumberTypes: boolean;
    readonly supportsOptionalClassProperties: boolean;
    protected makeRenderer(renderContext: RenderContext, untypedOptionValues: {
        [name: string]: any;
    }): GoRenderer;
    protected readonly defaultIndentation: string;
}
export declare class GoRenderer extends ConvenienceRenderer {
    private readonly _options;
    private readonly _topLevelUnmarshalNames;
    private _currentFilename;
    constructor(targetLanguage: TargetLanguage, renderContext: RenderContext, _options: OptionValues<typeof goOptions>);
    protected makeNamedTypeNamer(): Namer;
    protected namerForObjectProperty(): Namer;
    protected makeUnionMemberNamer(): Namer;
    protected makeEnumCaseNamer(): Namer;
    protected readonly enumCasesInGlobalNamespace: boolean;
    protected makeTopLevelDependencyNames(_: Type, topLevelName: Name): DependencyName[];
    protected startFile(basename: Sourcelike): void;
    protected endFile(): void;
    private emitBlock(line, f);
    private emitFunc(decl, f);
    private emitStruct(name, table);
    private nullableGoType(t, withIssues);
    private propertyGoType(cp);
    private goType(t, withIssues?);
    private emitTopLevel(t, name);
    private emitClass(c, className);
    private emitEnum(e, enumName);
    private emitUnion(u, unionName);
    private emitSingleFileHeaderComments();
    private emitPackageDefinitons(includeJSONEncodingImport);
    private emitHelperFunctions();
    protected emitSourceStructure(): void;
}
