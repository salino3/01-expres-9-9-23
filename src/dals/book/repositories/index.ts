import { mockRepository } from "./book.mock-repository.js";
import { dbRepository } from "./book.db-repository.js";
import { envConstants } from "#core/constants/env.constats.js";

// TODO: Create env variable


export const bookRepository = envConstants.isAPI_MOCK 
      ? mockRepository 
      : dbRepository;
