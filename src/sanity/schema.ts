import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import project from "./schemaTypes/project";
import techs from "./schemaTypes/techs";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, project, techs],
};
