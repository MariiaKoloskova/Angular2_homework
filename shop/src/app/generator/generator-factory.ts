import { InjectionToken } from "@angular/core";
import { GeneratorService } from "./generator.service";

export const Random = new InjectionToken<string>('Random');

export function GeneratorFactory(length: number) {
    return function(generator: GeneratorService): string {
        return generator.returnSequence(length);   
    }
}
