// У вас є тип AllType.Існує функція compare, яка приймає два об'єкти. Ці об'єкти
// містять поля AllType.Ваше завдання – використовувати Pick та generics для вказівки,
//     що поля цих параметрів належать AllType.Функція compare повинна повертати AllType.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = {
  name: string;
  color: string;
};

type BottomType = {
  position: number;
  weight: number;
};

function compare<T extends TopType, K extends BottomType>(
  top: T,
  bottom: K
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
