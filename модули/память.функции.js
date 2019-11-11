function добавитьСловарь(исходный, новый)
{
    for (var ключ in новый)
    {
        var значение = новый[ключ];
        исходный[ключ] = значение;
    }
}

function очиститьМатериалы(состояние)
{
    var сферы = состояние["сферы"];
    for (var номер in сферы)
    {
        var сфера = сферы[номер];
        сфера.задатьМатериал(null);
    }
}
