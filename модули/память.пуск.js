когда(муром.мирГотов, пуск);

function пуск()
{
    var п64 = МОД.модуль("последовательность").code64;
    var последовательность = муром.atob(п64);
    
    var мир = {
        "настройки": {},
        "события": {},
        "состояние": {},
    };
    var событияРеакции = new СобытияРеакции();
    событияРеакции.разобрать(мир, последовательность);
    // Начать.
    мир.события["начало"].уведомить();
}
