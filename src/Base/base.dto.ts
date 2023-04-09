export abstract class BaseDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  /**
   * T : Value Type
   * @param value: Array<T> ex model.subModel
   * @param callback Array<U> ex: model.subModel.map((el) => Dto.load(el))
   * @constructor
   */
  static ArrayLoading<T, U>(value: Array<T> | null | undefined, callback: Array<U>, dto?: U): Array<U> | null {
    console.log("hello");
    if (dto.hasOwnProperty('Load')) {
      console.log("Load is disponible")
    }
    return value !== null || undefined ? callback : null;
  }

  static ObjectLoading<T, U>(value: T | null | undefined, callback: U): U | null {
    return value !== null || undefined ? callback : null;
  }
}