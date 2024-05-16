export class CreateGenericDto<T> {
  constructor(partial: Partial<T>) {
    Object.assign(this, partial);
  }
}

export class UpdateGenericDto<T> {
  constructor(partial: Partial<T>) {
    Object.assign(this, partial);
  }
}
