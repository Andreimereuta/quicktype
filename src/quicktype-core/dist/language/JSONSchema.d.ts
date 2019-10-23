import { TargetLanguage } from "../TargetLanguage";
import { ConvenienceRenderer } from "../ConvenienceRenderer";
import { Namer } from "../Naming";
import { StringTypeMapping } from "../TypeBuilder";
import { Option } from "../RendererOptions";
import { RenderContext } from "../Renderer";
export declare class JSONSchemaTargetLanguage extends TargetLanguage {
    constructor();
    protected getOptions(): Option<any>[];
    readonly stringTypeMapping: StringTypeMapping;
    readonly supportsOptionalClassProperties: boolean;
    readonly supportsFullObjectType: boolean;
    protected makeRenderer(renderContext: RenderContext, _untypedOptionValues: {
        [name: string]: any;
    }): JSONSchemaRenderer;
}
export declare class JSONSchemaRenderer extends ConvenienceRenderer {
    protected makeNamedTypeNamer(): Namer;
    protected namerForObjectProperty(): null;
    protected makeUnionMemberNamer(): null;
    protected makeEnumCaseNamer(): null;
    private nameForType(t);
    private makeOneOf(types);
    private makeRef(t);
    private addAttributesToSchema(t, schema);
    private schemaForType(t);
    private definitionForObject(o, title);
    private definitionForUnion(u, title?);
    private definitionForEnum(e, title);
    protected emitSourceStructure(): void;
}
