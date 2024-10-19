# Инструкция по добавлению дедлайнов и тестов

Все даты дедлайнов и тестов указаны в формате JSON. Пожалуйста, добавляйте дедлайны по образцу тех, которые уже есть.

Удалять старые дедлайны не нужно, они не отображаются автоматически. Зато их удобно редактировать, указывая новые (достаточно изменить название и дату).

## Основные правила

1. Строго соблюдайте формат времени, смотрите на существующие дедлайны как на образец);
2. Чтобы добавить предстоящий тест, добавьте в начало названия дедлайна "[Тест] ". Бот определяет тесты по этому префиксу;
3. Указывайте названия дедлайнов с таком формате: `<Предмет>: <Тип работы (лаба, ДЗ, ...)> №<Номер>. <Название работы (если есть)>` (например: ИСРПО: Лаба №2. Документирование);
4. Указывайте названия тестов с таком формате: `[Тест] <Предмет>: Тест на <Тема теста>` (например: [Тест] Алгосы: Тест на сортировки);
5. Указывайте название предмета в той же форме, что и в остальных дедлайнах (Алгосы, Дискра, C++, ИСРПО, Матан, Линал, ...)

## TL;DR

Следуйте образцу, приводите дедлайны к единой форме, формат `<Предмет>: <Тип работы (лаба, ДЗ, ...)> №<Номер>. <Название работы (если есть)>`.
Для тестов префикс `[Тест]`.

## [Приступить к редактированию](https://github.com/nawinds/m3104-links/edit/master/static/api-deadlines)