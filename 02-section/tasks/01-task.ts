// 1. Создайте 3 массива:
//  - массив из имен 3 ваших лучших друзей,
//  - массив из их возрастов,
//  - массив, в котором будет указано есть ли у них автомобиль.
// 2. Укажите в явной тип массивов,
// 3. Заполните данные.

const friends: string[] = ["Компьютер", "Стол", "Стул"];
const ages: number[] = [3, 1, 15];
const hasCar: boolean[] = [false, false, false];

// 4. Добавьте в каждый из массивов информацию о вашем четвертом друге
// 5. Раскомментируйте строки ниже исправьте их таким образом, чтобы не возникало ошибок

friends.push("Кактус");
ages.push(12)
hasCar.push(false);

// 6. Создайте кортеж массивов, перенесите данные о ваших друзьях в него

const friendsData: [string[], number[], boolean[]] = [friends, ages, hasCar];

export {};
