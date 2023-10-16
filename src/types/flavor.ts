interface Flavoring<FlavorType> {
    _type?: FlavorType
}
// Credit to: https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/
export type Flavor<T, FlavorT> = T & Flavoring<FlavorT>;