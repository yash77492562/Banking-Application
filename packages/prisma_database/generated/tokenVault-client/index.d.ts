
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AccountTokenVault
 * 
 */
export type AccountTokenVault = $Result.DefaultSelection<Prisma.$AccountTokenVaultPayload>
/**
 * Model UpiTokenVault
 * 
 */
export type UpiTokenVault = $Result.DefaultSelection<Prisma.$UpiTokenVaultPayload>
/**
 * Model CreditTokenVault
 * 
 */
export type CreditTokenVault = $Result.DefaultSelection<Prisma.$CreditTokenVaultPayload>
/**
 * Model DebitTokenVault
 * 
 */
export type DebitTokenVault = $Result.DefaultSelection<Prisma.$DebitTokenVaultPayload>
/**
 * Model EmailTokenVault
 * 
 */
export type EmailTokenVault = $Result.DefaultSelection<Prisma.$EmailTokenVaultPayload>
/**
 * Model PhoneTokenVault
 * 
 */
export type PhoneTokenVault = $Result.DefaultSelection<Prisma.$PhoneTokenVaultPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AccountTokenVaults
 * const accountTokenVaults = await prisma.accountTokenVault.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AccountTokenVaults
   * const accountTokenVaults = await prisma.accountTokenVault.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.accountTokenVault`: Exposes CRUD operations for the **AccountTokenVault** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountTokenVaults
    * const accountTokenVaults = await prisma.accountTokenVault.findMany()
    * ```
    */
  get accountTokenVault(): Prisma.AccountTokenVaultDelegate<ExtArgs>;

  /**
   * `prisma.upiTokenVault`: Exposes CRUD operations for the **UpiTokenVault** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UpiTokenVaults
    * const upiTokenVaults = await prisma.upiTokenVault.findMany()
    * ```
    */
  get upiTokenVault(): Prisma.UpiTokenVaultDelegate<ExtArgs>;

  /**
   * `prisma.creditTokenVault`: Exposes CRUD operations for the **CreditTokenVault** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTokenVaults
    * const creditTokenVaults = await prisma.creditTokenVault.findMany()
    * ```
    */
  get creditTokenVault(): Prisma.CreditTokenVaultDelegate<ExtArgs>;

  /**
   * `prisma.debitTokenVault`: Exposes CRUD operations for the **DebitTokenVault** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DebitTokenVaults
    * const debitTokenVaults = await prisma.debitTokenVault.findMany()
    * ```
    */
  get debitTokenVault(): Prisma.DebitTokenVaultDelegate<ExtArgs>;

  /**
   * `prisma.emailTokenVault`: Exposes CRUD operations for the **EmailTokenVault** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailTokenVaults
    * const emailTokenVaults = await prisma.emailTokenVault.findMany()
    * ```
    */
  get emailTokenVault(): Prisma.EmailTokenVaultDelegate<ExtArgs>;

  /**
   * `prisma.phoneTokenVault`: Exposes CRUD operations for the **PhoneTokenVault** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneTokenVaults
    * const phoneTokenVaults = await prisma.phoneTokenVault.findMany()
    * ```
    */
  get phoneTokenVault(): Prisma.PhoneTokenVaultDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AccountTokenVault: 'AccountTokenVault',
    UpiTokenVault: 'UpiTokenVault',
    CreditTokenVault: 'CreditTokenVault',
    DebitTokenVault: 'DebitTokenVault',
    EmailTokenVault: 'EmailTokenVault',
    PhoneTokenVault: 'PhoneTokenVault'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "accountTokenVault" | "upiTokenVault" | "creditTokenVault" | "debitTokenVault" | "emailTokenVault" | "phoneTokenVault"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AccountTokenVault: {
        payload: Prisma.$AccountTokenVaultPayload<ExtArgs>
        fields: Prisma.AccountTokenVaultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountTokenVaultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenVaultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountTokenVaultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenVaultPayload>
          }
          findFirst: {
            args: Prisma.AccountTokenVaultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenVaultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountTokenVaultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenVaultPayload>
          }
          findMany: {
            args: Prisma.AccountTokenVaultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenVaultPayload>[]
          }
          create: {
            args: Prisma.AccountTokenVaultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenVaultPayload>
          }
          createMany: {
            args: Prisma.AccountTokenVaultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountTokenVaultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenVaultPayload>[]
          }
          delete: {
            args: Prisma.AccountTokenVaultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenVaultPayload>
          }
          update: {
            args: Prisma.AccountTokenVaultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenVaultPayload>
          }
          deleteMany: {
            args: Prisma.AccountTokenVaultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountTokenVaultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountTokenVaultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTokenVaultPayload>
          }
          aggregate: {
            args: Prisma.AccountTokenVaultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountTokenVault>
          }
          groupBy: {
            args: Prisma.AccountTokenVaultGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountTokenVaultGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountTokenVaultCountArgs<ExtArgs>
            result: $Utils.Optional<AccountTokenVaultCountAggregateOutputType> | number
          }
        }
      }
      UpiTokenVault: {
        payload: Prisma.$UpiTokenVaultPayload<ExtArgs>
        fields: Prisma.UpiTokenVaultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpiTokenVaultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTokenVaultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpiTokenVaultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTokenVaultPayload>
          }
          findFirst: {
            args: Prisma.UpiTokenVaultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTokenVaultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpiTokenVaultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTokenVaultPayload>
          }
          findMany: {
            args: Prisma.UpiTokenVaultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTokenVaultPayload>[]
          }
          create: {
            args: Prisma.UpiTokenVaultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTokenVaultPayload>
          }
          createMany: {
            args: Prisma.UpiTokenVaultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpiTokenVaultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTokenVaultPayload>[]
          }
          delete: {
            args: Prisma.UpiTokenVaultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTokenVaultPayload>
          }
          update: {
            args: Prisma.UpiTokenVaultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTokenVaultPayload>
          }
          deleteMany: {
            args: Prisma.UpiTokenVaultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpiTokenVaultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UpiTokenVaultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTokenVaultPayload>
          }
          aggregate: {
            args: Prisma.UpiTokenVaultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpiTokenVault>
          }
          groupBy: {
            args: Prisma.UpiTokenVaultGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpiTokenVaultGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpiTokenVaultCountArgs<ExtArgs>
            result: $Utils.Optional<UpiTokenVaultCountAggregateOutputType> | number
          }
        }
      }
      CreditTokenVault: {
        payload: Prisma.$CreditTokenVaultPayload<ExtArgs>
        fields: Prisma.CreditTokenVaultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTokenVaultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTokenVaultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTokenVaultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTokenVaultPayload>
          }
          findFirst: {
            args: Prisma.CreditTokenVaultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTokenVaultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTokenVaultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTokenVaultPayload>
          }
          findMany: {
            args: Prisma.CreditTokenVaultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTokenVaultPayload>[]
          }
          create: {
            args: Prisma.CreditTokenVaultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTokenVaultPayload>
          }
          createMany: {
            args: Prisma.CreditTokenVaultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditTokenVaultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTokenVaultPayload>[]
          }
          delete: {
            args: Prisma.CreditTokenVaultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTokenVaultPayload>
          }
          update: {
            args: Prisma.CreditTokenVaultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTokenVaultPayload>
          }
          deleteMany: {
            args: Prisma.CreditTokenVaultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTokenVaultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditTokenVaultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTokenVaultPayload>
          }
          aggregate: {
            args: Prisma.CreditTokenVaultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditTokenVault>
          }
          groupBy: {
            args: Prisma.CreditTokenVaultGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditTokenVaultGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTokenVaultCountArgs<ExtArgs>
            result: $Utils.Optional<CreditTokenVaultCountAggregateOutputType> | number
          }
        }
      }
      DebitTokenVault: {
        payload: Prisma.$DebitTokenVaultPayload<ExtArgs>
        fields: Prisma.DebitTokenVaultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebitTokenVaultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitTokenVaultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebitTokenVaultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitTokenVaultPayload>
          }
          findFirst: {
            args: Prisma.DebitTokenVaultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitTokenVaultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebitTokenVaultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitTokenVaultPayload>
          }
          findMany: {
            args: Prisma.DebitTokenVaultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitTokenVaultPayload>[]
          }
          create: {
            args: Prisma.DebitTokenVaultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitTokenVaultPayload>
          }
          createMany: {
            args: Prisma.DebitTokenVaultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DebitTokenVaultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitTokenVaultPayload>[]
          }
          delete: {
            args: Prisma.DebitTokenVaultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitTokenVaultPayload>
          }
          update: {
            args: Prisma.DebitTokenVaultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitTokenVaultPayload>
          }
          deleteMany: {
            args: Prisma.DebitTokenVaultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DebitTokenVaultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DebitTokenVaultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitTokenVaultPayload>
          }
          aggregate: {
            args: Prisma.DebitTokenVaultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDebitTokenVault>
          }
          groupBy: {
            args: Prisma.DebitTokenVaultGroupByArgs<ExtArgs>
            result: $Utils.Optional<DebitTokenVaultGroupByOutputType>[]
          }
          count: {
            args: Prisma.DebitTokenVaultCountArgs<ExtArgs>
            result: $Utils.Optional<DebitTokenVaultCountAggregateOutputType> | number
          }
        }
      }
      EmailTokenVault: {
        payload: Prisma.$EmailTokenVaultPayload<ExtArgs>
        fields: Prisma.EmailTokenVaultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailTokenVaultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenVaultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailTokenVaultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenVaultPayload>
          }
          findFirst: {
            args: Prisma.EmailTokenVaultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenVaultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailTokenVaultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenVaultPayload>
          }
          findMany: {
            args: Prisma.EmailTokenVaultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenVaultPayload>[]
          }
          create: {
            args: Prisma.EmailTokenVaultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenVaultPayload>
          }
          createMany: {
            args: Prisma.EmailTokenVaultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailTokenVaultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenVaultPayload>[]
          }
          delete: {
            args: Prisma.EmailTokenVaultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenVaultPayload>
          }
          update: {
            args: Prisma.EmailTokenVaultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenVaultPayload>
          }
          deleteMany: {
            args: Prisma.EmailTokenVaultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailTokenVaultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmailTokenVaultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenVaultPayload>
          }
          aggregate: {
            args: Prisma.EmailTokenVaultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailTokenVault>
          }
          groupBy: {
            args: Prisma.EmailTokenVaultGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailTokenVaultGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailTokenVaultCountArgs<ExtArgs>
            result: $Utils.Optional<EmailTokenVaultCountAggregateOutputType> | number
          }
        }
      }
      PhoneTokenVault: {
        payload: Prisma.$PhoneTokenVaultPayload<ExtArgs>
        fields: Prisma.PhoneTokenVaultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneTokenVaultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneTokenVaultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneTokenVaultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneTokenVaultPayload>
          }
          findFirst: {
            args: Prisma.PhoneTokenVaultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneTokenVaultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneTokenVaultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneTokenVaultPayload>
          }
          findMany: {
            args: Prisma.PhoneTokenVaultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneTokenVaultPayload>[]
          }
          create: {
            args: Prisma.PhoneTokenVaultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneTokenVaultPayload>
          }
          createMany: {
            args: Prisma.PhoneTokenVaultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneTokenVaultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneTokenVaultPayload>[]
          }
          delete: {
            args: Prisma.PhoneTokenVaultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneTokenVaultPayload>
          }
          update: {
            args: Prisma.PhoneTokenVaultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneTokenVaultPayload>
          }
          deleteMany: {
            args: Prisma.PhoneTokenVaultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneTokenVaultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhoneTokenVaultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneTokenVaultPayload>
          }
          aggregate: {
            args: Prisma.PhoneTokenVaultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneTokenVault>
          }
          groupBy: {
            args: Prisma.PhoneTokenVaultGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneTokenVaultGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneTokenVaultCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneTokenVaultCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AccountTokenVault
   */

  export type AggregateAccountTokenVault = {
    _count: AccountTokenVaultCountAggregateOutputType | null
    _avg: AccountTokenVaultAvgAggregateOutputType | null
    _sum: AccountTokenVaultSumAggregateOutputType | null
    _min: AccountTokenVaultMinAggregateOutputType | null
    _max: AccountTokenVaultMaxAggregateOutputType | null
  }

  export type AccountTokenVaultAvgAggregateOutputType = {
    accountNumberIndex: number | null
  }

  export type AccountTokenVaultSumAggregateOutputType = {
    accountNumberIndex: number | null
  }

  export type AccountTokenVaultMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    accountNumber: string | null
    accountNumberIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountTokenVaultMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    accountNumber: string | null
    accountNumberIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountTokenVaultCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    accountNumber: number
    accountNumberIndex: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountTokenVaultAvgAggregateInputType = {
    accountNumberIndex?: true
  }

  export type AccountTokenVaultSumAggregateInputType = {
    accountNumberIndex?: true
  }

  export type AccountTokenVaultMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    accountNumber?: true
    accountNumberIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountTokenVaultMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    accountNumber?: true
    accountNumberIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountTokenVaultCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    accountNumber?: true
    accountNumberIndex?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountTokenVaultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountTokenVault to aggregate.
     */
    where?: AccountTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTokenVaults to fetch.
     */
    orderBy?: AccountTokenVaultOrderByWithRelationInput | AccountTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountTokenVaults
    **/
    _count?: true | AccountTokenVaultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountTokenVaultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountTokenVaultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountTokenVaultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountTokenVaultMaxAggregateInputType
  }

  export type GetAccountTokenVaultAggregateType<T extends AccountTokenVaultAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountTokenVault]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountTokenVault[P]>
      : GetScalarType<T[P], AggregateAccountTokenVault[P]>
  }




  export type AccountTokenVaultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTokenVaultWhereInput
    orderBy?: AccountTokenVaultOrderByWithAggregationInput | AccountTokenVaultOrderByWithAggregationInput[]
    by: AccountTokenVaultScalarFieldEnum[] | AccountTokenVaultScalarFieldEnum
    having?: AccountTokenVaultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountTokenVaultCountAggregateInputType | true
    _avg?: AccountTokenVaultAvgAggregateInputType
    _sum?: AccountTokenVaultSumAggregateInputType
    _min?: AccountTokenVaultMinAggregateInputType
    _max?: AccountTokenVaultMaxAggregateInputType
  }

  export type AccountTokenVaultGroupByOutputType = {
    id: string
    token: string
    userId: string
    accountNumber: string
    accountNumberIndex: number
    createdAt: Date
    updatedAt: Date
    _count: AccountTokenVaultCountAggregateOutputType | null
    _avg: AccountTokenVaultAvgAggregateOutputType | null
    _sum: AccountTokenVaultSumAggregateOutputType | null
    _min: AccountTokenVaultMinAggregateOutputType | null
    _max: AccountTokenVaultMaxAggregateOutputType | null
  }

  type GetAccountTokenVaultGroupByPayload<T extends AccountTokenVaultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountTokenVaultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountTokenVaultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountTokenVaultGroupByOutputType[P]>
            : GetScalarType<T[P], AccountTokenVaultGroupByOutputType[P]>
        }
      >
    >


  export type AccountTokenVaultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    accountNumber?: boolean
    accountNumberIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountTokenVault"]>

  export type AccountTokenVaultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    accountNumber?: boolean
    accountNumberIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountTokenVault"]>

  export type AccountTokenVaultSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    accountNumber?: boolean
    accountNumberIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AccountTokenVaultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountTokenVault"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      accountNumber: string
      accountNumberIndex: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountTokenVault"]>
    composites: {}
  }

  type AccountTokenVaultGetPayload<S extends boolean | null | undefined | AccountTokenVaultDefaultArgs> = $Result.GetResult<Prisma.$AccountTokenVaultPayload, S>

  type AccountTokenVaultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountTokenVaultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountTokenVaultCountAggregateInputType | true
    }

  export interface AccountTokenVaultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountTokenVault'], meta: { name: 'AccountTokenVault' } }
    /**
     * Find zero or one AccountTokenVault that matches the filter.
     * @param {AccountTokenVaultFindUniqueArgs} args - Arguments to find a AccountTokenVault
     * @example
     * // Get one AccountTokenVault
     * const accountTokenVault = await prisma.accountTokenVault.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountTokenVaultFindUniqueArgs>(args: SelectSubset<T, AccountTokenVaultFindUniqueArgs<ExtArgs>>): Prisma__AccountTokenVaultClient<$Result.GetResult<Prisma.$AccountTokenVaultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AccountTokenVault that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountTokenVaultFindUniqueOrThrowArgs} args - Arguments to find a AccountTokenVault
     * @example
     * // Get one AccountTokenVault
     * const accountTokenVault = await prisma.accountTokenVault.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountTokenVaultFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountTokenVaultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountTokenVaultClient<$Result.GetResult<Prisma.$AccountTokenVaultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AccountTokenVault that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenVaultFindFirstArgs} args - Arguments to find a AccountTokenVault
     * @example
     * // Get one AccountTokenVault
     * const accountTokenVault = await prisma.accountTokenVault.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountTokenVaultFindFirstArgs>(args?: SelectSubset<T, AccountTokenVaultFindFirstArgs<ExtArgs>>): Prisma__AccountTokenVaultClient<$Result.GetResult<Prisma.$AccountTokenVaultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AccountTokenVault that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenVaultFindFirstOrThrowArgs} args - Arguments to find a AccountTokenVault
     * @example
     * // Get one AccountTokenVault
     * const accountTokenVault = await prisma.accountTokenVault.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountTokenVaultFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountTokenVaultFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountTokenVaultClient<$Result.GetResult<Prisma.$AccountTokenVaultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AccountTokenVaults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenVaultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountTokenVaults
     * const accountTokenVaults = await prisma.accountTokenVault.findMany()
     * 
     * // Get first 10 AccountTokenVaults
     * const accountTokenVaults = await prisma.accountTokenVault.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountTokenVaultWithIdOnly = await prisma.accountTokenVault.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountTokenVaultFindManyArgs>(args?: SelectSubset<T, AccountTokenVaultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTokenVaultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AccountTokenVault.
     * @param {AccountTokenVaultCreateArgs} args - Arguments to create a AccountTokenVault.
     * @example
     * // Create one AccountTokenVault
     * const AccountTokenVault = await prisma.accountTokenVault.create({
     *   data: {
     *     // ... data to create a AccountTokenVault
     *   }
     * })
     * 
     */
    create<T extends AccountTokenVaultCreateArgs>(args: SelectSubset<T, AccountTokenVaultCreateArgs<ExtArgs>>): Prisma__AccountTokenVaultClient<$Result.GetResult<Prisma.$AccountTokenVaultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AccountTokenVaults.
     * @param {AccountTokenVaultCreateManyArgs} args - Arguments to create many AccountTokenVaults.
     * @example
     * // Create many AccountTokenVaults
     * const accountTokenVault = await prisma.accountTokenVault.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountTokenVaultCreateManyArgs>(args?: SelectSubset<T, AccountTokenVaultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountTokenVaults and returns the data saved in the database.
     * @param {AccountTokenVaultCreateManyAndReturnArgs} args - Arguments to create many AccountTokenVaults.
     * @example
     * // Create many AccountTokenVaults
     * const accountTokenVault = await prisma.accountTokenVault.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountTokenVaults and only return the `id`
     * const accountTokenVaultWithIdOnly = await prisma.accountTokenVault.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountTokenVaultCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountTokenVaultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTokenVaultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AccountTokenVault.
     * @param {AccountTokenVaultDeleteArgs} args - Arguments to delete one AccountTokenVault.
     * @example
     * // Delete one AccountTokenVault
     * const AccountTokenVault = await prisma.accountTokenVault.delete({
     *   where: {
     *     // ... filter to delete one AccountTokenVault
     *   }
     * })
     * 
     */
    delete<T extends AccountTokenVaultDeleteArgs>(args: SelectSubset<T, AccountTokenVaultDeleteArgs<ExtArgs>>): Prisma__AccountTokenVaultClient<$Result.GetResult<Prisma.$AccountTokenVaultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AccountTokenVault.
     * @param {AccountTokenVaultUpdateArgs} args - Arguments to update one AccountTokenVault.
     * @example
     * // Update one AccountTokenVault
     * const accountTokenVault = await prisma.accountTokenVault.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountTokenVaultUpdateArgs>(args: SelectSubset<T, AccountTokenVaultUpdateArgs<ExtArgs>>): Prisma__AccountTokenVaultClient<$Result.GetResult<Prisma.$AccountTokenVaultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AccountTokenVaults.
     * @param {AccountTokenVaultDeleteManyArgs} args - Arguments to filter AccountTokenVaults to delete.
     * @example
     * // Delete a few AccountTokenVaults
     * const { count } = await prisma.accountTokenVault.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountTokenVaultDeleteManyArgs>(args?: SelectSubset<T, AccountTokenVaultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenVaultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountTokenVaults
     * const accountTokenVault = await prisma.accountTokenVault.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountTokenVaultUpdateManyArgs>(args: SelectSubset<T, AccountTokenVaultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountTokenVault.
     * @param {AccountTokenVaultUpsertArgs} args - Arguments to update or create a AccountTokenVault.
     * @example
     * // Update or create a AccountTokenVault
     * const accountTokenVault = await prisma.accountTokenVault.upsert({
     *   create: {
     *     // ... data to create a AccountTokenVault
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountTokenVault we want to update
     *   }
     * })
     */
    upsert<T extends AccountTokenVaultUpsertArgs>(args: SelectSubset<T, AccountTokenVaultUpsertArgs<ExtArgs>>): Prisma__AccountTokenVaultClient<$Result.GetResult<Prisma.$AccountTokenVaultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AccountTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenVaultCountArgs} args - Arguments to filter AccountTokenVaults to count.
     * @example
     * // Count the number of AccountTokenVaults
     * const count = await prisma.accountTokenVault.count({
     *   where: {
     *     // ... the filter for the AccountTokenVaults we want to count
     *   }
     * })
    **/
    count<T extends AccountTokenVaultCountArgs>(
      args?: Subset<T, AccountTokenVaultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountTokenVaultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenVaultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountTokenVaultAggregateArgs>(args: Subset<T, AccountTokenVaultAggregateArgs>): Prisma.PrismaPromise<GetAccountTokenVaultAggregateType<T>>

    /**
     * Group by AccountTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTokenVaultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountTokenVaultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountTokenVaultGroupByArgs['orderBy'] }
        : { orderBy?: AccountTokenVaultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountTokenVaultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountTokenVaultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountTokenVault model
   */
  readonly fields: AccountTokenVaultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountTokenVault.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountTokenVaultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountTokenVault model
   */ 
  interface AccountTokenVaultFieldRefs {
    readonly id: FieldRef<"AccountTokenVault", 'String'>
    readonly token: FieldRef<"AccountTokenVault", 'String'>
    readonly userId: FieldRef<"AccountTokenVault", 'String'>
    readonly accountNumber: FieldRef<"AccountTokenVault", 'String'>
    readonly accountNumberIndex: FieldRef<"AccountTokenVault", 'Int'>
    readonly createdAt: FieldRef<"AccountTokenVault", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountTokenVault", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountTokenVault findUnique
   */
  export type AccountTokenVaultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTokenVault
     */
    select?: AccountTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which AccountTokenVault to fetch.
     */
    where: AccountTokenVaultWhereUniqueInput
  }

  /**
   * AccountTokenVault findUniqueOrThrow
   */
  export type AccountTokenVaultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTokenVault
     */
    select?: AccountTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which AccountTokenVault to fetch.
     */
    where: AccountTokenVaultWhereUniqueInput
  }

  /**
   * AccountTokenVault findFirst
   */
  export type AccountTokenVaultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTokenVault
     */
    select?: AccountTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which AccountTokenVault to fetch.
     */
    where?: AccountTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTokenVaults to fetch.
     */
    orderBy?: AccountTokenVaultOrderByWithRelationInput | AccountTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTokenVaults.
     */
    cursor?: AccountTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTokenVaults.
     */
    distinct?: AccountTokenVaultScalarFieldEnum | AccountTokenVaultScalarFieldEnum[]
  }

  /**
   * AccountTokenVault findFirstOrThrow
   */
  export type AccountTokenVaultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTokenVault
     */
    select?: AccountTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which AccountTokenVault to fetch.
     */
    where?: AccountTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTokenVaults to fetch.
     */
    orderBy?: AccountTokenVaultOrderByWithRelationInput | AccountTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTokenVaults.
     */
    cursor?: AccountTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTokenVaults.
     */
    distinct?: AccountTokenVaultScalarFieldEnum | AccountTokenVaultScalarFieldEnum[]
  }

  /**
   * AccountTokenVault findMany
   */
  export type AccountTokenVaultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTokenVault
     */
    select?: AccountTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which AccountTokenVaults to fetch.
     */
    where?: AccountTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTokenVaults to fetch.
     */
    orderBy?: AccountTokenVaultOrderByWithRelationInput | AccountTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountTokenVaults.
     */
    cursor?: AccountTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTokenVaults.
     */
    skip?: number
    distinct?: AccountTokenVaultScalarFieldEnum | AccountTokenVaultScalarFieldEnum[]
  }

  /**
   * AccountTokenVault create
   */
  export type AccountTokenVaultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTokenVault
     */
    select?: AccountTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to create a AccountTokenVault.
     */
    data: XOR<AccountTokenVaultCreateInput, AccountTokenVaultUncheckedCreateInput>
  }

  /**
   * AccountTokenVault createMany
   */
  export type AccountTokenVaultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountTokenVaults.
     */
    data: AccountTokenVaultCreateManyInput | AccountTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountTokenVault createManyAndReturn
   */
  export type AccountTokenVaultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTokenVault
     */
    select?: AccountTokenVaultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AccountTokenVaults.
     */
    data: AccountTokenVaultCreateManyInput | AccountTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountTokenVault update
   */
  export type AccountTokenVaultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTokenVault
     */
    select?: AccountTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to update a AccountTokenVault.
     */
    data: XOR<AccountTokenVaultUpdateInput, AccountTokenVaultUncheckedUpdateInput>
    /**
     * Choose, which AccountTokenVault to update.
     */
    where: AccountTokenVaultWhereUniqueInput
  }

  /**
   * AccountTokenVault updateMany
   */
  export type AccountTokenVaultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountTokenVaults.
     */
    data: XOR<AccountTokenVaultUpdateManyMutationInput, AccountTokenVaultUncheckedUpdateManyInput>
    /**
     * Filter which AccountTokenVaults to update
     */
    where?: AccountTokenVaultWhereInput
  }

  /**
   * AccountTokenVault upsert
   */
  export type AccountTokenVaultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTokenVault
     */
    select?: AccountTokenVaultSelect<ExtArgs> | null
    /**
     * The filter to search for the AccountTokenVault to update in case it exists.
     */
    where: AccountTokenVaultWhereUniqueInput
    /**
     * In case the AccountTokenVault found by the `where` argument doesn't exist, create a new AccountTokenVault with this data.
     */
    create: XOR<AccountTokenVaultCreateInput, AccountTokenVaultUncheckedCreateInput>
    /**
     * In case the AccountTokenVault was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountTokenVaultUpdateInput, AccountTokenVaultUncheckedUpdateInput>
  }

  /**
   * AccountTokenVault delete
   */
  export type AccountTokenVaultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTokenVault
     */
    select?: AccountTokenVaultSelect<ExtArgs> | null
    /**
     * Filter which AccountTokenVault to delete.
     */
    where: AccountTokenVaultWhereUniqueInput
  }

  /**
   * AccountTokenVault deleteMany
   */
  export type AccountTokenVaultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountTokenVaults to delete
     */
    where?: AccountTokenVaultWhereInput
  }

  /**
   * AccountTokenVault without action
   */
  export type AccountTokenVaultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTokenVault
     */
    select?: AccountTokenVaultSelect<ExtArgs> | null
  }


  /**
   * Model UpiTokenVault
   */

  export type AggregateUpiTokenVault = {
    _count: UpiTokenVaultCountAggregateOutputType | null
    _min: UpiTokenVaultMinAggregateOutputType | null
    _max: UpiTokenVaultMaxAggregateOutputType | null
  }

  export type UpiTokenVaultMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    pa: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UpiTokenVaultMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    pa: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UpiTokenVaultCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    pa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UpiTokenVaultMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    pa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UpiTokenVaultMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    pa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UpiTokenVaultCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    pa?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UpiTokenVaultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpiTokenVault to aggregate.
     */
    where?: UpiTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpiTokenVaults to fetch.
     */
    orderBy?: UpiTokenVaultOrderByWithRelationInput | UpiTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpiTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpiTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpiTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UpiTokenVaults
    **/
    _count?: true | UpiTokenVaultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpiTokenVaultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpiTokenVaultMaxAggregateInputType
  }

  export type GetUpiTokenVaultAggregateType<T extends UpiTokenVaultAggregateArgs> = {
        [P in keyof T & keyof AggregateUpiTokenVault]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpiTokenVault[P]>
      : GetScalarType<T[P], AggregateUpiTokenVault[P]>
  }




  export type UpiTokenVaultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpiTokenVaultWhereInput
    orderBy?: UpiTokenVaultOrderByWithAggregationInput | UpiTokenVaultOrderByWithAggregationInput[]
    by: UpiTokenVaultScalarFieldEnum[] | UpiTokenVaultScalarFieldEnum
    having?: UpiTokenVaultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpiTokenVaultCountAggregateInputType | true
    _min?: UpiTokenVaultMinAggregateInputType
    _max?: UpiTokenVaultMaxAggregateInputType
  }

  export type UpiTokenVaultGroupByOutputType = {
    id: string
    token: string
    userId: string
    pa: string
    createdAt: Date
    updatedAt: Date
    _count: UpiTokenVaultCountAggregateOutputType | null
    _min: UpiTokenVaultMinAggregateOutputType | null
    _max: UpiTokenVaultMaxAggregateOutputType | null
  }

  type GetUpiTokenVaultGroupByPayload<T extends UpiTokenVaultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpiTokenVaultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpiTokenVaultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpiTokenVaultGroupByOutputType[P]>
            : GetScalarType<T[P], UpiTokenVaultGroupByOutputType[P]>
        }
      >
    >


  export type UpiTokenVaultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    pa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["upiTokenVault"]>

  export type UpiTokenVaultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    pa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["upiTokenVault"]>

  export type UpiTokenVaultSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    pa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UpiTokenVaultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UpiTokenVault"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      pa: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["upiTokenVault"]>
    composites: {}
  }

  type UpiTokenVaultGetPayload<S extends boolean | null | undefined | UpiTokenVaultDefaultArgs> = $Result.GetResult<Prisma.$UpiTokenVaultPayload, S>

  type UpiTokenVaultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UpiTokenVaultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UpiTokenVaultCountAggregateInputType | true
    }

  export interface UpiTokenVaultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UpiTokenVault'], meta: { name: 'UpiTokenVault' } }
    /**
     * Find zero or one UpiTokenVault that matches the filter.
     * @param {UpiTokenVaultFindUniqueArgs} args - Arguments to find a UpiTokenVault
     * @example
     * // Get one UpiTokenVault
     * const upiTokenVault = await prisma.upiTokenVault.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpiTokenVaultFindUniqueArgs>(args: SelectSubset<T, UpiTokenVaultFindUniqueArgs<ExtArgs>>): Prisma__UpiTokenVaultClient<$Result.GetResult<Prisma.$UpiTokenVaultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UpiTokenVault that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UpiTokenVaultFindUniqueOrThrowArgs} args - Arguments to find a UpiTokenVault
     * @example
     * // Get one UpiTokenVault
     * const upiTokenVault = await prisma.upiTokenVault.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpiTokenVaultFindUniqueOrThrowArgs>(args: SelectSubset<T, UpiTokenVaultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpiTokenVaultClient<$Result.GetResult<Prisma.$UpiTokenVaultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UpiTokenVault that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTokenVaultFindFirstArgs} args - Arguments to find a UpiTokenVault
     * @example
     * // Get one UpiTokenVault
     * const upiTokenVault = await prisma.upiTokenVault.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpiTokenVaultFindFirstArgs>(args?: SelectSubset<T, UpiTokenVaultFindFirstArgs<ExtArgs>>): Prisma__UpiTokenVaultClient<$Result.GetResult<Prisma.$UpiTokenVaultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UpiTokenVault that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTokenVaultFindFirstOrThrowArgs} args - Arguments to find a UpiTokenVault
     * @example
     * // Get one UpiTokenVault
     * const upiTokenVault = await prisma.upiTokenVault.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpiTokenVaultFindFirstOrThrowArgs>(args?: SelectSubset<T, UpiTokenVaultFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpiTokenVaultClient<$Result.GetResult<Prisma.$UpiTokenVaultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UpiTokenVaults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTokenVaultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UpiTokenVaults
     * const upiTokenVaults = await prisma.upiTokenVault.findMany()
     * 
     * // Get first 10 UpiTokenVaults
     * const upiTokenVaults = await prisma.upiTokenVault.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upiTokenVaultWithIdOnly = await prisma.upiTokenVault.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpiTokenVaultFindManyArgs>(args?: SelectSubset<T, UpiTokenVaultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpiTokenVaultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UpiTokenVault.
     * @param {UpiTokenVaultCreateArgs} args - Arguments to create a UpiTokenVault.
     * @example
     * // Create one UpiTokenVault
     * const UpiTokenVault = await prisma.upiTokenVault.create({
     *   data: {
     *     // ... data to create a UpiTokenVault
     *   }
     * })
     * 
     */
    create<T extends UpiTokenVaultCreateArgs>(args: SelectSubset<T, UpiTokenVaultCreateArgs<ExtArgs>>): Prisma__UpiTokenVaultClient<$Result.GetResult<Prisma.$UpiTokenVaultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UpiTokenVaults.
     * @param {UpiTokenVaultCreateManyArgs} args - Arguments to create many UpiTokenVaults.
     * @example
     * // Create many UpiTokenVaults
     * const upiTokenVault = await prisma.upiTokenVault.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpiTokenVaultCreateManyArgs>(args?: SelectSubset<T, UpiTokenVaultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UpiTokenVaults and returns the data saved in the database.
     * @param {UpiTokenVaultCreateManyAndReturnArgs} args - Arguments to create many UpiTokenVaults.
     * @example
     * // Create many UpiTokenVaults
     * const upiTokenVault = await prisma.upiTokenVault.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UpiTokenVaults and only return the `id`
     * const upiTokenVaultWithIdOnly = await prisma.upiTokenVault.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpiTokenVaultCreateManyAndReturnArgs>(args?: SelectSubset<T, UpiTokenVaultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpiTokenVaultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UpiTokenVault.
     * @param {UpiTokenVaultDeleteArgs} args - Arguments to delete one UpiTokenVault.
     * @example
     * // Delete one UpiTokenVault
     * const UpiTokenVault = await prisma.upiTokenVault.delete({
     *   where: {
     *     // ... filter to delete one UpiTokenVault
     *   }
     * })
     * 
     */
    delete<T extends UpiTokenVaultDeleteArgs>(args: SelectSubset<T, UpiTokenVaultDeleteArgs<ExtArgs>>): Prisma__UpiTokenVaultClient<$Result.GetResult<Prisma.$UpiTokenVaultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UpiTokenVault.
     * @param {UpiTokenVaultUpdateArgs} args - Arguments to update one UpiTokenVault.
     * @example
     * // Update one UpiTokenVault
     * const upiTokenVault = await prisma.upiTokenVault.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpiTokenVaultUpdateArgs>(args: SelectSubset<T, UpiTokenVaultUpdateArgs<ExtArgs>>): Prisma__UpiTokenVaultClient<$Result.GetResult<Prisma.$UpiTokenVaultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UpiTokenVaults.
     * @param {UpiTokenVaultDeleteManyArgs} args - Arguments to filter UpiTokenVaults to delete.
     * @example
     * // Delete a few UpiTokenVaults
     * const { count } = await prisma.upiTokenVault.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpiTokenVaultDeleteManyArgs>(args?: SelectSubset<T, UpiTokenVaultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpiTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTokenVaultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UpiTokenVaults
     * const upiTokenVault = await prisma.upiTokenVault.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpiTokenVaultUpdateManyArgs>(args: SelectSubset<T, UpiTokenVaultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UpiTokenVault.
     * @param {UpiTokenVaultUpsertArgs} args - Arguments to update or create a UpiTokenVault.
     * @example
     * // Update or create a UpiTokenVault
     * const upiTokenVault = await prisma.upiTokenVault.upsert({
     *   create: {
     *     // ... data to create a UpiTokenVault
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UpiTokenVault we want to update
     *   }
     * })
     */
    upsert<T extends UpiTokenVaultUpsertArgs>(args: SelectSubset<T, UpiTokenVaultUpsertArgs<ExtArgs>>): Prisma__UpiTokenVaultClient<$Result.GetResult<Prisma.$UpiTokenVaultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UpiTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTokenVaultCountArgs} args - Arguments to filter UpiTokenVaults to count.
     * @example
     * // Count the number of UpiTokenVaults
     * const count = await prisma.upiTokenVault.count({
     *   where: {
     *     // ... the filter for the UpiTokenVaults we want to count
     *   }
     * })
    **/
    count<T extends UpiTokenVaultCountArgs>(
      args?: Subset<T, UpiTokenVaultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpiTokenVaultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UpiTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTokenVaultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UpiTokenVaultAggregateArgs>(args: Subset<T, UpiTokenVaultAggregateArgs>): Prisma.PrismaPromise<GetUpiTokenVaultAggregateType<T>>

    /**
     * Group by UpiTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTokenVaultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UpiTokenVaultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpiTokenVaultGroupByArgs['orderBy'] }
        : { orderBy?: UpiTokenVaultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UpiTokenVaultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpiTokenVaultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UpiTokenVault model
   */
  readonly fields: UpiTokenVaultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UpiTokenVault.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpiTokenVaultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UpiTokenVault model
   */ 
  interface UpiTokenVaultFieldRefs {
    readonly id: FieldRef<"UpiTokenVault", 'String'>
    readonly token: FieldRef<"UpiTokenVault", 'String'>
    readonly userId: FieldRef<"UpiTokenVault", 'String'>
    readonly pa: FieldRef<"UpiTokenVault", 'String'>
    readonly createdAt: FieldRef<"UpiTokenVault", 'DateTime'>
    readonly updatedAt: FieldRef<"UpiTokenVault", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UpiTokenVault findUnique
   */
  export type UpiTokenVaultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTokenVault
     */
    select?: UpiTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which UpiTokenVault to fetch.
     */
    where: UpiTokenVaultWhereUniqueInput
  }

  /**
   * UpiTokenVault findUniqueOrThrow
   */
  export type UpiTokenVaultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTokenVault
     */
    select?: UpiTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which UpiTokenVault to fetch.
     */
    where: UpiTokenVaultWhereUniqueInput
  }

  /**
   * UpiTokenVault findFirst
   */
  export type UpiTokenVaultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTokenVault
     */
    select?: UpiTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which UpiTokenVault to fetch.
     */
    where?: UpiTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpiTokenVaults to fetch.
     */
    orderBy?: UpiTokenVaultOrderByWithRelationInput | UpiTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpiTokenVaults.
     */
    cursor?: UpiTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpiTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpiTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpiTokenVaults.
     */
    distinct?: UpiTokenVaultScalarFieldEnum | UpiTokenVaultScalarFieldEnum[]
  }

  /**
   * UpiTokenVault findFirstOrThrow
   */
  export type UpiTokenVaultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTokenVault
     */
    select?: UpiTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which UpiTokenVault to fetch.
     */
    where?: UpiTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpiTokenVaults to fetch.
     */
    orderBy?: UpiTokenVaultOrderByWithRelationInput | UpiTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpiTokenVaults.
     */
    cursor?: UpiTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpiTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpiTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpiTokenVaults.
     */
    distinct?: UpiTokenVaultScalarFieldEnum | UpiTokenVaultScalarFieldEnum[]
  }

  /**
   * UpiTokenVault findMany
   */
  export type UpiTokenVaultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTokenVault
     */
    select?: UpiTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which UpiTokenVaults to fetch.
     */
    where?: UpiTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpiTokenVaults to fetch.
     */
    orderBy?: UpiTokenVaultOrderByWithRelationInput | UpiTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UpiTokenVaults.
     */
    cursor?: UpiTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpiTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpiTokenVaults.
     */
    skip?: number
    distinct?: UpiTokenVaultScalarFieldEnum | UpiTokenVaultScalarFieldEnum[]
  }

  /**
   * UpiTokenVault create
   */
  export type UpiTokenVaultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTokenVault
     */
    select?: UpiTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to create a UpiTokenVault.
     */
    data: XOR<UpiTokenVaultCreateInput, UpiTokenVaultUncheckedCreateInput>
  }

  /**
   * UpiTokenVault createMany
   */
  export type UpiTokenVaultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UpiTokenVaults.
     */
    data: UpiTokenVaultCreateManyInput | UpiTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UpiTokenVault createManyAndReturn
   */
  export type UpiTokenVaultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTokenVault
     */
    select?: UpiTokenVaultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UpiTokenVaults.
     */
    data: UpiTokenVaultCreateManyInput | UpiTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UpiTokenVault update
   */
  export type UpiTokenVaultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTokenVault
     */
    select?: UpiTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to update a UpiTokenVault.
     */
    data: XOR<UpiTokenVaultUpdateInput, UpiTokenVaultUncheckedUpdateInput>
    /**
     * Choose, which UpiTokenVault to update.
     */
    where: UpiTokenVaultWhereUniqueInput
  }

  /**
   * UpiTokenVault updateMany
   */
  export type UpiTokenVaultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UpiTokenVaults.
     */
    data: XOR<UpiTokenVaultUpdateManyMutationInput, UpiTokenVaultUncheckedUpdateManyInput>
    /**
     * Filter which UpiTokenVaults to update
     */
    where?: UpiTokenVaultWhereInput
  }

  /**
   * UpiTokenVault upsert
   */
  export type UpiTokenVaultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTokenVault
     */
    select?: UpiTokenVaultSelect<ExtArgs> | null
    /**
     * The filter to search for the UpiTokenVault to update in case it exists.
     */
    where: UpiTokenVaultWhereUniqueInput
    /**
     * In case the UpiTokenVault found by the `where` argument doesn't exist, create a new UpiTokenVault with this data.
     */
    create: XOR<UpiTokenVaultCreateInput, UpiTokenVaultUncheckedCreateInput>
    /**
     * In case the UpiTokenVault was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpiTokenVaultUpdateInput, UpiTokenVaultUncheckedUpdateInput>
  }

  /**
   * UpiTokenVault delete
   */
  export type UpiTokenVaultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTokenVault
     */
    select?: UpiTokenVaultSelect<ExtArgs> | null
    /**
     * Filter which UpiTokenVault to delete.
     */
    where: UpiTokenVaultWhereUniqueInput
  }

  /**
   * UpiTokenVault deleteMany
   */
  export type UpiTokenVaultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpiTokenVaults to delete
     */
    where?: UpiTokenVaultWhereInput
  }

  /**
   * UpiTokenVault without action
   */
  export type UpiTokenVaultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTokenVault
     */
    select?: UpiTokenVaultSelect<ExtArgs> | null
  }


  /**
   * Model CreditTokenVault
   */

  export type AggregateCreditTokenVault = {
    _count: CreditTokenVaultCountAggregateOutputType | null
    _min: CreditTokenVaultMinAggregateOutputType | null
    _max: CreditTokenVaultMaxAggregateOutputType | null
  }

  export type CreditTokenVaultMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    creditNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditTokenVaultMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    creditNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditTokenVaultCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    creditNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreditTokenVaultMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    creditNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditTokenVaultMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    creditNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditTokenVaultCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    creditNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditTokenVaultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTokenVault to aggregate.
     */
    where?: CreditTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTokenVaults to fetch.
     */
    orderBy?: CreditTokenVaultOrderByWithRelationInput | CreditTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTokenVaults
    **/
    _count?: true | CreditTokenVaultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTokenVaultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTokenVaultMaxAggregateInputType
  }

  export type GetCreditTokenVaultAggregateType<T extends CreditTokenVaultAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTokenVault]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTokenVault[P]>
      : GetScalarType<T[P], AggregateCreditTokenVault[P]>
  }




  export type CreditTokenVaultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTokenVaultWhereInput
    orderBy?: CreditTokenVaultOrderByWithAggregationInput | CreditTokenVaultOrderByWithAggregationInput[]
    by: CreditTokenVaultScalarFieldEnum[] | CreditTokenVaultScalarFieldEnum
    having?: CreditTokenVaultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTokenVaultCountAggregateInputType | true
    _min?: CreditTokenVaultMinAggregateInputType
    _max?: CreditTokenVaultMaxAggregateInputType
  }

  export type CreditTokenVaultGroupByOutputType = {
    id: string
    token: string
    userId: string
    creditNumber: string
    createdAt: Date
    updatedAt: Date
    _count: CreditTokenVaultCountAggregateOutputType | null
    _min: CreditTokenVaultMinAggregateOutputType | null
    _max: CreditTokenVaultMaxAggregateOutputType | null
  }

  type GetCreditTokenVaultGroupByPayload<T extends CreditTokenVaultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTokenVaultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTokenVaultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTokenVaultGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTokenVaultGroupByOutputType[P]>
        }
      >
    >


  export type CreditTokenVaultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    creditNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creditTokenVault"]>

  export type CreditTokenVaultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    creditNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creditTokenVault"]>

  export type CreditTokenVaultSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    creditNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CreditTokenVaultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTokenVault"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      creditNumber: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creditTokenVault"]>
    composites: {}
  }

  type CreditTokenVaultGetPayload<S extends boolean | null | undefined | CreditTokenVaultDefaultArgs> = $Result.GetResult<Prisma.$CreditTokenVaultPayload, S>

  type CreditTokenVaultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditTokenVaultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditTokenVaultCountAggregateInputType | true
    }

  export interface CreditTokenVaultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTokenVault'], meta: { name: 'CreditTokenVault' } }
    /**
     * Find zero or one CreditTokenVault that matches the filter.
     * @param {CreditTokenVaultFindUniqueArgs} args - Arguments to find a CreditTokenVault
     * @example
     * // Get one CreditTokenVault
     * const creditTokenVault = await prisma.creditTokenVault.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditTokenVaultFindUniqueArgs>(args: SelectSubset<T, CreditTokenVaultFindUniqueArgs<ExtArgs>>): Prisma__CreditTokenVaultClient<$Result.GetResult<Prisma.$CreditTokenVaultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CreditTokenVault that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CreditTokenVaultFindUniqueOrThrowArgs} args - Arguments to find a CreditTokenVault
     * @example
     * // Get one CreditTokenVault
     * const creditTokenVault = await prisma.creditTokenVault.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditTokenVaultFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditTokenVaultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditTokenVaultClient<$Result.GetResult<Prisma.$CreditTokenVaultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CreditTokenVault that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTokenVaultFindFirstArgs} args - Arguments to find a CreditTokenVault
     * @example
     * // Get one CreditTokenVault
     * const creditTokenVault = await prisma.creditTokenVault.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditTokenVaultFindFirstArgs>(args?: SelectSubset<T, CreditTokenVaultFindFirstArgs<ExtArgs>>): Prisma__CreditTokenVaultClient<$Result.GetResult<Prisma.$CreditTokenVaultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CreditTokenVault that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTokenVaultFindFirstOrThrowArgs} args - Arguments to find a CreditTokenVault
     * @example
     * // Get one CreditTokenVault
     * const creditTokenVault = await prisma.creditTokenVault.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditTokenVaultFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditTokenVaultFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditTokenVaultClient<$Result.GetResult<Prisma.$CreditTokenVaultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CreditTokenVaults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTokenVaultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTokenVaults
     * const creditTokenVaults = await prisma.creditTokenVault.findMany()
     * 
     * // Get first 10 CreditTokenVaults
     * const creditTokenVaults = await prisma.creditTokenVault.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTokenVaultWithIdOnly = await prisma.creditTokenVault.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditTokenVaultFindManyArgs>(args?: SelectSubset<T, CreditTokenVaultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTokenVaultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CreditTokenVault.
     * @param {CreditTokenVaultCreateArgs} args - Arguments to create a CreditTokenVault.
     * @example
     * // Create one CreditTokenVault
     * const CreditTokenVault = await prisma.creditTokenVault.create({
     *   data: {
     *     // ... data to create a CreditTokenVault
     *   }
     * })
     * 
     */
    create<T extends CreditTokenVaultCreateArgs>(args: SelectSubset<T, CreditTokenVaultCreateArgs<ExtArgs>>): Prisma__CreditTokenVaultClient<$Result.GetResult<Prisma.$CreditTokenVaultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CreditTokenVaults.
     * @param {CreditTokenVaultCreateManyArgs} args - Arguments to create many CreditTokenVaults.
     * @example
     * // Create many CreditTokenVaults
     * const creditTokenVault = await prisma.creditTokenVault.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditTokenVaultCreateManyArgs>(args?: SelectSubset<T, CreditTokenVaultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditTokenVaults and returns the data saved in the database.
     * @param {CreditTokenVaultCreateManyAndReturnArgs} args - Arguments to create many CreditTokenVaults.
     * @example
     * // Create many CreditTokenVaults
     * const creditTokenVault = await prisma.creditTokenVault.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditTokenVaults and only return the `id`
     * const creditTokenVaultWithIdOnly = await prisma.creditTokenVault.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditTokenVaultCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditTokenVaultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTokenVaultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CreditTokenVault.
     * @param {CreditTokenVaultDeleteArgs} args - Arguments to delete one CreditTokenVault.
     * @example
     * // Delete one CreditTokenVault
     * const CreditTokenVault = await prisma.creditTokenVault.delete({
     *   where: {
     *     // ... filter to delete one CreditTokenVault
     *   }
     * })
     * 
     */
    delete<T extends CreditTokenVaultDeleteArgs>(args: SelectSubset<T, CreditTokenVaultDeleteArgs<ExtArgs>>): Prisma__CreditTokenVaultClient<$Result.GetResult<Prisma.$CreditTokenVaultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CreditTokenVault.
     * @param {CreditTokenVaultUpdateArgs} args - Arguments to update one CreditTokenVault.
     * @example
     * // Update one CreditTokenVault
     * const creditTokenVault = await prisma.creditTokenVault.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditTokenVaultUpdateArgs>(args: SelectSubset<T, CreditTokenVaultUpdateArgs<ExtArgs>>): Prisma__CreditTokenVaultClient<$Result.GetResult<Prisma.$CreditTokenVaultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CreditTokenVaults.
     * @param {CreditTokenVaultDeleteManyArgs} args - Arguments to filter CreditTokenVaults to delete.
     * @example
     * // Delete a few CreditTokenVaults
     * const { count } = await prisma.creditTokenVault.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditTokenVaultDeleteManyArgs>(args?: SelectSubset<T, CreditTokenVaultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTokenVaultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTokenVaults
     * const creditTokenVault = await prisma.creditTokenVault.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditTokenVaultUpdateManyArgs>(args: SelectSubset<T, CreditTokenVaultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditTokenVault.
     * @param {CreditTokenVaultUpsertArgs} args - Arguments to update or create a CreditTokenVault.
     * @example
     * // Update or create a CreditTokenVault
     * const creditTokenVault = await prisma.creditTokenVault.upsert({
     *   create: {
     *     // ... data to create a CreditTokenVault
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTokenVault we want to update
     *   }
     * })
     */
    upsert<T extends CreditTokenVaultUpsertArgs>(args: SelectSubset<T, CreditTokenVaultUpsertArgs<ExtArgs>>): Prisma__CreditTokenVaultClient<$Result.GetResult<Prisma.$CreditTokenVaultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CreditTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTokenVaultCountArgs} args - Arguments to filter CreditTokenVaults to count.
     * @example
     * // Count the number of CreditTokenVaults
     * const count = await prisma.creditTokenVault.count({
     *   where: {
     *     // ... the filter for the CreditTokenVaults we want to count
     *   }
     * })
    **/
    count<T extends CreditTokenVaultCountArgs>(
      args?: Subset<T, CreditTokenVaultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTokenVaultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTokenVaultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditTokenVaultAggregateArgs>(args: Subset<T, CreditTokenVaultAggregateArgs>): Prisma.PrismaPromise<GetCreditTokenVaultAggregateType<T>>

    /**
     * Group by CreditTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTokenVaultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditTokenVaultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTokenVaultGroupByArgs['orderBy'] }
        : { orderBy?: CreditTokenVaultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditTokenVaultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTokenVaultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTokenVault model
   */
  readonly fields: CreditTokenVaultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTokenVault.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTokenVaultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditTokenVault model
   */ 
  interface CreditTokenVaultFieldRefs {
    readonly id: FieldRef<"CreditTokenVault", 'String'>
    readonly token: FieldRef<"CreditTokenVault", 'String'>
    readonly userId: FieldRef<"CreditTokenVault", 'String'>
    readonly creditNumber: FieldRef<"CreditTokenVault", 'String'>
    readonly createdAt: FieldRef<"CreditTokenVault", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditTokenVault", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditTokenVault findUnique
   */
  export type CreditTokenVaultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTokenVault
     */
    select?: CreditTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which CreditTokenVault to fetch.
     */
    where: CreditTokenVaultWhereUniqueInput
  }

  /**
   * CreditTokenVault findUniqueOrThrow
   */
  export type CreditTokenVaultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTokenVault
     */
    select?: CreditTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which CreditTokenVault to fetch.
     */
    where: CreditTokenVaultWhereUniqueInput
  }

  /**
   * CreditTokenVault findFirst
   */
  export type CreditTokenVaultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTokenVault
     */
    select?: CreditTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which CreditTokenVault to fetch.
     */
    where?: CreditTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTokenVaults to fetch.
     */
    orderBy?: CreditTokenVaultOrderByWithRelationInput | CreditTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTokenVaults.
     */
    cursor?: CreditTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTokenVaults.
     */
    distinct?: CreditTokenVaultScalarFieldEnum | CreditTokenVaultScalarFieldEnum[]
  }

  /**
   * CreditTokenVault findFirstOrThrow
   */
  export type CreditTokenVaultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTokenVault
     */
    select?: CreditTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which CreditTokenVault to fetch.
     */
    where?: CreditTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTokenVaults to fetch.
     */
    orderBy?: CreditTokenVaultOrderByWithRelationInput | CreditTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTokenVaults.
     */
    cursor?: CreditTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTokenVaults.
     */
    distinct?: CreditTokenVaultScalarFieldEnum | CreditTokenVaultScalarFieldEnum[]
  }

  /**
   * CreditTokenVault findMany
   */
  export type CreditTokenVaultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTokenVault
     */
    select?: CreditTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which CreditTokenVaults to fetch.
     */
    where?: CreditTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTokenVaults to fetch.
     */
    orderBy?: CreditTokenVaultOrderByWithRelationInput | CreditTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTokenVaults.
     */
    cursor?: CreditTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTokenVaults.
     */
    skip?: number
    distinct?: CreditTokenVaultScalarFieldEnum | CreditTokenVaultScalarFieldEnum[]
  }

  /**
   * CreditTokenVault create
   */
  export type CreditTokenVaultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTokenVault
     */
    select?: CreditTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to create a CreditTokenVault.
     */
    data: XOR<CreditTokenVaultCreateInput, CreditTokenVaultUncheckedCreateInput>
  }

  /**
   * CreditTokenVault createMany
   */
  export type CreditTokenVaultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTokenVaults.
     */
    data: CreditTokenVaultCreateManyInput | CreditTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTokenVault createManyAndReturn
   */
  export type CreditTokenVaultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTokenVault
     */
    select?: CreditTokenVaultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CreditTokenVaults.
     */
    data: CreditTokenVaultCreateManyInput | CreditTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTokenVault update
   */
  export type CreditTokenVaultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTokenVault
     */
    select?: CreditTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to update a CreditTokenVault.
     */
    data: XOR<CreditTokenVaultUpdateInput, CreditTokenVaultUncheckedUpdateInput>
    /**
     * Choose, which CreditTokenVault to update.
     */
    where: CreditTokenVaultWhereUniqueInput
  }

  /**
   * CreditTokenVault updateMany
   */
  export type CreditTokenVaultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTokenVaults.
     */
    data: XOR<CreditTokenVaultUpdateManyMutationInput, CreditTokenVaultUncheckedUpdateManyInput>
    /**
     * Filter which CreditTokenVaults to update
     */
    where?: CreditTokenVaultWhereInput
  }

  /**
   * CreditTokenVault upsert
   */
  export type CreditTokenVaultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTokenVault
     */
    select?: CreditTokenVaultSelect<ExtArgs> | null
    /**
     * The filter to search for the CreditTokenVault to update in case it exists.
     */
    where: CreditTokenVaultWhereUniqueInput
    /**
     * In case the CreditTokenVault found by the `where` argument doesn't exist, create a new CreditTokenVault with this data.
     */
    create: XOR<CreditTokenVaultCreateInput, CreditTokenVaultUncheckedCreateInput>
    /**
     * In case the CreditTokenVault was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTokenVaultUpdateInput, CreditTokenVaultUncheckedUpdateInput>
  }

  /**
   * CreditTokenVault delete
   */
  export type CreditTokenVaultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTokenVault
     */
    select?: CreditTokenVaultSelect<ExtArgs> | null
    /**
     * Filter which CreditTokenVault to delete.
     */
    where: CreditTokenVaultWhereUniqueInput
  }

  /**
   * CreditTokenVault deleteMany
   */
  export type CreditTokenVaultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTokenVaults to delete
     */
    where?: CreditTokenVaultWhereInput
  }

  /**
   * CreditTokenVault without action
   */
  export type CreditTokenVaultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTokenVault
     */
    select?: CreditTokenVaultSelect<ExtArgs> | null
  }


  /**
   * Model DebitTokenVault
   */

  export type AggregateDebitTokenVault = {
    _count: DebitTokenVaultCountAggregateOutputType | null
    _min: DebitTokenVaultMinAggregateOutputType | null
    _max: DebitTokenVaultMaxAggregateOutputType | null
  }

  export type DebitTokenVaultMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    debitNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebitTokenVaultMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    debitNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebitTokenVaultCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    debitNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DebitTokenVaultMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    debitNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebitTokenVaultMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    debitNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebitTokenVaultCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    debitNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DebitTokenVaultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebitTokenVault to aggregate.
     */
    where?: DebitTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitTokenVaults to fetch.
     */
    orderBy?: DebitTokenVaultOrderByWithRelationInput | DebitTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebitTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DebitTokenVaults
    **/
    _count?: true | DebitTokenVaultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebitTokenVaultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebitTokenVaultMaxAggregateInputType
  }

  export type GetDebitTokenVaultAggregateType<T extends DebitTokenVaultAggregateArgs> = {
        [P in keyof T & keyof AggregateDebitTokenVault]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebitTokenVault[P]>
      : GetScalarType<T[P], AggregateDebitTokenVault[P]>
  }




  export type DebitTokenVaultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebitTokenVaultWhereInput
    orderBy?: DebitTokenVaultOrderByWithAggregationInput | DebitTokenVaultOrderByWithAggregationInput[]
    by: DebitTokenVaultScalarFieldEnum[] | DebitTokenVaultScalarFieldEnum
    having?: DebitTokenVaultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebitTokenVaultCountAggregateInputType | true
    _min?: DebitTokenVaultMinAggregateInputType
    _max?: DebitTokenVaultMaxAggregateInputType
  }

  export type DebitTokenVaultGroupByOutputType = {
    id: string
    token: string
    userId: string
    debitNumber: string
    createdAt: Date
    updatedAt: Date
    _count: DebitTokenVaultCountAggregateOutputType | null
    _min: DebitTokenVaultMinAggregateOutputType | null
    _max: DebitTokenVaultMaxAggregateOutputType | null
  }

  type GetDebitTokenVaultGroupByPayload<T extends DebitTokenVaultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebitTokenVaultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebitTokenVaultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebitTokenVaultGroupByOutputType[P]>
            : GetScalarType<T[P], DebitTokenVaultGroupByOutputType[P]>
        }
      >
    >


  export type DebitTokenVaultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    debitNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["debitTokenVault"]>

  export type DebitTokenVaultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    debitNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["debitTokenVault"]>

  export type DebitTokenVaultSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    debitNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $DebitTokenVaultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DebitTokenVault"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      debitNumber: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["debitTokenVault"]>
    composites: {}
  }

  type DebitTokenVaultGetPayload<S extends boolean | null | undefined | DebitTokenVaultDefaultArgs> = $Result.GetResult<Prisma.$DebitTokenVaultPayload, S>

  type DebitTokenVaultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DebitTokenVaultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DebitTokenVaultCountAggregateInputType | true
    }

  export interface DebitTokenVaultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DebitTokenVault'], meta: { name: 'DebitTokenVault' } }
    /**
     * Find zero or one DebitTokenVault that matches the filter.
     * @param {DebitTokenVaultFindUniqueArgs} args - Arguments to find a DebitTokenVault
     * @example
     * // Get one DebitTokenVault
     * const debitTokenVault = await prisma.debitTokenVault.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DebitTokenVaultFindUniqueArgs>(args: SelectSubset<T, DebitTokenVaultFindUniqueArgs<ExtArgs>>): Prisma__DebitTokenVaultClient<$Result.GetResult<Prisma.$DebitTokenVaultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DebitTokenVault that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DebitTokenVaultFindUniqueOrThrowArgs} args - Arguments to find a DebitTokenVault
     * @example
     * // Get one DebitTokenVault
     * const debitTokenVault = await prisma.debitTokenVault.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DebitTokenVaultFindUniqueOrThrowArgs>(args: SelectSubset<T, DebitTokenVaultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DebitTokenVaultClient<$Result.GetResult<Prisma.$DebitTokenVaultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DebitTokenVault that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitTokenVaultFindFirstArgs} args - Arguments to find a DebitTokenVault
     * @example
     * // Get one DebitTokenVault
     * const debitTokenVault = await prisma.debitTokenVault.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DebitTokenVaultFindFirstArgs>(args?: SelectSubset<T, DebitTokenVaultFindFirstArgs<ExtArgs>>): Prisma__DebitTokenVaultClient<$Result.GetResult<Prisma.$DebitTokenVaultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DebitTokenVault that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitTokenVaultFindFirstOrThrowArgs} args - Arguments to find a DebitTokenVault
     * @example
     * // Get one DebitTokenVault
     * const debitTokenVault = await prisma.debitTokenVault.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DebitTokenVaultFindFirstOrThrowArgs>(args?: SelectSubset<T, DebitTokenVaultFindFirstOrThrowArgs<ExtArgs>>): Prisma__DebitTokenVaultClient<$Result.GetResult<Prisma.$DebitTokenVaultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DebitTokenVaults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitTokenVaultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DebitTokenVaults
     * const debitTokenVaults = await prisma.debitTokenVault.findMany()
     * 
     * // Get first 10 DebitTokenVaults
     * const debitTokenVaults = await prisma.debitTokenVault.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debitTokenVaultWithIdOnly = await prisma.debitTokenVault.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DebitTokenVaultFindManyArgs>(args?: SelectSubset<T, DebitTokenVaultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebitTokenVaultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DebitTokenVault.
     * @param {DebitTokenVaultCreateArgs} args - Arguments to create a DebitTokenVault.
     * @example
     * // Create one DebitTokenVault
     * const DebitTokenVault = await prisma.debitTokenVault.create({
     *   data: {
     *     // ... data to create a DebitTokenVault
     *   }
     * })
     * 
     */
    create<T extends DebitTokenVaultCreateArgs>(args: SelectSubset<T, DebitTokenVaultCreateArgs<ExtArgs>>): Prisma__DebitTokenVaultClient<$Result.GetResult<Prisma.$DebitTokenVaultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DebitTokenVaults.
     * @param {DebitTokenVaultCreateManyArgs} args - Arguments to create many DebitTokenVaults.
     * @example
     * // Create many DebitTokenVaults
     * const debitTokenVault = await prisma.debitTokenVault.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DebitTokenVaultCreateManyArgs>(args?: SelectSubset<T, DebitTokenVaultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DebitTokenVaults and returns the data saved in the database.
     * @param {DebitTokenVaultCreateManyAndReturnArgs} args - Arguments to create many DebitTokenVaults.
     * @example
     * // Create many DebitTokenVaults
     * const debitTokenVault = await prisma.debitTokenVault.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DebitTokenVaults and only return the `id`
     * const debitTokenVaultWithIdOnly = await prisma.debitTokenVault.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DebitTokenVaultCreateManyAndReturnArgs>(args?: SelectSubset<T, DebitTokenVaultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebitTokenVaultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DebitTokenVault.
     * @param {DebitTokenVaultDeleteArgs} args - Arguments to delete one DebitTokenVault.
     * @example
     * // Delete one DebitTokenVault
     * const DebitTokenVault = await prisma.debitTokenVault.delete({
     *   where: {
     *     // ... filter to delete one DebitTokenVault
     *   }
     * })
     * 
     */
    delete<T extends DebitTokenVaultDeleteArgs>(args: SelectSubset<T, DebitTokenVaultDeleteArgs<ExtArgs>>): Prisma__DebitTokenVaultClient<$Result.GetResult<Prisma.$DebitTokenVaultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DebitTokenVault.
     * @param {DebitTokenVaultUpdateArgs} args - Arguments to update one DebitTokenVault.
     * @example
     * // Update one DebitTokenVault
     * const debitTokenVault = await prisma.debitTokenVault.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DebitTokenVaultUpdateArgs>(args: SelectSubset<T, DebitTokenVaultUpdateArgs<ExtArgs>>): Prisma__DebitTokenVaultClient<$Result.GetResult<Prisma.$DebitTokenVaultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DebitTokenVaults.
     * @param {DebitTokenVaultDeleteManyArgs} args - Arguments to filter DebitTokenVaults to delete.
     * @example
     * // Delete a few DebitTokenVaults
     * const { count } = await prisma.debitTokenVault.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DebitTokenVaultDeleteManyArgs>(args?: SelectSubset<T, DebitTokenVaultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebitTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitTokenVaultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DebitTokenVaults
     * const debitTokenVault = await prisma.debitTokenVault.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DebitTokenVaultUpdateManyArgs>(args: SelectSubset<T, DebitTokenVaultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DebitTokenVault.
     * @param {DebitTokenVaultUpsertArgs} args - Arguments to update or create a DebitTokenVault.
     * @example
     * // Update or create a DebitTokenVault
     * const debitTokenVault = await prisma.debitTokenVault.upsert({
     *   create: {
     *     // ... data to create a DebitTokenVault
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DebitTokenVault we want to update
     *   }
     * })
     */
    upsert<T extends DebitTokenVaultUpsertArgs>(args: SelectSubset<T, DebitTokenVaultUpsertArgs<ExtArgs>>): Prisma__DebitTokenVaultClient<$Result.GetResult<Prisma.$DebitTokenVaultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DebitTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitTokenVaultCountArgs} args - Arguments to filter DebitTokenVaults to count.
     * @example
     * // Count the number of DebitTokenVaults
     * const count = await prisma.debitTokenVault.count({
     *   where: {
     *     // ... the filter for the DebitTokenVaults we want to count
     *   }
     * })
    **/
    count<T extends DebitTokenVaultCountArgs>(
      args?: Subset<T, DebitTokenVaultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebitTokenVaultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DebitTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitTokenVaultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DebitTokenVaultAggregateArgs>(args: Subset<T, DebitTokenVaultAggregateArgs>): Prisma.PrismaPromise<GetDebitTokenVaultAggregateType<T>>

    /**
     * Group by DebitTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitTokenVaultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DebitTokenVaultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebitTokenVaultGroupByArgs['orderBy'] }
        : { orderBy?: DebitTokenVaultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DebitTokenVaultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebitTokenVaultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DebitTokenVault model
   */
  readonly fields: DebitTokenVaultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DebitTokenVault.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebitTokenVaultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DebitTokenVault model
   */ 
  interface DebitTokenVaultFieldRefs {
    readonly id: FieldRef<"DebitTokenVault", 'String'>
    readonly token: FieldRef<"DebitTokenVault", 'String'>
    readonly userId: FieldRef<"DebitTokenVault", 'String'>
    readonly debitNumber: FieldRef<"DebitTokenVault", 'String'>
    readonly createdAt: FieldRef<"DebitTokenVault", 'DateTime'>
    readonly updatedAt: FieldRef<"DebitTokenVault", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DebitTokenVault findUnique
   */
  export type DebitTokenVaultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitTokenVault
     */
    select?: DebitTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which DebitTokenVault to fetch.
     */
    where: DebitTokenVaultWhereUniqueInput
  }

  /**
   * DebitTokenVault findUniqueOrThrow
   */
  export type DebitTokenVaultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitTokenVault
     */
    select?: DebitTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which DebitTokenVault to fetch.
     */
    where: DebitTokenVaultWhereUniqueInput
  }

  /**
   * DebitTokenVault findFirst
   */
  export type DebitTokenVaultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitTokenVault
     */
    select?: DebitTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which DebitTokenVault to fetch.
     */
    where?: DebitTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitTokenVaults to fetch.
     */
    orderBy?: DebitTokenVaultOrderByWithRelationInput | DebitTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebitTokenVaults.
     */
    cursor?: DebitTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebitTokenVaults.
     */
    distinct?: DebitTokenVaultScalarFieldEnum | DebitTokenVaultScalarFieldEnum[]
  }

  /**
   * DebitTokenVault findFirstOrThrow
   */
  export type DebitTokenVaultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitTokenVault
     */
    select?: DebitTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which DebitTokenVault to fetch.
     */
    where?: DebitTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitTokenVaults to fetch.
     */
    orderBy?: DebitTokenVaultOrderByWithRelationInput | DebitTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebitTokenVaults.
     */
    cursor?: DebitTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebitTokenVaults.
     */
    distinct?: DebitTokenVaultScalarFieldEnum | DebitTokenVaultScalarFieldEnum[]
  }

  /**
   * DebitTokenVault findMany
   */
  export type DebitTokenVaultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitTokenVault
     */
    select?: DebitTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which DebitTokenVaults to fetch.
     */
    where?: DebitTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitTokenVaults to fetch.
     */
    orderBy?: DebitTokenVaultOrderByWithRelationInput | DebitTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DebitTokenVaults.
     */
    cursor?: DebitTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitTokenVaults.
     */
    skip?: number
    distinct?: DebitTokenVaultScalarFieldEnum | DebitTokenVaultScalarFieldEnum[]
  }

  /**
   * DebitTokenVault create
   */
  export type DebitTokenVaultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitTokenVault
     */
    select?: DebitTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to create a DebitTokenVault.
     */
    data: XOR<DebitTokenVaultCreateInput, DebitTokenVaultUncheckedCreateInput>
  }

  /**
   * DebitTokenVault createMany
   */
  export type DebitTokenVaultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DebitTokenVaults.
     */
    data: DebitTokenVaultCreateManyInput | DebitTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DebitTokenVault createManyAndReturn
   */
  export type DebitTokenVaultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitTokenVault
     */
    select?: DebitTokenVaultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DebitTokenVaults.
     */
    data: DebitTokenVaultCreateManyInput | DebitTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DebitTokenVault update
   */
  export type DebitTokenVaultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitTokenVault
     */
    select?: DebitTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to update a DebitTokenVault.
     */
    data: XOR<DebitTokenVaultUpdateInput, DebitTokenVaultUncheckedUpdateInput>
    /**
     * Choose, which DebitTokenVault to update.
     */
    where: DebitTokenVaultWhereUniqueInput
  }

  /**
   * DebitTokenVault updateMany
   */
  export type DebitTokenVaultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DebitTokenVaults.
     */
    data: XOR<DebitTokenVaultUpdateManyMutationInput, DebitTokenVaultUncheckedUpdateManyInput>
    /**
     * Filter which DebitTokenVaults to update
     */
    where?: DebitTokenVaultWhereInput
  }

  /**
   * DebitTokenVault upsert
   */
  export type DebitTokenVaultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitTokenVault
     */
    select?: DebitTokenVaultSelect<ExtArgs> | null
    /**
     * The filter to search for the DebitTokenVault to update in case it exists.
     */
    where: DebitTokenVaultWhereUniqueInput
    /**
     * In case the DebitTokenVault found by the `where` argument doesn't exist, create a new DebitTokenVault with this data.
     */
    create: XOR<DebitTokenVaultCreateInput, DebitTokenVaultUncheckedCreateInput>
    /**
     * In case the DebitTokenVault was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebitTokenVaultUpdateInput, DebitTokenVaultUncheckedUpdateInput>
  }

  /**
   * DebitTokenVault delete
   */
  export type DebitTokenVaultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitTokenVault
     */
    select?: DebitTokenVaultSelect<ExtArgs> | null
    /**
     * Filter which DebitTokenVault to delete.
     */
    where: DebitTokenVaultWhereUniqueInput
  }

  /**
   * DebitTokenVault deleteMany
   */
  export type DebitTokenVaultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebitTokenVaults to delete
     */
    where?: DebitTokenVaultWhereInput
  }

  /**
   * DebitTokenVault without action
   */
  export type DebitTokenVaultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitTokenVault
     */
    select?: DebitTokenVaultSelect<ExtArgs> | null
  }


  /**
   * Model EmailTokenVault
   */

  export type AggregateEmailTokenVault = {
    _count: EmailTokenVaultCountAggregateOutputType | null
    _min: EmailTokenVaultMinAggregateOutputType | null
    _max: EmailTokenVaultMaxAggregateOutputType | null
  }

  export type EmailTokenVaultMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailTokenVaultMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailTokenVaultCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailTokenVaultMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailTokenVaultMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailTokenVaultCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailTokenVaultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailTokenVault to aggregate.
     */
    where?: EmailTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTokenVaults to fetch.
     */
    orderBy?: EmailTokenVaultOrderByWithRelationInput | EmailTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailTokenVaults
    **/
    _count?: true | EmailTokenVaultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailTokenVaultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailTokenVaultMaxAggregateInputType
  }

  export type GetEmailTokenVaultAggregateType<T extends EmailTokenVaultAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailTokenVault]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailTokenVault[P]>
      : GetScalarType<T[P], AggregateEmailTokenVault[P]>
  }




  export type EmailTokenVaultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailTokenVaultWhereInput
    orderBy?: EmailTokenVaultOrderByWithAggregationInput | EmailTokenVaultOrderByWithAggregationInput[]
    by: EmailTokenVaultScalarFieldEnum[] | EmailTokenVaultScalarFieldEnum
    having?: EmailTokenVaultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailTokenVaultCountAggregateInputType | true
    _min?: EmailTokenVaultMinAggregateInputType
    _max?: EmailTokenVaultMaxAggregateInputType
  }

  export type EmailTokenVaultGroupByOutputType = {
    id: string
    token: string
    userId: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: EmailTokenVaultCountAggregateOutputType | null
    _min: EmailTokenVaultMinAggregateOutputType | null
    _max: EmailTokenVaultMaxAggregateOutputType | null
  }

  type GetEmailTokenVaultGroupByPayload<T extends EmailTokenVaultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailTokenVaultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailTokenVaultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailTokenVaultGroupByOutputType[P]>
            : GetScalarType<T[P], EmailTokenVaultGroupByOutputType[P]>
        }
      >
    >


  export type EmailTokenVaultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailTokenVault"]>

  export type EmailTokenVaultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailTokenVault"]>

  export type EmailTokenVaultSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $EmailTokenVaultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailTokenVault"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailTokenVault"]>
    composites: {}
  }

  type EmailTokenVaultGetPayload<S extends boolean | null | undefined | EmailTokenVaultDefaultArgs> = $Result.GetResult<Prisma.$EmailTokenVaultPayload, S>

  type EmailTokenVaultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmailTokenVaultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmailTokenVaultCountAggregateInputType | true
    }

  export interface EmailTokenVaultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailTokenVault'], meta: { name: 'EmailTokenVault' } }
    /**
     * Find zero or one EmailTokenVault that matches the filter.
     * @param {EmailTokenVaultFindUniqueArgs} args - Arguments to find a EmailTokenVault
     * @example
     * // Get one EmailTokenVault
     * const emailTokenVault = await prisma.emailTokenVault.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailTokenVaultFindUniqueArgs>(args: SelectSubset<T, EmailTokenVaultFindUniqueArgs<ExtArgs>>): Prisma__EmailTokenVaultClient<$Result.GetResult<Prisma.$EmailTokenVaultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EmailTokenVault that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmailTokenVaultFindUniqueOrThrowArgs} args - Arguments to find a EmailTokenVault
     * @example
     * // Get one EmailTokenVault
     * const emailTokenVault = await prisma.emailTokenVault.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailTokenVaultFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailTokenVaultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailTokenVaultClient<$Result.GetResult<Prisma.$EmailTokenVaultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EmailTokenVault that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenVaultFindFirstArgs} args - Arguments to find a EmailTokenVault
     * @example
     * // Get one EmailTokenVault
     * const emailTokenVault = await prisma.emailTokenVault.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailTokenVaultFindFirstArgs>(args?: SelectSubset<T, EmailTokenVaultFindFirstArgs<ExtArgs>>): Prisma__EmailTokenVaultClient<$Result.GetResult<Prisma.$EmailTokenVaultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EmailTokenVault that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenVaultFindFirstOrThrowArgs} args - Arguments to find a EmailTokenVault
     * @example
     * // Get one EmailTokenVault
     * const emailTokenVault = await prisma.emailTokenVault.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailTokenVaultFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailTokenVaultFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailTokenVaultClient<$Result.GetResult<Prisma.$EmailTokenVaultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EmailTokenVaults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenVaultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailTokenVaults
     * const emailTokenVaults = await prisma.emailTokenVault.findMany()
     * 
     * // Get first 10 EmailTokenVaults
     * const emailTokenVaults = await prisma.emailTokenVault.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailTokenVaultWithIdOnly = await prisma.emailTokenVault.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailTokenVaultFindManyArgs>(args?: SelectSubset<T, EmailTokenVaultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTokenVaultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EmailTokenVault.
     * @param {EmailTokenVaultCreateArgs} args - Arguments to create a EmailTokenVault.
     * @example
     * // Create one EmailTokenVault
     * const EmailTokenVault = await prisma.emailTokenVault.create({
     *   data: {
     *     // ... data to create a EmailTokenVault
     *   }
     * })
     * 
     */
    create<T extends EmailTokenVaultCreateArgs>(args: SelectSubset<T, EmailTokenVaultCreateArgs<ExtArgs>>): Prisma__EmailTokenVaultClient<$Result.GetResult<Prisma.$EmailTokenVaultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EmailTokenVaults.
     * @param {EmailTokenVaultCreateManyArgs} args - Arguments to create many EmailTokenVaults.
     * @example
     * // Create many EmailTokenVaults
     * const emailTokenVault = await prisma.emailTokenVault.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailTokenVaultCreateManyArgs>(args?: SelectSubset<T, EmailTokenVaultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailTokenVaults and returns the data saved in the database.
     * @param {EmailTokenVaultCreateManyAndReturnArgs} args - Arguments to create many EmailTokenVaults.
     * @example
     * // Create many EmailTokenVaults
     * const emailTokenVault = await prisma.emailTokenVault.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailTokenVaults and only return the `id`
     * const emailTokenVaultWithIdOnly = await prisma.emailTokenVault.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailTokenVaultCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailTokenVaultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTokenVaultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EmailTokenVault.
     * @param {EmailTokenVaultDeleteArgs} args - Arguments to delete one EmailTokenVault.
     * @example
     * // Delete one EmailTokenVault
     * const EmailTokenVault = await prisma.emailTokenVault.delete({
     *   where: {
     *     // ... filter to delete one EmailTokenVault
     *   }
     * })
     * 
     */
    delete<T extends EmailTokenVaultDeleteArgs>(args: SelectSubset<T, EmailTokenVaultDeleteArgs<ExtArgs>>): Prisma__EmailTokenVaultClient<$Result.GetResult<Prisma.$EmailTokenVaultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EmailTokenVault.
     * @param {EmailTokenVaultUpdateArgs} args - Arguments to update one EmailTokenVault.
     * @example
     * // Update one EmailTokenVault
     * const emailTokenVault = await prisma.emailTokenVault.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailTokenVaultUpdateArgs>(args: SelectSubset<T, EmailTokenVaultUpdateArgs<ExtArgs>>): Prisma__EmailTokenVaultClient<$Result.GetResult<Prisma.$EmailTokenVaultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EmailTokenVaults.
     * @param {EmailTokenVaultDeleteManyArgs} args - Arguments to filter EmailTokenVaults to delete.
     * @example
     * // Delete a few EmailTokenVaults
     * const { count } = await prisma.emailTokenVault.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailTokenVaultDeleteManyArgs>(args?: SelectSubset<T, EmailTokenVaultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenVaultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailTokenVaults
     * const emailTokenVault = await prisma.emailTokenVault.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailTokenVaultUpdateManyArgs>(args: SelectSubset<T, EmailTokenVaultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmailTokenVault.
     * @param {EmailTokenVaultUpsertArgs} args - Arguments to update or create a EmailTokenVault.
     * @example
     * // Update or create a EmailTokenVault
     * const emailTokenVault = await prisma.emailTokenVault.upsert({
     *   create: {
     *     // ... data to create a EmailTokenVault
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailTokenVault we want to update
     *   }
     * })
     */
    upsert<T extends EmailTokenVaultUpsertArgs>(args: SelectSubset<T, EmailTokenVaultUpsertArgs<ExtArgs>>): Prisma__EmailTokenVaultClient<$Result.GetResult<Prisma.$EmailTokenVaultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EmailTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenVaultCountArgs} args - Arguments to filter EmailTokenVaults to count.
     * @example
     * // Count the number of EmailTokenVaults
     * const count = await prisma.emailTokenVault.count({
     *   where: {
     *     // ... the filter for the EmailTokenVaults we want to count
     *   }
     * })
    **/
    count<T extends EmailTokenVaultCountArgs>(
      args?: Subset<T, EmailTokenVaultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailTokenVaultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenVaultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailTokenVaultAggregateArgs>(args: Subset<T, EmailTokenVaultAggregateArgs>): Prisma.PrismaPromise<GetEmailTokenVaultAggregateType<T>>

    /**
     * Group by EmailTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenVaultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailTokenVaultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailTokenVaultGroupByArgs['orderBy'] }
        : { orderBy?: EmailTokenVaultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailTokenVaultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailTokenVaultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailTokenVault model
   */
  readonly fields: EmailTokenVaultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailTokenVault.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailTokenVaultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailTokenVault model
   */ 
  interface EmailTokenVaultFieldRefs {
    readonly id: FieldRef<"EmailTokenVault", 'String'>
    readonly token: FieldRef<"EmailTokenVault", 'String'>
    readonly userId: FieldRef<"EmailTokenVault", 'String'>
    readonly email: FieldRef<"EmailTokenVault", 'String'>
    readonly createdAt: FieldRef<"EmailTokenVault", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailTokenVault", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailTokenVault findUnique
   */
  export type EmailTokenVaultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTokenVault
     */
    select?: EmailTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which EmailTokenVault to fetch.
     */
    where: EmailTokenVaultWhereUniqueInput
  }

  /**
   * EmailTokenVault findUniqueOrThrow
   */
  export type EmailTokenVaultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTokenVault
     */
    select?: EmailTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which EmailTokenVault to fetch.
     */
    where: EmailTokenVaultWhereUniqueInput
  }

  /**
   * EmailTokenVault findFirst
   */
  export type EmailTokenVaultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTokenVault
     */
    select?: EmailTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which EmailTokenVault to fetch.
     */
    where?: EmailTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTokenVaults to fetch.
     */
    orderBy?: EmailTokenVaultOrderByWithRelationInput | EmailTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailTokenVaults.
     */
    cursor?: EmailTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailTokenVaults.
     */
    distinct?: EmailTokenVaultScalarFieldEnum | EmailTokenVaultScalarFieldEnum[]
  }

  /**
   * EmailTokenVault findFirstOrThrow
   */
  export type EmailTokenVaultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTokenVault
     */
    select?: EmailTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which EmailTokenVault to fetch.
     */
    where?: EmailTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTokenVaults to fetch.
     */
    orderBy?: EmailTokenVaultOrderByWithRelationInput | EmailTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailTokenVaults.
     */
    cursor?: EmailTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailTokenVaults.
     */
    distinct?: EmailTokenVaultScalarFieldEnum | EmailTokenVaultScalarFieldEnum[]
  }

  /**
   * EmailTokenVault findMany
   */
  export type EmailTokenVaultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTokenVault
     */
    select?: EmailTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which EmailTokenVaults to fetch.
     */
    where?: EmailTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTokenVaults to fetch.
     */
    orderBy?: EmailTokenVaultOrderByWithRelationInput | EmailTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailTokenVaults.
     */
    cursor?: EmailTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTokenVaults.
     */
    skip?: number
    distinct?: EmailTokenVaultScalarFieldEnum | EmailTokenVaultScalarFieldEnum[]
  }

  /**
   * EmailTokenVault create
   */
  export type EmailTokenVaultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTokenVault
     */
    select?: EmailTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to create a EmailTokenVault.
     */
    data: XOR<EmailTokenVaultCreateInput, EmailTokenVaultUncheckedCreateInput>
  }

  /**
   * EmailTokenVault createMany
   */
  export type EmailTokenVaultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailTokenVaults.
     */
    data: EmailTokenVaultCreateManyInput | EmailTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailTokenVault createManyAndReturn
   */
  export type EmailTokenVaultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTokenVault
     */
    select?: EmailTokenVaultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EmailTokenVaults.
     */
    data: EmailTokenVaultCreateManyInput | EmailTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailTokenVault update
   */
  export type EmailTokenVaultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTokenVault
     */
    select?: EmailTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to update a EmailTokenVault.
     */
    data: XOR<EmailTokenVaultUpdateInput, EmailTokenVaultUncheckedUpdateInput>
    /**
     * Choose, which EmailTokenVault to update.
     */
    where: EmailTokenVaultWhereUniqueInput
  }

  /**
   * EmailTokenVault updateMany
   */
  export type EmailTokenVaultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailTokenVaults.
     */
    data: XOR<EmailTokenVaultUpdateManyMutationInput, EmailTokenVaultUncheckedUpdateManyInput>
    /**
     * Filter which EmailTokenVaults to update
     */
    where?: EmailTokenVaultWhereInput
  }

  /**
   * EmailTokenVault upsert
   */
  export type EmailTokenVaultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTokenVault
     */
    select?: EmailTokenVaultSelect<ExtArgs> | null
    /**
     * The filter to search for the EmailTokenVault to update in case it exists.
     */
    where: EmailTokenVaultWhereUniqueInput
    /**
     * In case the EmailTokenVault found by the `where` argument doesn't exist, create a new EmailTokenVault with this data.
     */
    create: XOR<EmailTokenVaultCreateInput, EmailTokenVaultUncheckedCreateInput>
    /**
     * In case the EmailTokenVault was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailTokenVaultUpdateInput, EmailTokenVaultUncheckedUpdateInput>
  }

  /**
   * EmailTokenVault delete
   */
  export type EmailTokenVaultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTokenVault
     */
    select?: EmailTokenVaultSelect<ExtArgs> | null
    /**
     * Filter which EmailTokenVault to delete.
     */
    where: EmailTokenVaultWhereUniqueInput
  }

  /**
   * EmailTokenVault deleteMany
   */
  export type EmailTokenVaultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailTokenVaults to delete
     */
    where?: EmailTokenVaultWhereInput
  }

  /**
   * EmailTokenVault without action
   */
  export type EmailTokenVaultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTokenVault
     */
    select?: EmailTokenVaultSelect<ExtArgs> | null
  }


  /**
   * Model PhoneTokenVault
   */

  export type AggregatePhoneTokenVault = {
    _count: PhoneTokenVaultCountAggregateOutputType | null
    _min: PhoneTokenVaultMinAggregateOutputType | null
    _max: PhoneTokenVaultMaxAggregateOutputType | null
  }

  export type PhoneTokenVaultMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneTokenVaultMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneTokenVaultCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhoneTokenVaultMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneTokenVaultMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneTokenVaultCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhoneTokenVaultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneTokenVault to aggregate.
     */
    where?: PhoneTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneTokenVaults to fetch.
     */
    orderBy?: PhoneTokenVaultOrderByWithRelationInput | PhoneTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneTokenVaults
    **/
    _count?: true | PhoneTokenVaultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneTokenVaultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneTokenVaultMaxAggregateInputType
  }

  export type GetPhoneTokenVaultAggregateType<T extends PhoneTokenVaultAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneTokenVault]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneTokenVault[P]>
      : GetScalarType<T[P], AggregatePhoneTokenVault[P]>
  }




  export type PhoneTokenVaultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneTokenVaultWhereInput
    orderBy?: PhoneTokenVaultOrderByWithAggregationInput | PhoneTokenVaultOrderByWithAggregationInput[]
    by: PhoneTokenVaultScalarFieldEnum[] | PhoneTokenVaultScalarFieldEnum
    having?: PhoneTokenVaultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneTokenVaultCountAggregateInputType | true
    _min?: PhoneTokenVaultMinAggregateInputType
    _max?: PhoneTokenVaultMaxAggregateInputType
  }

  export type PhoneTokenVaultGroupByOutputType = {
    id: string
    token: string
    userId: string
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: PhoneTokenVaultCountAggregateOutputType | null
    _min: PhoneTokenVaultMinAggregateOutputType | null
    _max: PhoneTokenVaultMaxAggregateOutputType | null
  }

  type GetPhoneTokenVaultGroupByPayload<T extends PhoneTokenVaultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneTokenVaultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneTokenVaultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneTokenVaultGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneTokenVaultGroupByOutputType[P]>
        }
      >
    >


  export type PhoneTokenVaultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["phoneTokenVault"]>

  export type PhoneTokenVaultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["phoneTokenVault"]>

  export type PhoneTokenVaultSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PhoneTokenVaultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneTokenVault"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["phoneTokenVault"]>
    composites: {}
  }

  type PhoneTokenVaultGetPayload<S extends boolean | null | undefined | PhoneTokenVaultDefaultArgs> = $Result.GetResult<Prisma.$PhoneTokenVaultPayload, S>

  type PhoneTokenVaultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhoneTokenVaultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhoneTokenVaultCountAggregateInputType | true
    }

  export interface PhoneTokenVaultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneTokenVault'], meta: { name: 'PhoneTokenVault' } }
    /**
     * Find zero or one PhoneTokenVault that matches the filter.
     * @param {PhoneTokenVaultFindUniqueArgs} args - Arguments to find a PhoneTokenVault
     * @example
     * // Get one PhoneTokenVault
     * const phoneTokenVault = await prisma.phoneTokenVault.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneTokenVaultFindUniqueArgs>(args: SelectSubset<T, PhoneTokenVaultFindUniqueArgs<ExtArgs>>): Prisma__PhoneTokenVaultClient<$Result.GetResult<Prisma.$PhoneTokenVaultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PhoneTokenVault that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhoneTokenVaultFindUniqueOrThrowArgs} args - Arguments to find a PhoneTokenVault
     * @example
     * // Get one PhoneTokenVault
     * const phoneTokenVault = await prisma.phoneTokenVault.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneTokenVaultFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneTokenVaultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneTokenVaultClient<$Result.GetResult<Prisma.$PhoneTokenVaultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PhoneTokenVault that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneTokenVaultFindFirstArgs} args - Arguments to find a PhoneTokenVault
     * @example
     * // Get one PhoneTokenVault
     * const phoneTokenVault = await prisma.phoneTokenVault.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneTokenVaultFindFirstArgs>(args?: SelectSubset<T, PhoneTokenVaultFindFirstArgs<ExtArgs>>): Prisma__PhoneTokenVaultClient<$Result.GetResult<Prisma.$PhoneTokenVaultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PhoneTokenVault that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneTokenVaultFindFirstOrThrowArgs} args - Arguments to find a PhoneTokenVault
     * @example
     * // Get one PhoneTokenVault
     * const phoneTokenVault = await prisma.phoneTokenVault.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneTokenVaultFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneTokenVaultFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneTokenVaultClient<$Result.GetResult<Prisma.$PhoneTokenVaultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PhoneTokenVaults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneTokenVaultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneTokenVaults
     * const phoneTokenVaults = await prisma.phoneTokenVault.findMany()
     * 
     * // Get first 10 PhoneTokenVaults
     * const phoneTokenVaults = await prisma.phoneTokenVault.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneTokenVaultWithIdOnly = await prisma.phoneTokenVault.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneTokenVaultFindManyArgs>(args?: SelectSubset<T, PhoneTokenVaultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneTokenVaultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PhoneTokenVault.
     * @param {PhoneTokenVaultCreateArgs} args - Arguments to create a PhoneTokenVault.
     * @example
     * // Create one PhoneTokenVault
     * const PhoneTokenVault = await prisma.phoneTokenVault.create({
     *   data: {
     *     // ... data to create a PhoneTokenVault
     *   }
     * })
     * 
     */
    create<T extends PhoneTokenVaultCreateArgs>(args: SelectSubset<T, PhoneTokenVaultCreateArgs<ExtArgs>>): Prisma__PhoneTokenVaultClient<$Result.GetResult<Prisma.$PhoneTokenVaultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PhoneTokenVaults.
     * @param {PhoneTokenVaultCreateManyArgs} args - Arguments to create many PhoneTokenVaults.
     * @example
     * // Create many PhoneTokenVaults
     * const phoneTokenVault = await prisma.phoneTokenVault.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneTokenVaultCreateManyArgs>(args?: SelectSubset<T, PhoneTokenVaultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneTokenVaults and returns the data saved in the database.
     * @param {PhoneTokenVaultCreateManyAndReturnArgs} args - Arguments to create many PhoneTokenVaults.
     * @example
     * // Create many PhoneTokenVaults
     * const phoneTokenVault = await prisma.phoneTokenVault.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneTokenVaults and only return the `id`
     * const phoneTokenVaultWithIdOnly = await prisma.phoneTokenVault.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneTokenVaultCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneTokenVaultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneTokenVaultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PhoneTokenVault.
     * @param {PhoneTokenVaultDeleteArgs} args - Arguments to delete one PhoneTokenVault.
     * @example
     * // Delete one PhoneTokenVault
     * const PhoneTokenVault = await prisma.phoneTokenVault.delete({
     *   where: {
     *     // ... filter to delete one PhoneTokenVault
     *   }
     * })
     * 
     */
    delete<T extends PhoneTokenVaultDeleteArgs>(args: SelectSubset<T, PhoneTokenVaultDeleteArgs<ExtArgs>>): Prisma__PhoneTokenVaultClient<$Result.GetResult<Prisma.$PhoneTokenVaultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PhoneTokenVault.
     * @param {PhoneTokenVaultUpdateArgs} args - Arguments to update one PhoneTokenVault.
     * @example
     * // Update one PhoneTokenVault
     * const phoneTokenVault = await prisma.phoneTokenVault.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneTokenVaultUpdateArgs>(args: SelectSubset<T, PhoneTokenVaultUpdateArgs<ExtArgs>>): Prisma__PhoneTokenVaultClient<$Result.GetResult<Prisma.$PhoneTokenVaultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PhoneTokenVaults.
     * @param {PhoneTokenVaultDeleteManyArgs} args - Arguments to filter PhoneTokenVaults to delete.
     * @example
     * // Delete a few PhoneTokenVaults
     * const { count } = await prisma.phoneTokenVault.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneTokenVaultDeleteManyArgs>(args?: SelectSubset<T, PhoneTokenVaultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneTokenVaultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneTokenVaults
     * const phoneTokenVault = await prisma.phoneTokenVault.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneTokenVaultUpdateManyArgs>(args: SelectSubset<T, PhoneTokenVaultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhoneTokenVault.
     * @param {PhoneTokenVaultUpsertArgs} args - Arguments to update or create a PhoneTokenVault.
     * @example
     * // Update or create a PhoneTokenVault
     * const phoneTokenVault = await prisma.phoneTokenVault.upsert({
     *   create: {
     *     // ... data to create a PhoneTokenVault
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneTokenVault we want to update
     *   }
     * })
     */
    upsert<T extends PhoneTokenVaultUpsertArgs>(args: SelectSubset<T, PhoneTokenVaultUpsertArgs<ExtArgs>>): Prisma__PhoneTokenVaultClient<$Result.GetResult<Prisma.$PhoneTokenVaultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PhoneTokenVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneTokenVaultCountArgs} args - Arguments to filter PhoneTokenVaults to count.
     * @example
     * // Count the number of PhoneTokenVaults
     * const count = await prisma.phoneTokenVault.count({
     *   where: {
     *     // ... the filter for the PhoneTokenVaults we want to count
     *   }
     * })
    **/
    count<T extends PhoneTokenVaultCountArgs>(
      args?: Subset<T, PhoneTokenVaultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneTokenVaultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneTokenVaultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhoneTokenVaultAggregateArgs>(args: Subset<T, PhoneTokenVaultAggregateArgs>): Prisma.PrismaPromise<GetPhoneTokenVaultAggregateType<T>>

    /**
     * Group by PhoneTokenVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneTokenVaultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhoneTokenVaultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneTokenVaultGroupByArgs['orderBy'] }
        : { orderBy?: PhoneTokenVaultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhoneTokenVaultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneTokenVaultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneTokenVault model
   */
  readonly fields: PhoneTokenVaultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneTokenVault.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneTokenVaultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhoneTokenVault model
   */ 
  interface PhoneTokenVaultFieldRefs {
    readonly id: FieldRef<"PhoneTokenVault", 'String'>
    readonly token: FieldRef<"PhoneTokenVault", 'String'>
    readonly userId: FieldRef<"PhoneTokenVault", 'String'>
    readonly phone: FieldRef<"PhoneTokenVault", 'String'>
    readonly createdAt: FieldRef<"PhoneTokenVault", 'DateTime'>
    readonly updatedAt: FieldRef<"PhoneTokenVault", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhoneTokenVault findUnique
   */
  export type PhoneTokenVaultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneTokenVault
     */
    select?: PhoneTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which PhoneTokenVault to fetch.
     */
    where: PhoneTokenVaultWhereUniqueInput
  }

  /**
   * PhoneTokenVault findUniqueOrThrow
   */
  export type PhoneTokenVaultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneTokenVault
     */
    select?: PhoneTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which PhoneTokenVault to fetch.
     */
    where: PhoneTokenVaultWhereUniqueInput
  }

  /**
   * PhoneTokenVault findFirst
   */
  export type PhoneTokenVaultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneTokenVault
     */
    select?: PhoneTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which PhoneTokenVault to fetch.
     */
    where?: PhoneTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneTokenVaults to fetch.
     */
    orderBy?: PhoneTokenVaultOrderByWithRelationInput | PhoneTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneTokenVaults.
     */
    cursor?: PhoneTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneTokenVaults.
     */
    distinct?: PhoneTokenVaultScalarFieldEnum | PhoneTokenVaultScalarFieldEnum[]
  }

  /**
   * PhoneTokenVault findFirstOrThrow
   */
  export type PhoneTokenVaultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneTokenVault
     */
    select?: PhoneTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which PhoneTokenVault to fetch.
     */
    where?: PhoneTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneTokenVaults to fetch.
     */
    orderBy?: PhoneTokenVaultOrderByWithRelationInput | PhoneTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneTokenVaults.
     */
    cursor?: PhoneTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneTokenVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneTokenVaults.
     */
    distinct?: PhoneTokenVaultScalarFieldEnum | PhoneTokenVaultScalarFieldEnum[]
  }

  /**
   * PhoneTokenVault findMany
   */
  export type PhoneTokenVaultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneTokenVault
     */
    select?: PhoneTokenVaultSelect<ExtArgs> | null
    /**
     * Filter, which PhoneTokenVaults to fetch.
     */
    where?: PhoneTokenVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneTokenVaults to fetch.
     */
    orderBy?: PhoneTokenVaultOrderByWithRelationInput | PhoneTokenVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneTokenVaults.
     */
    cursor?: PhoneTokenVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneTokenVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneTokenVaults.
     */
    skip?: number
    distinct?: PhoneTokenVaultScalarFieldEnum | PhoneTokenVaultScalarFieldEnum[]
  }

  /**
   * PhoneTokenVault create
   */
  export type PhoneTokenVaultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneTokenVault
     */
    select?: PhoneTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to create a PhoneTokenVault.
     */
    data: XOR<PhoneTokenVaultCreateInput, PhoneTokenVaultUncheckedCreateInput>
  }

  /**
   * PhoneTokenVault createMany
   */
  export type PhoneTokenVaultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneTokenVaults.
     */
    data: PhoneTokenVaultCreateManyInput | PhoneTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneTokenVault createManyAndReturn
   */
  export type PhoneTokenVaultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneTokenVault
     */
    select?: PhoneTokenVaultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PhoneTokenVaults.
     */
    data: PhoneTokenVaultCreateManyInput | PhoneTokenVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneTokenVault update
   */
  export type PhoneTokenVaultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneTokenVault
     */
    select?: PhoneTokenVaultSelect<ExtArgs> | null
    /**
     * The data needed to update a PhoneTokenVault.
     */
    data: XOR<PhoneTokenVaultUpdateInput, PhoneTokenVaultUncheckedUpdateInput>
    /**
     * Choose, which PhoneTokenVault to update.
     */
    where: PhoneTokenVaultWhereUniqueInput
  }

  /**
   * PhoneTokenVault updateMany
   */
  export type PhoneTokenVaultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneTokenVaults.
     */
    data: XOR<PhoneTokenVaultUpdateManyMutationInput, PhoneTokenVaultUncheckedUpdateManyInput>
    /**
     * Filter which PhoneTokenVaults to update
     */
    where?: PhoneTokenVaultWhereInput
  }

  /**
   * PhoneTokenVault upsert
   */
  export type PhoneTokenVaultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneTokenVault
     */
    select?: PhoneTokenVaultSelect<ExtArgs> | null
    /**
     * The filter to search for the PhoneTokenVault to update in case it exists.
     */
    where: PhoneTokenVaultWhereUniqueInput
    /**
     * In case the PhoneTokenVault found by the `where` argument doesn't exist, create a new PhoneTokenVault with this data.
     */
    create: XOR<PhoneTokenVaultCreateInput, PhoneTokenVaultUncheckedCreateInput>
    /**
     * In case the PhoneTokenVault was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneTokenVaultUpdateInput, PhoneTokenVaultUncheckedUpdateInput>
  }

  /**
   * PhoneTokenVault delete
   */
  export type PhoneTokenVaultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneTokenVault
     */
    select?: PhoneTokenVaultSelect<ExtArgs> | null
    /**
     * Filter which PhoneTokenVault to delete.
     */
    where: PhoneTokenVaultWhereUniqueInput
  }

  /**
   * PhoneTokenVault deleteMany
   */
  export type PhoneTokenVaultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneTokenVaults to delete
     */
    where?: PhoneTokenVaultWhereInput
  }

  /**
   * PhoneTokenVault without action
   */
  export type PhoneTokenVaultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneTokenVault
     */
    select?: PhoneTokenVaultSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountTokenVaultScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    accountNumber: 'accountNumber',
    accountNumberIndex: 'accountNumberIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountTokenVaultScalarFieldEnum = (typeof AccountTokenVaultScalarFieldEnum)[keyof typeof AccountTokenVaultScalarFieldEnum]


  export const UpiTokenVaultScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    pa: 'pa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UpiTokenVaultScalarFieldEnum = (typeof UpiTokenVaultScalarFieldEnum)[keyof typeof UpiTokenVaultScalarFieldEnum]


  export const CreditTokenVaultScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    creditNumber: 'creditNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreditTokenVaultScalarFieldEnum = (typeof CreditTokenVaultScalarFieldEnum)[keyof typeof CreditTokenVaultScalarFieldEnum]


  export const DebitTokenVaultScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    debitNumber: 'debitNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DebitTokenVaultScalarFieldEnum = (typeof DebitTokenVaultScalarFieldEnum)[keyof typeof DebitTokenVaultScalarFieldEnum]


  export const EmailTokenVaultScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailTokenVaultScalarFieldEnum = (typeof EmailTokenVaultScalarFieldEnum)[keyof typeof EmailTokenVaultScalarFieldEnum]


  export const PhoneTokenVaultScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhoneTokenVaultScalarFieldEnum = (typeof PhoneTokenVaultScalarFieldEnum)[keyof typeof PhoneTokenVaultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountTokenVaultWhereInput = {
    AND?: AccountTokenVaultWhereInput | AccountTokenVaultWhereInput[]
    OR?: AccountTokenVaultWhereInput[]
    NOT?: AccountTokenVaultWhereInput | AccountTokenVaultWhereInput[]
    id?: StringFilter<"AccountTokenVault"> | string
    token?: StringFilter<"AccountTokenVault"> | string
    userId?: StringFilter<"AccountTokenVault"> | string
    accountNumber?: StringFilter<"AccountTokenVault"> | string
    accountNumberIndex?: IntFilter<"AccountTokenVault"> | number
    createdAt?: DateTimeFilter<"AccountTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"AccountTokenVault"> | Date | string
  }

  export type AccountTokenVaultOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    accountNumber?: SortOrder
    accountNumberIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTokenVaultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    accountNumber?: string
    AND?: AccountTokenVaultWhereInput | AccountTokenVaultWhereInput[]
    OR?: AccountTokenVaultWhereInput[]
    NOT?: AccountTokenVaultWhereInput | AccountTokenVaultWhereInput[]
    userId?: StringFilter<"AccountTokenVault"> | string
    accountNumberIndex?: IntFilter<"AccountTokenVault"> | number
    createdAt?: DateTimeFilter<"AccountTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"AccountTokenVault"> | Date | string
  }, "id" | "token" | "accountNumber">

  export type AccountTokenVaultOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    accountNumber?: SortOrder
    accountNumberIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountTokenVaultCountOrderByAggregateInput
    _avg?: AccountTokenVaultAvgOrderByAggregateInput
    _max?: AccountTokenVaultMaxOrderByAggregateInput
    _min?: AccountTokenVaultMinOrderByAggregateInput
    _sum?: AccountTokenVaultSumOrderByAggregateInput
  }

  export type AccountTokenVaultScalarWhereWithAggregatesInput = {
    AND?: AccountTokenVaultScalarWhereWithAggregatesInput | AccountTokenVaultScalarWhereWithAggregatesInput[]
    OR?: AccountTokenVaultScalarWhereWithAggregatesInput[]
    NOT?: AccountTokenVaultScalarWhereWithAggregatesInput | AccountTokenVaultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountTokenVault"> | string
    token?: StringWithAggregatesFilter<"AccountTokenVault"> | string
    userId?: StringWithAggregatesFilter<"AccountTokenVault"> | string
    accountNumber?: StringWithAggregatesFilter<"AccountTokenVault"> | string
    accountNumberIndex?: IntWithAggregatesFilter<"AccountTokenVault"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AccountTokenVault"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountTokenVault"> | Date | string
  }

  export type UpiTokenVaultWhereInput = {
    AND?: UpiTokenVaultWhereInput | UpiTokenVaultWhereInput[]
    OR?: UpiTokenVaultWhereInput[]
    NOT?: UpiTokenVaultWhereInput | UpiTokenVaultWhereInput[]
    id?: StringFilter<"UpiTokenVault"> | string
    token?: StringFilter<"UpiTokenVault"> | string
    userId?: StringFilter<"UpiTokenVault"> | string
    pa?: StringFilter<"UpiTokenVault"> | string
    createdAt?: DateTimeFilter<"UpiTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"UpiTokenVault"> | Date | string
  }

  export type UpiTokenVaultOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    pa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpiTokenVaultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    pa?: string
    AND?: UpiTokenVaultWhereInput | UpiTokenVaultWhereInput[]
    OR?: UpiTokenVaultWhereInput[]
    NOT?: UpiTokenVaultWhereInput | UpiTokenVaultWhereInput[]
    userId?: StringFilter<"UpiTokenVault"> | string
    createdAt?: DateTimeFilter<"UpiTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"UpiTokenVault"> | Date | string
  }, "id" | "token" | "pa">

  export type UpiTokenVaultOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    pa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UpiTokenVaultCountOrderByAggregateInput
    _max?: UpiTokenVaultMaxOrderByAggregateInput
    _min?: UpiTokenVaultMinOrderByAggregateInput
  }

  export type UpiTokenVaultScalarWhereWithAggregatesInput = {
    AND?: UpiTokenVaultScalarWhereWithAggregatesInput | UpiTokenVaultScalarWhereWithAggregatesInput[]
    OR?: UpiTokenVaultScalarWhereWithAggregatesInput[]
    NOT?: UpiTokenVaultScalarWhereWithAggregatesInput | UpiTokenVaultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UpiTokenVault"> | string
    token?: StringWithAggregatesFilter<"UpiTokenVault"> | string
    userId?: StringWithAggregatesFilter<"UpiTokenVault"> | string
    pa?: StringWithAggregatesFilter<"UpiTokenVault"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UpiTokenVault"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UpiTokenVault"> | Date | string
  }

  export type CreditTokenVaultWhereInput = {
    AND?: CreditTokenVaultWhereInput | CreditTokenVaultWhereInput[]
    OR?: CreditTokenVaultWhereInput[]
    NOT?: CreditTokenVaultWhereInput | CreditTokenVaultWhereInput[]
    id?: StringFilter<"CreditTokenVault"> | string
    token?: StringFilter<"CreditTokenVault"> | string
    userId?: StringFilter<"CreditTokenVault"> | string
    creditNumber?: StringFilter<"CreditTokenVault"> | string
    createdAt?: DateTimeFilter<"CreditTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"CreditTokenVault"> | Date | string
  }

  export type CreditTokenVaultOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    creditNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditTokenVaultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    creditNumber?: string
    AND?: CreditTokenVaultWhereInput | CreditTokenVaultWhereInput[]
    OR?: CreditTokenVaultWhereInput[]
    NOT?: CreditTokenVaultWhereInput | CreditTokenVaultWhereInput[]
    userId?: StringFilter<"CreditTokenVault"> | string
    createdAt?: DateTimeFilter<"CreditTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"CreditTokenVault"> | Date | string
  }, "id" | "token" | "creditNumber">

  export type CreditTokenVaultOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    creditNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditTokenVaultCountOrderByAggregateInput
    _max?: CreditTokenVaultMaxOrderByAggregateInput
    _min?: CreditTokenVaultMinOrderByAggregateInput
  }

  export type CreditTokenVaultScalarWhereWithAggregatesInput = {
    AND?: CreditTokenVaultScalarWhereWithAggregatesInput | CreditTokenVaultScalarWhereWithAggregatesInput[]
    OR?: CreditTokenVaultScalarWhereWithAggregatesInput[]
    NOT?: CreditTokenVaultScalarWhereWithAggregatesInput | CreditTokenVaultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditTokenVault"> | string
    token?: StringWithAggregatesFilter<"CreditTokenVault"> | string
    userId?: StringWithAggregatesFilter<"CreditTokenVault"> | string
    creditNumber?: StringWithAggregatesFilter<"CreditTokenVault"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CreditTokenVault"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditTokenVault"> | Date | string
  }

  export type DebitTokenVaultWhereInput = {
    AND?: DebitTokenVaultWhereInput | DebitTokenVaultWhereInput[]
    OR?: DebitTokenVaultWhereInput[]
    NOT?: DebitTokenVaultWhereInput | DebitTokenVaultWhereInput[]
    id?: StringFilter<"DebitTokenVault"> | string
    token?: StringFilter<"DebitTokenVault"> | string
    userId?: StringFilter<"DebitTokenVault"> | string
    debitNumber?: StringFilter<"DebitTokenVault"> | string
    createdAt?: DateTimeFilter<"DebitTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"DebitTokenVault"> | Date | string
  }

  export type DebitTokenVaultOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    debitNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebitTokenVaultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    debitNumber?: string
    AND?: DebitTokenVaultWhereInput | DebitTokenVaultWhereInput[]
    OR?: DebitTokenVaultWhereInput[]
    NOT?: DebitTokenVaultWhereInput | DebitTokenVaultWhereInput[]
    userId?: StringFilter<"DebitTokenVault"> | string
    createdAt?: DateTimeFilter<"DebitTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"DebitTokenVault"> | Date | string
  }, "id" | "token" | "debitNumber">

  export type DebitTokenVaultOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    debitNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DebitTokenVaultCountOrderByAggregateInput
    _max?: DebitTokenVaultMaxOrderByAggregateInput
    _min?: DebitTokenVaultMinOrderByAggregateInput
  }

  export type DebitTokenVaultScalarWhereWithAggregatesInput = {
    AND?: DebitTokenVaultScalarWhereWithAggregatesInput | DebitTokenVaultScalarWhereWithAggregatesInput[]
    OR?: DebitTokenVaultScalarWhereWithAggregatesInput[]
    NOT?: DebitTokenVaultScalarWhereWithAggregatesInput | DebitTokenVaultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DebitTokenVault"> | string
    token?: StringWithAggregatesFilter<"DebitTokenVault"> | string
    userId?: StringWithAggregatesFilter<"DebitTokenVault"> | string
    debitNumber?: StringWithAggregatesFilter<"DebitTokenVault"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DebitTokenVault"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DebitTokenVault"> | Date | string
  }

  export type EmailTokenVaultWhereInput = {
    AND?: EmailTokenVaultWhereInput | EmailTokenVaultWhereInput[]
    OR?: EmailTokenVaultWhereInput[]
    NOT?: EmailTokenVaultWhereInput | EmailTokenVaultWhereInput[]
    id?: StringFilter<"EmailTokenVault"> | string
    token?: StringFilter<"EmailTokenVault"> | string
    userId?: StringFilter<"EmailTokenVault"> | string
    email?: StringFilter<"EmailTokenVault"> | string
    createdAt?: DateTimeFilter<"EmailTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"EmailTokenVault"> | Date | string
  }

  export type EmailTokenVaultOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailTokenVaultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    email?: string
    AND?: EmailTokenVaultWhereInput | EmailTokenVaultWhereInput[]
    OR?: EmailTokenVaultWhereInput[]
    NOT?: EmailTokenVaultWhereInput | EmailTokenVaultWhereInput[]
    userId?: StringFilter<"EmailTokenVault"> | string
    createdAt?: DateTimeFilter<"EmailTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"EmailTokenVault"> | Date | string
  }, "id" | "token" | "email">

  export type EmailTokenVaultOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailTokenVaultCountOrderByAggregateInput
    _max?: EmailTokenVaultMaxOrderByAggregateInput
    _min?: EmailTokenVaultMinOrderByAggregateInput
  }

  export type EmailTokenVaultScalarWhereWithAggregatesInput = {
    AND?: EmailTokenVaultScalarWhereWithAggregatesInput | EmailTokenVaultScalarWhereWithAggregatesInput[]
    OR?: EmailTokenVaultScalarWhereWithAggregatesInput[]
    NOT?: EmailTokenVaultScalarWhereWithAggregatesInput | EmailTokenVaultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailTokenVault"> | string
    token?: StringWithAggregatesFilter<"EmailTokenVault"> | string
    userId?: StringWithAggregatesFilter<"EmailTokenVault"> | string
    email?: StringWithAggregatesFilter<"EmailTokenVault"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailTokenVault"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailTokenVault"> | Date | string
  }

  export type PhoneTokenVaultWhereInput = {
    AND?: PhoneTokenVaultWhereInput | PhoneTokenVaultWhereInput[]
    OR?: PhoneTokenVaultWhereInput[]
    NOT?: PhoneTokenVaultWhereInput | PhoneTokenVaultWhereInput[]
    id?: StringFilter<"PhoneTokenVault"> | string
    token?: StringFilter<"PhoneTokenVault"> | string
    userId?: StringFilter<"PhoneTokenVault"> | string
    phone?: StringFilter<"PhoneTokenVault"> | string
    createdAt?: DateTimeFilter<"PhoneTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneTokenVault"> | Date | string
  }

  export type PhoneTokenVaultOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneTokenVaultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    phone?: string
    AND?: PhoneTokenVaultWhereInput | PhoneTokenVaultWhereInput[]
    OR?: PhoneTokenVaultWhereInput[]
    NOT?: PhoneTokenVaultWhereInput | PhoneTokenVaultWhereInput[]
    userId?: StringFilter<"PhoneTokenVault"> | string
    createdAt?: DateTimeFilter<"PhoneTokenVault"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneTokenVault"> | Date | string
  }, "id" | "token" | "phone">

  export type PhoneTokenVaultOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhoneTokenVaultCountOrderByAggregateInput
    _max?: PhoneTokenVaultMaxOrderByAggregateInput
    _min?: PhoneTokenVaultMinOrderByAggregateInput
  }

  export type PhoneTokenVaultScalarWhereWithAggregatesInput = {
    AND?: PhoneTokenVaultScalarWhereWithAggregatesInput | PhoneTokenVaultScalarWhereWithAggregatesInput[]
    OR?: PhoneTokenVaultScalarWhereWithAggregatesInput[]
    NOT?: PhoneTokenVaultScalarWhereWithAggregatesInput | PhoneTokenVaultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhoneTokenVault"> | string
    token?: StringWithAggregatesFilter<"PhoneTokenVault"> | string
    userId?: StringWithAggregatesFilter<"PhoneTokenVault"> | string
    phone?: StringWithAggregatesFilter<"PhoneTokenVault"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PhoneTokenVault"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhoneTokenVault"> | Date | string
  }

  export type AccountTokenVaultCreateInput = {
    id?: string
    token: string
    userId: string
    accountNumber: string
    accountNumberIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTokenVaultUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    accountNumber: string
    accountNumberIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTokenVaultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountNumberIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTokenVaultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountNumberIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTokenVaultCreateManyInput = {
    id?: string
    token: string
    userId: string
    accountNumber: string
    accountNumberIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTokenVaultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountNumberIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTokenVaultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountNumberIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpiTokenVaultCreateInput = {
    id?: string
    token: string
    userId: string
    pa: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UpiTokenVaultUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    pa: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UpiTokenVaultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpiTokenVaultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpiTokenVaultCreateManyInput = {
    id?: string
    token: string
    userId: string
    pa: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UpiTokenVaultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpiTokenVaultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTokenVaultCreateInput = {
    id?: string
    token: string
    userId: string
    creditNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditTokenVaultUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    creditNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditTokenVaultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creditNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTokenVaultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creditNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTokenVaultCreateManyInput = {
    id?: string
    token: string
    userId: string
    creditNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditTokenVaultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creditNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTokenVaultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creditNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitTokenVaultCreateInput = {
    id?: string
    token: string
    userId: string
    debitNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitTokenVaultUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    debitNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitTokenVaultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    debitNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitTokenVaultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    debitNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitTokenVaultCreateManyInput = {
    id?: string
    token: string
    userId: string
    debitNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitTokenVaultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    debitNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitTokenVaultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    debitNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailTokenVaultCreateInput = {
    id?: string
    token: string
    userId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailTokenVaultUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailTokenVaultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailTokenVaultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailTokenVaultCreateManyInput = {
    id?: string
    token: string
    userId: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailTokenVaultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailTokenVaultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneTokenVaultCreateInput = {
    id?: string
    token: string
    userId: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneTokenVaultUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneTokenVaultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneTokenVaultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneTokenVaultCreateManyInput = {
    id?: string
    token: string
    userId: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneTokenVaultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneTokenVaultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountTokenVaultCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    accountNumber?: SortOrder
    accountNumberIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTokenVaultAvgOrderByAggregateInput = {
    accountNumberIndex?: SortOrder
  }

  export type AccountTokenVaultMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    accountNumber?: SortOrder
    accountNumberIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTokenVaultMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    accountNumber?: SortOrder
    accountNumberIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTokenVaultSumOrderByAggregateInput = {
    accountNumberIndex?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UpiTokenVaultCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    pa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpiTokenVaultMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    pa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpiTokenVaultMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    pa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditTokenVaultCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    creditNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditTokenVaultMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    creditNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditTokenVaultMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    creditNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebitTokenVaultCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    debitNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebitTokenVaultMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    debitNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebitTokenVaultMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    debitNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailTokenVaultCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailTokenVaultMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailTokenVaultMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneTokenVaultCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneTokenVaultMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneTokenVaultMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountTokenVaultDefaultArgs instead
     */
    export type AccountTokenVaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountTokenVaultDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UpiTokenVaultDefaultArgs instead
     */
    export type UpiTokenVaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UpiTokenVaultDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditTokenVaultDefaultArgs instead
     */
    export type CreditTokenVaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditTokenVaultDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DebitTokenVaultDefaultArgs instead
     */
    export type DebitTokenVaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DebitTokenVaultDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmailTokenVaultDefaultArgs instead
     */
    export type EmailTokenVaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmailTokenVaultDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhoneTokenVaultDefaultArgs instead
     */
    export type PhoneTokenVaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhoneTokenVaultDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}