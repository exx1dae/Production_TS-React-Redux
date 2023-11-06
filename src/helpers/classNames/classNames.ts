type Mods = Record<string, boolean | string>; // Record - специальный класс, который задает типы ключам и их значениям
export function classNames(
  cls: string,
  mods: Mods,
  additional: string[],
): string {
  return [
    cls, // сначала главный класс
    ...additional, // потом доп классы
    ...Object.entries(mods) // конвертируем в [key1, value1], [key2, value2]
      .filter(([cls, value]) => Boolean(value)) // получаем массив только тех классов у которых value = true
      .map(([cls, value]) => cls), // получаем массив только имена
  ].join(" "); // присоединяем пробел для преобразования в строку
}

/*
 * cls - главный класс
 * mods - [ключ - значение (boolean)]
 * additional - массив доп классов
 * Example:
 * classNames('remove-btn', {hovered: true, selectable: true, red: true}, ['px-5'])
 * */
