
const body =  `<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
            crossorigin="anonymous"
        />
        <title>Цитатник</title>
        <style>
            body{
      background-image: url(https://wp-s.ru/wallpapers/2/51/506895291148326/dzhejson-stetxem-na-belom-fone.jpg);
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      background-color: #464646; }
        </style>
    </head>
    <body
        class="container-fluid d-flex align-items-center position-relative"
        style="height: 100vh; background-color: #fafafa"
    >
        <div class="container position-relative" style="z-index: 10">
            <div class="rounded-5 bg-light m-auto d-flex flex-column align-items-center shadow-lg" style="max-width:600px;">
                <div class="p-3">
                    <div class="pi_text zoom_text" id="quote">
                        Повторение — мать заикания.<br><br>
                        <a data-link="/feed?section=search&amp;q=%23%D0%A2%D0%BE%D0%BC%D0%B8%D0%BB%D0%BE%D0%B2">#Томилов</a>
                        А. Б. Возрастная анотомия и психология
                        <a data-link="/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83">
                            #фппк_кубгу</a>
                    </div>
                </div>
            </div>
            <div class="rounded-5 bg-light m-auto mt-3 shadow-lg px-4 text-center p-3" style="max-width:600px;">
                <div class="row row-cols-1 row-cols-sm-2">
                    <div class="col" style="height: 38px;">
                        <select name="" id="author" class="w-100 h-100 rounded-5"></select>
                    </div>
                    <div class="col" style="height: 38px;">
                        <button class="btn btn-success w-50 h-100 rounded-5" id="submitButon">
                            Найти
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <script>
            const db = JSON.parse(\`[{
    "quote": "<div class='pi_text zoom_text'>Повторение — мать заикания.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BE%D0%BC%D0%B8%D0%BB%D0%BE%D0%B2'>#Томилов</a> А. Б. Возрастная анотомия и психология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Томилов А. Б."
},
{
    "quote": "<div class='pi_text'>Почему студенту нельзя импровизировать на устном экзамене? Потому что преподаватель начнет импровизировать с итоговой оценкой. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D0%B0%D0%BB%D1%8B%D0%B9'>#Чалый</a> В. В. Русский язык и культура речи <br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Чалый В. В."
},
{
    "quote": "<div class='pi_text zoom_text'>Молодцы! Сплошные гении... <br/><br/>Май В.А. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Май В.А."
},
{
    "quote": "<div class='pi_text'>Об этом мыслили ещё философы древности. Вообще, кажется, что они обо всем мыслили... Ну, конечно, чем ещё безработным заниматься?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С. Н. Социология<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шаповалов С. Н."
},{
    "quote": "<div class='pi_text'>Мерзковато, но жизнь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B8%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0'>#Виноградова</a> К. В. Основы интегрированных коммуникаций<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Виноградова К. В."
},{
    "quote": "<div class='pi_text zoom_text'>Экономисты - братья наши меньшие. <br/><br/>Добровольская Н.Ю <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Добровольская Н.Ю"
},{
    "quote": "<div class='pi_text zoom_text'>Как говорил наш друг Иосиф Виссарионович: 'К стенке их поставить надо'.<br/><br/>Павлов Ю.М. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text'>* последняя лекция *<br/><br/>Вот вам и всё.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0'>#Татаринова</a> Л. Н. История зарубежной литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Татаринова Л. Н."
},{
    "quote": "<div class='pi_text'>У вас курсовая по идеальному государству. Вы, вообще, планируете доучиваться с такими темами?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В. Философия Нового времени<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>На паре сидеть - это вам не мешки с картошкой таскать.<br/><br/>Николов М.С. Электричество и магнетизм <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Николов М.С."
},{
    "quote": "<div class='pi_text zoom_text'>Посмотрите туда. Не надо на меня смотреть. Я понимаю, что я для вас — весь мир, но посмотрите в окно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Онтология и теория познания</div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>П: Ну, смелее, о чём вы мечтаете?<br/>С: Получить зачёт по политологии<br/>*смех*<br/>П: Не переживайте, вот вы его точно получите, учитывая то, что по политологии у нас экзамен, а не зачёт <br/>*нервный смех*<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B7%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B8%D1%87'>#Сазантович</a> А.Б. Политология и политическая теория <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Сазантович А.Б."
},{
    "quote": "<div class='pi_text'>Так завидно. Один спит, другие занимаются друг с другом... Вот это жизнь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В.А. Общая экономическая теория <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text'>Да в моё время! Да сразу в деканат на ковёр!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE'>#Яременко</a> Л. А. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Яременко Л. А."
},{
    "quote": "<div class='pi_text'>* Зачет идет вторую пару у одной подгруппы. *<br/><br/>Бог с ней, с правдой, дайте мне что-нибудь, во что не стыдно поверить.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%80%D1%8B%D0%B9'>#Бурый</a> Д. С. Химия</div>",
    "author": "Бурый Д. С."
},{
    "quote": "<div class='pi_text'>Если человек может представить четырехмерное пространство, то он шизофреник!<br/><br/>Титов Г.Н.  Фундаментальная и компьютерная алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Титов Г.Н."
},{
    "quote": "<div class='pi_text'>Я прогнозирую жизнь!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D0%BB%D1%8C'>#Пиль</a> Л. И. Химия <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Пиль Л. И."
},{
    "quote": "<div class='pi_text zoom_text'>Управомочивающие, не управомАчивающие, от слова мачо, а управомОчивающие от правомочие. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B8%D0%BD%D0%BA%D0%B8%D0%BD'>#Жинкин</a> А. А. Теория государства и права  <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Жинкин А. А."
},{
    "quote": "<div class='pi_text'>Математика начинается там, где заканчивается школа.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%85%D0%BE%D0%B2%D0%B8%D1%87'>#Бухович</a> Е. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Бухович Е. В."
},{
    "quote": "<div class='pi_text'>Никто со стороны не может заявить, что это изнасилование. Извините, каждый занимается этим делом по-своему. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%BA%D0%BE%D0%B6%D0%B5%D0%B2'>#Лукожев</a> Х.М. Уголовно-процессуальное право <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Лукожев Х.М."
},{
    "quote": "<div class='pi_text'>Хорошо смеётся тот, кто смеётся 29 декабря.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Дроботенко</a> М.И. Основы компьютерных наук <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Дроботенко М.И."
},{
    "quote": "<div class='pi_text zoom_text'>Вся жизнь - это колебательный процесс: ходьба в туалет, сон, мытьё посуды...хотя мытьё посуды у некоторых имеет статический характер!<br/><br/>Щеколдин Г.А. Доп. главы по физике <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>Политологи - это вам не мяу-мяу!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AE%D1%80%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Юрченко</a> В.М. Введение в политологию <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Юрченко В.М."
},{
    "quote": "<div class='pi_text'>Допустим, фамилия равна 'И', пусть они все будут корейцы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B0%D1%86%D0%B5%D0%BF%D0%B8%D0%BD'>#Зацепин</a> М. Н. Базы данных<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Зацепин М. Н."
},{
    "quote": "<div class='pi_text'>РГФ славится тем, что хорошо пахнет и опаздывает на 40-45 минут.<br/><br/>Нюхтилин П.В.<br/>Вебдизайн <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Нюхтилин П.В."
},{
    "quote": "<div class='pi_text'>Гонрачов Ю.В. История зар. лит. , <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Гонрачов Ю.В."
},{
    "quote": "<div class='pi_text'>*рассказывает о применении оружия правоохранителями*<br/>- Вот ты полноценный офицер. У тебя допуск к оружию есть и табельное, в случае чего, со своим пистолетом ходи. А ты полупричастный персонаж. К оружию не допущен, поэтому тебе сразу автомат дадут.<br/><br/>Берлизов М.П. Административный Процесс <a data-link='/feed?section=search&amp;q=%23%D0%AE%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Юрфак_КубГУ</a></div>",
    "author": "Берлизов М.П."
},{
    "quote": "<div class='pi_text'>Твердолобость - особенность существа ограниченного в своём интеллектуальном развитии.<br/><br/>Мальцева Р. И. Язык массовых коммуникаций<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Мальцева Р. И."
},{
    "quote": "<div class='pi_text'>П: Если вы придёте в платьях, тройка вам обеспечена.<br/>С(парень): А если я приду в платье?<br/>П: Вы пойдёте в окно.<br/><br/>Сидоров В.А., МЭПиП. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Че радостный-радостный сидишь?Сейчас выгоню за радость.<br/><br/>Арутюнов Э.К. 'История государства и права зарубежных стран' <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Арутюнов Э.К."
},{
    "quote": "<div class='pi_text zoom_text'>Мы - комочки простейшей протоплазмы, размазанные по поверхности девиантной планеты на краю Вселенной.<br/><br/>Флоровский С.Ю. Социальная психология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Флоровский С.Ю."
},{
    "quote": "<div class='pi_text'>Кто-то ест мясо, кто-то капусту, а в среднем они едят голубцы.<br/><br/>Гелета И.В. <br/>Экономическая социология <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Гелета И.В."
},{
    "quote": "<div class='pi_text'>Самые трудные вещи — читать, писать и говорить. Всё остальное приложится.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%B9%D0%BA%D0%BE'>#Бойко</a> П. Е.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Бойко П. Е."
},{
    "quote": "<div class='pi_text zoom_text'>О цене не будем говорить. Это грустно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BA%D0%B0%D1%80%D0%B5%D0%B2'>#Бокарев</a> А. П. <a data-link='/feed?section=search&amp;q=%23%D1%85%D1%83%D0%B4%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#худграф_кубгу</a></div>",
    "author": "Бокарев А. П."
},{
    "quote": "<div class='pi_text zoom_text'>Женщины не тяжелого поведения. <br/><br/>Зозуля Л.В. Возрастная анатомия, физиология и гигиена, <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Зозуля Л.В."
},{
    "quote": "<div class='pi_text'>Вот начинает человек читать. Кто виноват, если книга ему не нравится? Да он сам и виноват. Он тупой.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Русским можно быть только по религиозным  взглядам, имеется ввиду, православным. <br/><br/>Павлов Ю.М. 'Практическая журналистика' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text zoom_text'>Ньютон нам подсказал, как это решать.<br/><br/>Гаркуша О.В. Основы информатики <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Гаркуша О.В."
},{
    "quote": "<div class='pi_text'>Мне платят за то, чтобы я мешал вам разговаривать. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Убиться можно.<br/><br/>Шельдешов Н.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Шельдешов Н.В."
},{
    "quote": "<div class='pi_text zoom_text'>Реферат - зеркало вашей души! <br/><br/>Голиков В. И. Концепция современного естествознания <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Голиков В. И."
},{
    "quote": "<div class='pi_text'>Продали душу — получили много удовольствия.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>Какие примеры друидов можно привести? Ну... Гендальф!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%8F%D0%BD%D0%BE%D0%B2%D0%B0'>#Буянова</a> А. А.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Буянова А. А."
},{
    "quote": "<div class='pi_text'>П: - Женщина должна вдохновлять! <br/>*в аудиторию заглядывает преподаватель-женщина*<br/>*после того как дверь закрылась* Видите?! Эта не вдохновляет!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%82%D1%83%D1%80%D0%B1%D0%B0'>#Штурба</a> В. А. История социальной педагогики <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Штурба В. А."
},{
    "quote": "<div class='pi_text'>Что такое теория групп? Сам по себе этот предмет бесполезен. Только применяется везде. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Алгебра <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>Вы просто бережно вынимаете глагол и ставите его в самый географический конец!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D1%83%D0%B4%D0%B0%D0%B2%D0%B5%D1%80%D0%B4%D0%BE%D0%B2%D0%B0'>#Худавердова</a> Н. П. Практический курс немецкого языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Худавердова Н. П."
},{
    "quote": "<div class='pi_text'>*на лекции*<br/>С: А что круче: ФСБ или прокуратура?<br/>П: Как понять 'круче'?<br/>С: Ну кто сильнее, кто к кому с проверкой может прийти?<br/>П: Ну я вам по-другому вопрос поставлю: - кто сильнее: Человек-Паук или Железный Человек?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%BA%D0%BE%D0%B6%D0%B5%D0%B2'>#Лукожев</a> Х.М., Правоохранительные органы<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Лукожев Х.М."
},{
    "quote": "<div class='pi_text zoom_text'>— У всех стран названия среднего рода, за исключением тех, которые мужского рода и женского.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D1%87%D0%B0%D0%B9'>#Нечай</a> Ю.П. Практический курс немецкого языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Нечай Ю.П."
},{
    "quote": "<div class='pi_text'>Лучше сорок раз по разу,<br/>Чем ни разу сорок раз!<br/><br/>Чалый В.В. Русский язык и культура речи<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Чалый В.В."
},{
    "quote": "<div class='pi_text'>*шелест шоколадки*<br/>П: Это кто занимается сладким стриптизом?<br/><br/>Кирокосян М.А. Эконом.анализ <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кирокосян М.А."
},{
    "quote": "<div class='pi_text'>Юность - это такое время, когда даже сказанная глупость очаровательна!<br/><br/>Жирма В.В. Методы географических исследований<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text'>*студентка не ответила на вопрос*<br/><br/>Я бы на вашем месте повесилась. <br/><br/>Костина Л.Ю. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Костина Л.Ю."
},{
    "quote": "<div class='pi_text'>-Вы же знаете уже , что такое интеграл?<br/>(Молчание в аудитории)<br/>-Ну вот и живите теперь с этим!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2'>#Половодов</a> Ю. А. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Половодов Ю. А."
},{
    "quote": "<div class='pi_text'>П: Так, что в мире происходит хорошего?<br/>С: *любой ответ*<br/>П: И что в этом хорошего?<br/>С:*любой аргумент*<br/>П: Я с вами не согласен. Это бред. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О.Н. Любой его предмет <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Передайте ему, что он злостный махровый прогульщик.<br/><br/>Тарасенко Т.П. Русский язык и культура речи. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Тарасенко Т.П."
},{
    "quote": "<div class='pi_text'>*после вопроса в аудитории тишина*<br/>Зааайцыыы....зааайцыыы...ну почему вы не хотите со мной разговаривать?<br/><br/>Штурба Е.В.  <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Штурба Е.В."
},{
    "quote": "<div class='pi_text'>*преподаватель долго разговаривает по телефону*<br/>Ладно, а то у меня тут лекция, девчонки перестали обращать на меня внимание.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>Да вы мне тут справок накидали, как Филиппу Киркорову - цветов.<br/><br/>Змихновский С.И. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С.И."
},{
    "quote": "<div class='pi_text'>* Преподаватель сбилась с мысли. *<br/><br/>Так, о чем я говорила? О науке? Об истории? А, о Боге! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%BE%D0%BC%D1%83%D1%85%D0%B8%D0%BD%D0%B0'>#Хомухина</a> Е. И.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Хомухина Е. И."
},{
    "quote": "<div class='pi_text'>* 6 человек отсутствует *<br/>— Уникальная группа: когда надо поднажать, люди перестают ходить. Это неповторимый стиль, сохраняйте его и дальше.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. Философия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Фисмо_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text'>Внутри каждого из нас живёт маленький патологоанатом.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D0%BC%D0%B5%D1%86'>#Немец</a> Г. Н. Основы интегрированных коммуникаций<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Немец Г. Н."
},{
    "quote": "<div class='pi_text zoom_text'>В турке нельзя варить эспрессо, потому что эспрессо варится под прессо!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%8B%D1%87%D0%BA%D0%BE%D0%B2'>#Бычков</a> С.С. Практический курс по немецкому языку <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Бычков С.С."
},{
    "quote": "<div class='pi_text'>Если вы отсутствуете, вы должны быть на занятиях.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D1%87%D0%B0%D0%B9'>#Нечай</a> Ю. П. Практический курс немецкого языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Нечай Ю. П."
},{
    "quote": "<div class='pi_text zoom_text'>Вы не девушки, вы журналисты! <br/><br/>Май В.А. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Май В.А."
},{
    "quote": "<div class='pi_text'>Самое болезненное в галстуках — это, когда ты расширяешься, как вселенная.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text'>Передайте тем, кого сегодня нет, что в пятницу дополнительная пара. Есть возможность прогулять ещё одну пару.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a>, Дифференциальное исчисление <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин"
},{
    "quote": "<div class='pi_text'>Вся жизнь — это РГФ. Думать о языке — значит думать о жизни.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%8B%D1%87%D0%BA%D0%BE%D0%B2'>#Бычков</a> С. С.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Бычков С. С."
},{
    "quote": "<div class='pi_text'>Жили в лесу, поклонялись колесу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BA%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Ткаченко</a> М. С. История русского литературного языка<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Ткаченко М. С."
},{
    "quote": "<div class='pi_text zoom_text'>Я вообще не люблю девочек. Особенно улыбающихся.<br/><br/>Штурба. В.А <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Штурба. В.А"
},{
    "quote": "<div class='pi_text zoom_text'>- Джентельменское соглашение... Что это? А? Пацанячий договор какой-то, да?<br/><br/>Малиновский О.Н. Международное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Малиновский О.Н."
},{
    "quote": "<div class='pi_text'>Я, конечно, ничего не имею против современных отечественных мультфильмов, но вот взять хотя бы смешариков, это же настоящая ОПГ, один Копатыч чего стоит, забадай меня пчела! <br/><br/>Облап Т. К. Социология культуры <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%B8%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%B3%D1%83'>#ФИСиМО_Кубгу</a></div>",
    "author": "Облап Т. К."
},{
    "quote": "<div class='pi_text'>Это вон, наш Буратино такой симпатичный...Со школьной неготовностью. Он как в цирк попал? Азбуку продал и билет купил. Нет что бы 'зайцем' пролезть, куда там, ЕВРОПЕЕЦ!!<br/><br/>Томилов А.Б. Психопаталогия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Томилов А.Б."
},{
    "quote": "<div class='pi_text'>П: Кем был Гринёв?<br/>С: Человеком.<br/>П: Нет. Людей не существует. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Человеком.<br/>П: Нет. Людей не существует. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Сильное дело! <br/><br/>Заболоцкий В И. Термодинамика . <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D1%82_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВт_кубгу</a></div>",
    "author": "Заболоцкий В И."
},{
    "quote": "<div class='pi_text'>Все зависит от вашего внутреннего государства. У кого-то внутри бедуины.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В. Риторика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text'>Принцип понятен? Идея понятна? <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Механика <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>*показывая функцию u=x^2-y^2*<br/>П: Что это за фигура?<br/>С1: Парабола!<br/>С2: Гипербола!<br/>П: Нет, это гиперболический параболоид. Зато каждый из вас может сказать, что был почти прав.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К.В. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Малыхин К.В."
},{
    "quote": "<div class='pi_text'>Кто-то из великих говорил так: 'Господь Бог придумал число ноль и функцию следования, все остальное можно придумать в рамках математики'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C'>#ФКТиПМ</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>- Представьте себе Уран (небо), после плоская Гея (земля) и на таком же расстоянии, что и небо, Тартар (ад). Такой себе космический бутерброд, сендвич......БИГ МАК!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D1%83%D0%BC%D0%B0%D0%BA%D0%BE%D0%B2'>#Чумаков</a> С.Н Античная литература <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Чумаков С.Н"
},{
    "quote": "<div class='pi_text'>— 'Сколько будет 3 * 4?'<br/>Первокурсник сразу скажет: 12.<br/>Второкурсник откроет калькулятор и посчитает.<br/>Третьекурсник напишет программу и тоже найдёт ответ.<br/>Студент четвёртого курса удивлённо посмотрит и скажет: 'Я что, должен все константы знать?'.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Мы живём ради кринжа. И это база.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D0%B7%D0%B0%D0%B9'>#Базай</a> А. А. Мировая художественная культура<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Базай А. А."
},{
    "quote": "<div class='pi_text'>Были еще платы с ультрафиолетовым стиранием. Я как-то решил выставить плату на солнце - тоже ведь ультрафиолет, но за весь день ничего не стерлось. Не знаю, может нужно было еще ночью подержать... <br/><br/>Выскубов Е.В. Архитектура вычислительных систем  <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Выскубов Е.В."
},{
    "quote": "<div class='pi_text'>Лайки под фото в Инстаграме не помогут вам выйти замуж.<br/><br/>Узлов Ю. А.   История Росии<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Узлов Ю. А."
},{
    "quote": "<div class='pi_text zoom_text'>Мы идём по дорожке. Она ещё тернистая, ветки по бокам ещё колятся, трава ещё высокая, но мы идём!<br/><br/>Сидорова Л.И. История англ.яз. и теория перевода <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Сидорова Л.И."
},{
    "quote": "<div class='pi_text zoom_text'>Это что, все?! Ну ладненько...<br/><br/>Бычков С.С. Немецкий язык, <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Бычков С.С."
},{
    "quote": "<div class='pi_text zoom_text'>Лучшие альтруисты - это садомазохисты<br/><br/>Шувалов С.С. , <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С.С."
},{
    "quote": "<div class='pi_text'>П: Так, а теперь достаем двойные листочки.<br/>С: Мы не успеем, две минуты осталось.<br/>П: Успеем, доставайте... Достали? А теперь уходим.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D1%80%D1%83%D1%82%D1%8E%D0%BD%D1%8F%D0%BD'>#Арутюнян</a> А. Х. Теория функции вещественной переменной <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Арутюнян А. Х."
},{
    "quote": "<div class='pi_text'>Ну как, понравилось? Зря. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B1%D0%B5%D0%B4%D0%B5%D0%B2%D0%B0'>#Лебедева</a> А. П. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Лебедева А. П."
},{
    "quote": "<div class='pi_text zoom_text'>Отрицание — это всегда утверждение ситуации, которая не происходит.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И.</div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>А-БАЛ-ДЕТЬ!<br/><br/>Борисов С.А. Социология<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Борисов С.А."
},{
    "quote": "<div class='pi_text'>Не издавайте лишних звуков.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D0%BB%D0%B8%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE'>#Пилипенко</a> С. Н. Английский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Пилипенко С. Н."
},{
    "quote": "<div class='pi_text'>Эффективность — как мужик: либо есть, либо нет. Только она женского рода.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%95%D1%80%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Ермоленко</a> В. В. Основы теории управления<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Ермоленко В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Найдите своих научных руководителей. И возьмите их за...смысл.<br/><br/>Татаринов А.В. Зарубежная литература. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>П: - Утомились?<br/>С (хором): - да<br/>П: - Ну, тогда, продолжаем писать!<br/><br/>Сытина А.В. Судебное красноречие. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Сытина А.В."
},{
    "quote": "<div class='pi_text'>Доказательство получилось с божьей помощью. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Алгебра <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>* Рассматривается пример и происходит путаница в обозначениях. *<br/><br/>Я что-то потерял свою ориентацию. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Дифференциальная геометрия и топология <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text zoom_text'>Кто хочет зачет на халяву? Тогда ответьте, где я был в 1962 году?<br/><br/>Авджян Г.Д. теория управления, <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Авджян Г.Д."
},{
    "quote": "<div class='pi_text zoom_text'>Черными маркером по белой доске - со всеми вытекающими отовсюду последствиями.<br/><br/>Сидоров В.А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Если вам нужно определить ритм, забудьте обо всём. Читайте это просто, ну как рэп.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B9%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Сайченко</a> В. В. Основы теории литературы <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Сайченко В. В."
},{
    "quote": "<div class='pi_text'>Я-то вас прощу. Но вот простит ли вас бог? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D1%80%D0%BC%D0%BE%D0%B4%D0%B5%D1%85%D0%B8%D0%BD'>#Дармодехин</a> С. В. Внешнеэкономическая деятельность<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Дармодехин С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Глобализация у вас во рту. Жуете Орбит - значит жуете глобальную систему.<br/><br/>Желтоносов В.М. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Желтоносов В.М."
},{
    "quote": "<div class='pi_text zoom_text'>— Сейчас я вам расскажу, как я стал некрофилом.<br/><br/>Нагорный С. В., Линейная алгебра, <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Нагорный С. В."
},{
    "quote": "<div class='pi_text'>Чтобы водитель остановил вам на остановке, покажите, что вы сильны, агрессивны и авторитарны!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BE%D0%BC%D0%BE%D0%B2%D0%B0'>#Сомова</a> Е. Г. Основы радиожурналистики<br/> <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Сомова Е. Г."
},{
    "quote": "<div class='pi_text zoom_text'>Вы - педагоги. А значит, ВЫ элита! <br/><br/>В. В. Кулишов <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Кулишов В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Получается двоечка... самая любимая оценка...<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Вот чудеса!<br/><br/>Луговой А.А. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Луговой А.А."
},{
    "quote": "<div class='pi_text'>- Что значит демократия в отношениях? Демократия - власть народа, что вообще? Это значит, пошла ещё с десятью там, да?.. Обожаю эту подмену понятий. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D1%8F%D0%BD'>#Даниелян</a> А.С. Теория государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Пойдешь в церковь, поставишь свечку, принесешь раскаяние. Бог конечно простит, а я нет. <br/><br/>Мороз О. Н. История античной литературы <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>*студент долго залипает в телефоне*<br/>П: Да ты совсем опрокинулся!<br/><br/>Кизим А.А. Логистика закупок  <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кизим А.А."
},{
    "quote": "<div class='pi_text'>С: Меня к вам физрук прислал. <br/>П: Физрук — это Нагиев, а у нас преподаватели. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B5%D1%82%D0%BC%D0%B0%D0%BD'>#Гетман</a> Ю. П.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Гетман Ю. П."
},{
    "quote": "<div class='pi_text'>* обращается к студентам *<br/>Не, ну я могу его к стенке прижать, но я не Сталин. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Механика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>С: Но почему так?<br/>П: Ну почему, почему? Математика такая. Если мне захочется что-то получить, то получу!<br/><br/>Гортинская В.В. Алгебра и аналитическая геометрия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Гортинская В.В."
},{
    "quote": "<div class='pi_text'>*в разговоре о декабристах*<br/><br/>Равенство, совесть и трудолюбие! Неважно, что вы студенты, а я преподаватель. Все мы - люди...<br/><br/>Павлов История России <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Павлов"
},{
    "quote": "<div class='pi_text zoom_text'>- Опера не по закону действуют, а по понятиям?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BA%D0%BE'>#Терещенко</a> Н.Д. Конституционное право. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Терещенко Н.Д."
},{
    "quote": "<div class='pi_text'>* говорит по телефону *<br/><br/>Это некрасиво, поэтому так делать можно только мне.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%BC%D0%BF%D0%B0%D0%BD'>#Кумпан</a> В. А. История международных отношений <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Кумпан В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Так что простите меня, если я буду опаздывать — я махровая сова.<br/><br/>Сайченко В. В. Основы теории литературы <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%B3%D1%83'>#филфак_Кубгу</a></div>",
    "author": "Сайченко В. В."
},{
    "quote": "<div class='pi_text'>* студент фотографирует надписи на доске, но у него садится телефон с характерным звуком *<br/><br/>Ага, вот так же на экзамене батареечка сядет. Так что пишите.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B6%D0%BD%D0%B5%D0%B2'>#Лежнев</a> А. В. Стохастический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Лежнев А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Логично?...Логично!<br/><br/>Щеколдин Г. А. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>Большинство — это большинство, которое всегда следует за меньшинством.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B6%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Кожевников</a> В. В. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кожевников В. В."
},{
    "quote": "<div class='pi_text'>Я стою в анфас и вы видите только одну сторону. А теперь я повернусь боком и вы видите руку. А теперь отвернусь и вы видите спину. <br/>Так вот, наши СМИ видят только в анфас. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D1%81%D1%82%D0%B0%D1%88%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Осташевский</a> А. В. <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А. В."
},{
    "quote": "<div class='pi_text'>* после рассказа о том, как застрял в институтском лифте на полтора часа *<br/><br/>Итак, вывод: лучше топайте ножками по ступенькам. В семь выйдете, к восьми вчера, может, и дойдете - зато живы будете.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BA%D0%B0%D1%80%D0%B5%D0%B2'>#Бокарев</a> А. П. Основы начертательной геометрии<br/><a data-link='/feed?section=search&amp;q=%23%D1%85%D1%83%D0%B4%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#худграф_кубгу</a></div>",
    "author": "Бокарев А. П."
},{
    "quote": "<div class='pi_text'>П: Что никогда не падает в цене?<br/>С: Знания?<br/>П: Золото! Вкладывайте в золото!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B8%D1%88%D0%BD%D1%8F%D0%BA%D0%BE%D0%B2'>#Вишняков</a> Р. Ю. Технология программирования и работы на ЭВМ <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Вишняков Р. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Гражданское право сложно для понимания, а в уголовном все просто: замочил - получил.<br/><br/>Ювко М.А. ТГП <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>Все равно мы все умрем!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D0%B3%D0%B4%D0%B0%D1%88%D0%B5%D0%B2'>#Багдашев</a> И. В. Общая экономическая теория <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Багдашев И. В."
},{
    "quote": "<div class='pi_text'>В Китае все делалось с любовью. Смертная казнь — с любовью. Вырезание целых общин — тоже с любовью. В воспитательных, так сказать, целях. Император в Китае — как отец.<br/><br/>Епифанова Е.В. История государства и права зарубежных стран <br/><a data-link='/feed?section=search&amp;q=%23%D0%AE%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Юрфак_кубгу</a></div>",
    "author": "Епифанова Е. В."
},{
    "quote": "<div class='pi_text'>Нам тут сказали, что гражданство России — это плюшка, хотя, как по мне, достаточно черствая.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B5%D1%86%D0%BA%D0%B8%D0%B9'>#Любецкий</a> А. И. Административные практики в системе публичного управления<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Любецкий А. И."
},{
    "quote": "<div class='pi_text'>— Вот этот Цитатник, да, захожу в него иногда, листаю ради интереса. И смотрю — 100, 200 лайков, думаю: 'Господи, кому оно надо вообще?'. Теперь, знаете, моя цель — 1000 лайков набрать, не диссертацию писать, а 1000 лайков в Цитатнике, да.<br/><br/>Даниелян А.С. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text zoom_text'>-Деньги делают деньги, а люди делают людей. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B8%D1%80%D0%BE%D0%BA%D0%BE%D1%81%D1%8F%D0%BD'>#Кирокосян</a> М.А Финансовая безопасность <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кирокосян М.А"
},{
    "quote": "<div class='pi_text'>* Студент рассказывает о Меркеле и Дамгарде *<br/><br/>С: - Это 2 разных человека.<br/>П: - Ну, естественно!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D1%81%D0%B8%D0%BF%D1%8F%D0%BD'>#Осипян</a> В. О. Криптография и сетевая безопасность<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Осипян В. О."
},{
    "quote": "<div class='pi_text'>Все равно что пришел на базар и тебя обсчитали! <br/><br/>Мартиросов А.В Композиция <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Мартиросов А.В"
},{
    "quote": "<div class='pi_text'>П: Ну, время ещё есть? Да? Пять минут. <br/>С: *строго* Нет. Нет времени. <br/>П: *плаксиво* Ну... дай мне ещё немного времени!<br/><br/>Быковский В.П. Кристаллофизика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Быковский В.П."
},{
    "quote": "<div class='pi_text'>На следующем занятии проверю у всех домашку, потому что она слишком офигительная.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%BA'>#Жук</a> А. С. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Жук А. С."
},{
    "quote": "<div class='pi_text'>С: Повторите, пожалуйста!<br/>П: Вы, суслики! Когда сокращать будете?<br/><br/>Толстова А.З. 'Мировая экономика и МЭО'<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Толстова А.З."
},{
    "quote": "<div class='pi_text'>Я всегда была и осталась атеисткой, но весьма толерантно отношусь к верующим людям, дабы не оскорбить их религиозные чувства, поскольку за это грозит уголовная ответственность.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Леванова</a> К. А. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Леванова К. А."
},{
    "quote": "<div class='pi_text'>Тараканов трогать нельзя, тараканы- символ студенчества!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B5%D1%82%D0%BC%D0%B0%D0%BD'>#Гетман</a> Ю. П.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Гетман Ю. П."
},{
    "quote": "<div class='pi_text'>Елизавета Петровна умерла от своей тучности. Парни, запомните! Нельзя брать в жены тучную девушку. <br/><br/>Касьянов В.В. История России. <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text'>Решать такое уравнение не просто, а очень просто.<br/><br/>Письменский А.В.<br/>Дифференциальные уравнения<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Письменский А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Что напЫсано, то и напЫсано, это и так ясно, а если скажут наоборот - будет наоборот.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D0%B2%D1%80%D0%B8%D0%BB%D1%8E%D0%BA'>#Гаврилюк</a> М. Н. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Гаврилюк М. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Спрошу так, чтоб вы поняли: Прометей, по-вашему, хороший человек? Или лох, выступивший против своего пахана? <br/><br/>Чумаков С.Н. ('Зевс') Литература стран изучаемых языков, <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>П: Что ты должен ответить, если тебе скажут, что ты балуешься?<br/>С: Не знаю.<br/>П: Политологи не балуются, они шалят! Вот так надо отвечать.<br/><br/>Юрченко В.М. Введение в специальность <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Юрченко В.М."
},{
    "quote": "<div class='pi_text'>*лекция по античной литературе*<br/>Вот в Средние века человек - горстка праха. Вот возьмешь в руку *начинает плеваться* и тьфу, тьфу!<br/><br/>Чумаков С.Н.  <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>Я не зову никого на баррикады! <br/><br/>Малиновский О.Н. Международное право<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Малиновский О.Н."
},{
    "quote": "<div class='pi_text'>*о телефоне*<br/>Я когда вижу людей с этой штукой, думаю всё, пропал, ха-ха, точно пропал!<br/><br/>Сергеев Э.А. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сергеев Э.А."
},{
    "quote": "<div class='pi_text'>Математики делают то, что могут, как надо. А прикладные математики делают то, что надо, как могут.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2'>#Рубцов</a> С. Е. Физика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Рубцов С. Е."
},{
    "quote": "<div class='pi_text'>*во время объяснения сложной темы со стороны задних пар раздаются звуки, похожие на стоны*<br/>Наверное, чья-то душа улетела.<br/><br/>Малыхин К.В. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Малыхин К.В."
},{
    "quote": "<div class='pi_text zoom_text'>Надо писать конспекты, вдруг приедет Ревизорро и будет шариться.<br/><br/>Узлов Ю.А. История России. <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text zoom_text'>— Ты нездоровый парнишка.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A6%D0%B5%D0%BB%D0%BA%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Целковников</a> Б. М. Основы арт-терапии <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Целковников Б. М."
},{
    "quote": "<div class='pi_text'>Черт возьми, мне надо в Hollywood!<br/><br/>Змихновский С.И. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Змихновский С.И."
},{
    "quote": "<div class='pi_text'>*студентка высказывает своё мнение по поводу материала*<br/><br/>Вы говорите-говорите, я слушаю... *выходит из аудитории*<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2'>#Павлов</a> Ю. М. Политическая журналистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю. М."
},{
    "quote": "<div class='pi_text zoom_text'>Яйценоиды Майданутые!<br/><br/>Павлов.Ю.М 'Практическая журналистика' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю. М."
},{
    "quote": "<div class='pi_text zoom_text'>Юрфак - всем факам фак.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD%D0%BE%D0%B2'>#Логинов</a> В. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Логинов В. В."
},{
    "quote": "<div class='pi_text'>Отсутствие мозгов — это не грешно. Грех — это когда вы списываете. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Методологические проблемы журналистского творчества<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>В пустом множестве нет элементов, но оно все равно множество. У меня на балконе стоят верблюды и их пустое множество.   <br/><br/>Чернышева У.А. Геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%A4%D0%9A%D1%83%D0%B1%D0%93%D0%A3_%D0%A1%D0%BD%D0%9A'>#матфак_ФКубГУ_СнК</a>.</div>",
    "author": "Чернышева У.А."
},{
    "quote": "<div class='pi_text zoom_text'>Математика - капризная принцесса!<br/><br/>Сергеев Э.А. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сергеев Э.А."
},{
    "quote": "<div class='pi_text zoom_text'>- Ну нравился ей этот бык. У всех свои странности. Кто-то краску нюхает, кто-то людей ест, а кто-то с быками спит.<br/><br/>Мороз О.П. Теория античной литературы <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D0%A3%D0%91%D0%93%D0%A3'>#журфак_КУБГУ</a></div>",
    "author": "Мороз О.П."
},{
    "quote": "<div class='pi_text'>Студентка:<br/>-Мне нужно уйти,у меня репетиция '100 красавиц университета',  будет официальное освобождение.<br/>Преподаватель:<br/>- Баба с возу,кобыле легче.<br/><br/>Щеколдин Г.А. механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>Проводим собрание, допустим, 15-го мая. Тепло, хорошо, птички поют. Коронавирус побеждён.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Пономаренко</a> Е. Е. Корпоративное управление<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Пономаренко Е. Е."
},{
    "quote": "<div class='pi_text'>Пелевин — это литературный Тимати.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%85%D1%83%D0%B4%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#худграф_кубгу</a></div>",
    "author": "Тимати.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В."
},{
    "quote": "<div class='pi_text'>П: Что такое гнОмон?<br/>С: Ну, это... Не знаю.<br/>П: То есть, что такое троллинг вы знаете, а что такое гномон - нет?!<br/><br/>Спасов С. В. Античная философия <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>В русском языке нет исключений. Это не исключения. Это жизнь. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B5%D0%BC%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0'>#Шемелева</a> Т. В.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Шемелева Т. В."
},{
    "quote": "<div class='pi_text'>С: - Извините. Не могли бы повторить последние пару фраз, что говорили? У меня интернет залагал.<br/>П: - Я не помню последние фразы, которые я говорил. Я никогда не помню.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%BA'>#Жук</a> А. С. Теория графов и ее приложение<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Жук А. С."
},{
    "quote": "<div class='pi_text zoom_text'>У вас есть шанс все изменить. Только не будьте дегенератами, я вас прошу!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2'>#Павлов</a> Ю. М. История русской литературы 20 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#журфак_КубГу</a></div>",
    "author": "Павлов Ю. М."
},{
    "quote": "<div class='pi_text'>Если человека по голову посадить в дерьмо, а потом вытащить по нос, то он начнет дышать. Потом если по рот,начнет и ртом дышать, кажется,уже полная свобода, но при этом человек забывает,что по горло в дерьме. А ведь вернуть обратно его в дерьмо с головой можно очень быстро. <br/><br/>Карнаушенко Л. В. История государства и права зарубежных стран <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л. В."
},{
    "quote": "<div class='pi_text zoom_text'>Отныне я буду называть вас метафизическими существами.<br/><br/>Спасов С.В. Философия <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text zoom_text'>-Если ты сломаешь гирьки, то ты будешь Халком навечно!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD'>#Волошин</a> М.А. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Волошин М.А."
},{
    "quote": "<div class='pi_text'>П: Теорема Лопиталя тут не работает.<br/>С: Как не работает?<br/>П: Она далеко не везде работает. Думаете Лопиталь такой умный был?<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Это не градация, это наоборот! Деградация!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D1%80%D0%BE%D0%BB%D0%BE%D0%B2%D0%B0'>#Фролова</a> Н.Н. Актуальные проблемы изучения грамматики <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Фролова Н.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Частицы бога присутствуют в каждом.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%B9%D0%BA%D0%BE'>#Бойко</a> А. А Естественно-научная картина мира <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Бойко А. А"
},{
    "quote": "<div class='pi_text'>Чем меньше шишка, тем больше величия.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BA%D0%BE'>#Терещенко</a> Н. Д. Конституционное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Терещенко Н. Д."
},{
    "quote": "<div class='pi_text'>*спор о третьей стороне в конфликте*<br/>П: Вот, представьте, вы и ещё один человек в пустыне боретесь за единственную полулитровую бутылку воды. Будет ли здесь третья сторона конфликта?<br/>С: Вода *насмешливо*<br/>П: Вода - третья сторона конфликта?? Ааа, точно, Посейдооон. Как же я смог забыть его?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B7%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B8%D1%87'>#Сазантович</a> А. Б. Политология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Сазантович А. Б."
},{
    "quote": "<div class='pi_text zoom_text'>Скажи мне какие сериалы ты смотришь, и я расскажу тебе о твоих убеждениях.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%BE%D0%B3%D0%BE%D1%87%D0%B0%D1%8F'>#Рогочая</a> Г. П. Культурология <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Рогочая Г. П."
},{
    "quote": "<div class='pi_text'>Жизнь пройдёт, а мы так ничего и не поняли.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Дар божий, вдохновение и прочая чепуха.<br/><br/>Мороз О.Н. о писательском мастерстве, 'Социология чтения' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Лучше иметь синий диплом и красное лицо, чем наоборот.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BE%D0%B2%D0%B0'>#Кузнецова</a> Е. Л. Общая экономическая теория<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кузнецова Е. Л."
},{
    "quote": "<div class='pi_text'>П: Как иначе можно сказать earthquakes?<br/>С: Quakes.<br/>П: Да, просто quakes, что ещё может трястись там.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B8%D0%BC%D0%B0%D1%80%D0%B5%D0%B2%D0%B0'>#Лимарева</a> Т. Ф. Теоретическая фонетика английского языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Лимарева Т. Ф."
},{
    "quote": "<div class='pi_text'>Я человек злопамятный, но я правда об этом никому не говорю.<br/><br/>Мороз О.Н. <br/>История русской литературы 18 в.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>П: В какой среде вы программируете?<br/>С: В окружающей.<br/><br/>Абрамов Е. И. , компьютерные технологии в медико-биологической практике<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Абрамов Е. И."
},{
    "quote": "<div class='pi_text'>Попробуйте сказать 'Сысой Псоевич'. Такое ощущение, как будто вы уже приняли. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B2%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Свитенко</a> Н. В. <br/>История русской литературы 19в<br/> <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Свитенко Н. В."
},{
    "quote": "<div class='pi_text'>* рисует эскиз тела *<br/>— И вот у нас получается бесконечный совочек.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>* разговор о социальной природе человека *<br/>Если ты не такой, как все, тебе надо набуцкать!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D1%86%D0%BA%D0%B8%D0%B9'>#Костецкий</a> А. Н.  Маркетинг<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Костецкий А. Н."
},{
    "quote": "<div class='pi_text'>С: Мы вас не забудем.<br/>П: Все вы так говорите...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B0%D0%B7%D0%B0%D0%BA%D0%BE%D0%B2'>#Казаков</a> Г. А. История государства и права России <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Казаков Г. А."
},{
    "quote": "<div class='pi_text'>* речь о курсовых и диссертациях *<br/>Если вы копируете одну статью, то это плагиат. Две — компиляция. Ну а три — это уже диссертация.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%98%D1%81%D0%B0%D0%B5%D0%B2'>#Исаев</a> В. А. Электричество<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Исаев В. А."
},{
    "quote": "<div class='pi_text'>Ассемблер — это как довольно умная обезьяна, только с ящиком динамита вместо гранаты.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F'>#Добровольская</a> Н.Ю. Основы программирования<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Добровольская Н.Ю."
},{
    "quote": "<div class='pi_text'>Как можно сломать холодильник 'Саратов'? Холодильник 'Саратов' сам ломает людей. Люди умрут, цивилизация закончится, холодильник 'Саратов' будет стоять.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Деловое общение<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text zoom_text'>Лучше верить, чем пить. <br/><br/>Касьянов В. В. История России <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Касьянов В. В."
},{
    "quote": "<div class='pi_text'>Мы - экономисты, а значит для нас главное  БДСМ - *смешки в аудитории*<br/>Бизнес, Девелопмент, Сэйлс энд Маркетинг!<br/><br/>Алеников А.С. Контроллинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Вы не думайте, что праздничные дни на нас распространяются. Вы находитесь в другом заведении, а не как все нормальные люди. <br/><br/>Спасов С.В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>Вот точка, я могу положить ее в коробочку. Все вокруг состарится, а она не испортится. Это бессмертие!<br/><br/>Костенко К.И<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К.И"
},{
    "quote": "<div class='pi_text'>* дверь открылась от сквозняка * <br/>— Двери говорят: идите уже отсюда!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D1%84%D0%B0%D0%BD%D0%B0%D1%81%D1%8C%D0%B5%D0%B2%D0%B0'>#Афанасьева</a> Т. Н. Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Афанасьева Т. Н."
},{
    "quote": "<div class='pi_text'>- Объясните мне, что такое аллитерация?<br/><br/>* Студенты думают, отвечают. *<br/><br/>- Хорошо. Это я ждала, пока доска высохнет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B8%D0%BC%D0%B0%D1%80%D0%B5%D0%B2%D0%B0'>#Лимарева</a> Т. Ф. Теоретическая фонетика английского языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Лимарева Т. Ф."
},{
    "quote": "<div class='pi_text'>Вот ещё один бездельник!<br/>Пары прогуливает...<br/><br/>Костырина Т. В. Неорганическая химия<br/><a data-link='/feed?section=search&amp;q=%23%D1%85%D0%B8%D0%BC%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#химфак_кубгу</a></div>",
    "author": "Костырина Т. В."
},{
    "quote": "<div class='pi_text'>Девушка, а Вы с кем там переписываетесь? Он вас любит? А если не любит, то зачем переписываться? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%95%D1%80%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Ермоленко</a> В. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Ермоленко В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Все мы немного адреналиновые наркоманы... Ну, это тоже хорошо.<br/><br/>Попова Ю.И. 'Теория личности' <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Попова Ю.И."
},{
    "quote": "<div class='pi_text'>Непорочное зачатие это в Библии. На матфаке таких услуг нет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B8%D0%BD'>#Любин</a> В. А. Линейная алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>Я даже с компьютером работаю, только под угрозой увольнения!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>Пифагор разделял числа на плохие и хорошие, плохие были женские, потому что они были дырявые.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D0%B2%D0%B4%D0%B8%D0%B5%D0%BD%D0%BA%D0%BE'>#Овдиенко</a> В.И. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Овдиенко В.И."
},{
    "quote": "<div class='pi_text'>Если вам не интересно, можете уйти, я уже отметил, что вы пришли.<br/><br/>Мавроди Н. Н. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Вам повезло, вам достались интересные трупы.<br/><br/>Эртель Л.А. Судебная медицина<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Эртель Л.А."
},{
    "quote": "<div class='pi_text zoom_text'>Есть девушка у шеста, а есть женщина у доски.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B8%D1%80%D0%BE%D0%BA%D0%BE%D1%81%D1%8F%D0%BD'>#Кирокосян</a> М.А. Финансовый анализ <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Кирокосян М.А."
},{
    "quote": "<div class='pi_text'>А вы пробовали играть в футбол по переписке? Очень завораживает!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%B2'>#Зеленов</a> В. И. Гетерогенное равновесие в системах<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Зеленов В. И."
},{
    "quote": "<div class='pi_text zoom_text'>Пока кто-то торгует с Россией, кто-то торгует Россией.<br/><br/>Сидоров В.А. ОЭТ <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text'>Жизнь случайна, смерть циклична.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B0%D0%B1%D0%BE%D0%BB%D0%BE%D1%86%D0%BA%D0%B8%D0%B9'>#Заболоцкий</a> В. И. Введение в термодинамику<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Заболоцкий В. И."
},{
    "quote": "<div class='pi_text zoom_text'>Обычно студенты к концу семестра начинают появляться как грибы после дождя.<br/><br/>Гукасова Э. М. Языки мира и языковые ареалы. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Гукасова Э. М."
},{
    "quote": "<div class='pi_text'>Видно, что у автора было твёрдое, отличное от нуля, желание...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D1%80%D0%BE%D1%85%D0%BE%D1%80%D0%BE%D0%B2'>#Прохоров</a> В. П. Общая теория связи<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Прохоров В. П."
},{
    "quote": "<div class='pi_text'>Arduino — это такая монтажная дырка с палками.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D1%80%D1%83%D0%B1%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Трубников</a> Ю. Ю.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B8%D0%BD%D1%81%D0%BF%D0%BE'>#инспо</a></div>",
    "author": "Трубников Ю. Ю."
},{
    "quote": "<div class='pi_text'>*про Елизавету Петровну*<br/>Исповеди делала тайные, поэтому об этом знает вся страна.<br/><br/>Петров В.И. История <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>Не спать! Косить! <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Признаться в любви - это не любовь! Это вызов, чтоб тебя полюбили!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D1%80%D0%B5%D0%B3%D1%83%D0%B1%D0%BE%D0%B2%D0%B0'>#Трегубова</a> Е.Н. История русского литературного языка <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Трегубова Е.Н."
},{
    "quote": "<div class='pi_text'>Один раз - не прогульщик.<br/><br/>Алеников А.С. Контроллинг<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text zoom_text'>— Но воздвигать философию в ранг науки... как у Гегеля: 'Я выходит из не я'; курили они что ли?<br/><br/>Бочкова Е. В. Экономическая теория <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Бочкова Е. В."
},{
    "quote": "<div class='pi_text'>П: Так, девочки, почему так шумно?<br/>С: Можно выйти?<br/>П: Конечно. Если вы являлись источником шума, то ещё и нужно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2'>#Петросов</a> Т. А. Философия <a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Матфак_кубгу</a></div>",
    "author": "Петросов Т. А."
},{
    "quote": "<div class='pi_text'>Скоро контрольную писать будем. Ну это как Бог даст, а Бог — это я.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Теория функции комплексного переменного<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Человек создан для счастья , как птица для полета.<br/><br/>Максименко М.А Анатомия ЦНС ВНД <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Максименко М.А"
},{
    "quote": "<div class='pi_text zoom_text'>Ну нельзя же быть таким ботаном!<br/><br/>Мартиросов А.В. проектная графика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Мартиросов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Вам не хватает системности в работе! <br/><br/>Авджян Г.Д. Теория управления <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Авджян Г.Д."
},{
    "quote": "<div class='pi_text'>В перерывах по радио играет попса. Павлов:<br/>- Это что за порнография? Кому мне пойти по голове настучать?<br/><br/>Ю.М.Павлов, коридоры журфака <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text zoom_text'>Для того вам мышление и дано, чтобы фильтровать базар. <br/><br/>Спасов С.В. Философия, <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>*так, любя, к студентам обращается преподаватель*<br/>Двоешники, по'няли?<br/><br/>Коновалов А.В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Коновалов А.В."
},{
    "quote": "<div class='pi_text'>* решает полчаса * <br/>— Ответ, по-моему, не такой, но неважно — издержки производства.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Я понимаю, что очень душно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%85%D0%BE%D0%B2%D0%B8%D1%87'>#Бухович</a> Е. В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Бухович Е. В."
},{
    "quote": "<div class='pi_text'>Суперподборка Алексея Борисовича <img alt='♥' class='emoji' src='/emoji/e/e299a5.png'/><img alt='♥' class='emoji' src='/emoji/e/e299a5.png'/><img alt='♥' class='emoji' src='/emoji/e/e299a5.png'/><br/><img alt='▪' class='emoji' src='/emoji/e/e296aa.png'/>Бережёного бог бережёт, а не бережёного конвой стережёт.<br/><img alt='▪' class='emoji' src='/emoji/e/e296aa.png'/>Лучше два раза встать, чем один раз сесть.<br/><img alt='▪' class='emoji' src='/emoji/e/e296aa.png'/> Больше напишешь - меньше дадут.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BE%D0%BC%D0%B8%D0%BB%D0%BE%D0%B2'>#Томилов</a> А.Б. Основы безопасности жизнедеятельности <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФППК_КубГу</a></div>",
    "author": "Томилов А.Б."
},{
    "quote": "<div class='pi_text'>*студент закончил читать доклад. тишина*<br/>С: Вообще, я ждал аплодисментов...<br/>*пара ребят и преподаватель похлопали*<br/>С: Я пошутил.<br/>П: Мы тоже пошутили. <br/><br/>Ратушняк Т. В. История России. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Ратушняк Т. В."
},{
    "quote": "<div class='pi_text zoom_text'>Их будет штук очень много.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Я в другой группе спросил: 'Вы все учиться хотите?'<br/>Все сказали 'да', и я аж испугался.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D0%B0%D0%BB%D1%8B%D0%B9'>#Чалый</a> В. В. Экономика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text zoom_text'>С кем поведешься,от того и забеременеешь...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В.И. История России. <a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Эконом_КубГУ</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>* преподаватель рассказывает про коллоквиум*<br/><br/>П: - Знаете такую известную поговорку?<br/>С: - Какую?<br/>П: - Хорошо смеется тот,кто смеется после коллоквиума!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Итак, есть тут бессмертные, кто пропускает сегодня мою пару? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B5%D1%80%D1%88%D0%BD%D1%91%D0%B2%D0%B0'>#Шершнёва</a> Н. Б. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Шершнёва Н. Б."
},{
    "quote": "<div class='pi_text'>'Восток' у нас популярен. Иногда красные фонари даже вешают. Факультет  'Красных Фонарей'. Есть улица Красных Фонарей, а у нас факультет.<br/><br/>Бойко П.Е. История Социологии <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Бойко П.Е."
},{
    "quote": "<div class='pi_text'>А что это у нас там в телефоне? Опять 'телки.ру'?<br/><br/>Остапенко А.А. Экология<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Остапенко А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Для журналиста отсутствие информации — тоже информация.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BE%D0%BF%D0%BA%D0%B8%D0%BD'>#Сопкин</a> П.Т. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Сопкин П.Т."
},{
    "quote": "<div class='pi_text'>Мы говорим: правда, истина... Я против фигни. Никакой правдой и истиной мы не обладаем, а только тешим себя иллюзиями, что обладаем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>*о людях нетрадиционной сексуальной ориентации*<br/>Когда бог создавал из глины мужчину и женщину, у него остался еще кусочек. Он не знал, что с ним делать, вот и слепил не пойми что.<br/><br/>Пономаренко И.Н. Лексикология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Пономаренко И.Н."
},{
    "quote": "<div class='pi_text'>Все в этом мире дискретно. Догадайтесь, а я, между прочим, уже догадался!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>А третья стадия - очищение огнем. Душа-то, конечно, очищалась, только тело страдало. Ну, у нас никакое дело без издержек не делается.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D0%BD%D0%B8%D1%89%D1%83%D0%BA'>#Онищук</a> С.А. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Онищук С.А."
},{
    "quote": "<div class='pi_text'>Хорошую вещь браком не назовёшь!<br/><br/>Арутюнов Э.К. Теория государства и права зарубежных стран<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Арутюнов Э.К."
},{
    "quote": "<div class='pi_text'>П: - Называет фамилию студента.<br/>С: - Он на больничном.<br/>П: - Поставлю ему 'н', что означает 'на больничном'. Правильно?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B8%D0%BD%D0%BA%D0%B8%D0%BD'>#Жинкин</a> С. А. История России и всеобщая история</div>",
    "author": "Жинкин С. А."
},{
    "quote": "<div class='pi_text zoom_text'>... чертим стрелку вниз и подписываем mg. Земля всегда притягивает все МЭ и ЖО! <br/><br/>Щеколдин Г.А. Доп. главы по физике <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>Мыслить надо умозрительно.<br/><br/>Тилинина Т.В.  Философия <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Тилинина Т.В."
},{
    "quote": "<div class='pi_text'>П: Я надеюсь, вы уже запутались?<br/>С: Да.<br/>П: Очень хорошо.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С. Н. Культурология<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Да.<br/>П: Очень хорошо.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С. Н."
},{
    "quote": "<div class='pi_text'>Тут константу сам бог велел 1/2 написать!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F'>#Макаровская</a> Т. Г. Математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Макаровская Т. Г."
},{
    "quote": "<div class='pi_text zoom_text'>Я на вас смотрю, и мне плохо становится.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D1%83%D0%BA%D0%B0%D1%81%D0%BE%D0%B2%D0%B0'>#Гукасова</a> Э.М. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Гукасова Э.М."
},{
    "quote": "<div class='pi_text'>Стоит бережно относиться к тем положительным эмоциям, которые нам приносят уравнения математической физики.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B0'>#Павлова</a> А. В. Уравнения математической физики<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Павлова А. В."
},{
    "quote": "<div class='pi_text'>Закон Джоуля-Ленца или почему нельзя садиться на включенную в сеть электроплиту.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Механика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text zoom_text'>Издатели - они извращенцы такие, их где-нибудь запрёшь, а они все равно печатать будут!<br/><br/>Шувалов С.С. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С.С."
},{
    "quote": "<div class='pi_text'>Может и меньше, но зато больше.<br/><br/>Спасов С.В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>П: На гребне волны хотите быть? Ну, что ж, хотите — будьте... Но на гребне волны — только пена. Пеной будете, историей — нет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Онтология и теория познания.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>П: Тебе со мной хорошо? Так чего же ты зеваешь?<br/>*смех студентов*<br/>П: Боже, зачем я это говорю; вы ведь думаете о низменном... Как, например, сдать экономическую теорию, не уча.<br/><br/>Сидоров В.А. Общая экономическая теория<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Дайте мне пистолет! Я застрелю этот музыкальный центр. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BB%D1%8E%D1%81%D1%82%D0%B5%D0%BD'>#Тлюстен</a> С. Р. Теория вероятностей <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С. Р."
},{
    "quote": "<div class='pi_text'>— Иди сюда, мой сладкий сахар.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D0%BA%D1%83%D0%BD%D1%8C'>#Окунь</a> А.С. Налоговый менеджмент<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Окунь А.С."
},{
    "quote": "<div class='pi_text'>П: А почему ты не готовишься? Причина? Дрова разгружал, вагоны разгружал, били тебя, спать не дают, голодный ты, помираешь? Причина какая? Почему ты не готов?<br/>С: Не успел я вчера.<br/>П: Да где ты бегал?<br/>С: Домой ехал, в универе был.<br/>П: Вот ты лепечешь всякую ерунду!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D0%A3%D0%91%D0%93%D0%A3'>#эконом_КУБГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>Это стыдно и унизительно, когда ты ущербный и никому не нужный.<br/><br/>Марченко Е.П. Основы методики преподавания русского языка. <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Марченко Е.П."
},{
    "quote": "<div class='pi_text'>* Пара. Введение в филологию. *<br/><br/>Поначалу, когда вы выступаете на людях, трясетëсь вы и ваша трибуна, 8 баллов землетрясения, в следующий раз 5, а затем трясутся те, кто вас слушает. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Ну шо, бойцы? <br/><br/>Петросов Т.А. Фотодело <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Петросов Т.А."
},{
    "quote": "<div class='pi_text zoom_text'>Система, без обратной связи - обречена на смерть.<br/><br/>Седых Б.Р. Информационные технологии <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Седых Б.Р."
},{
    "quote": "<div class='pi_text zoom_text'>Вы Адыгейскую клубнику видели?! Ты её кусаешь, а она тебя.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Механика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A2%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФТФ_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text zoom_text'>Человеческое в человеке — это то, что он ошибается. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Технология и методика медиаисследования <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>*после долгого чтения лекции*<br/>- Ну а теперь пишите устно!<br/><br/>Ярёменко Л.А. мат. анализ <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Ярёменко Л.А."
},{
    "quote": "<div class='pi_text'>*студентка очень близко наклонилась к тетради*<br/>П: Вы отодвиньтесь. А то ослепнете. А если вы ослепнете как увидите кого полюбите? <br/>С: Уже поздно. Увидела. <br/>*из аудитории* <br/>Нужно любить душой! <br/>П: Да пожалуйста. Кто ж запрещает. Душу только у себя найдите. <br/><br/>Осташевский А.В. 'Правовые основы журналистики'<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>Китайский коммунизм - проституирующий коммунизм.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text zoom_text'>Вы же понимаете? Мне не нужны ваши тела... Мне нужны ваши души.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B6%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Кожевников</a> В. В.  Математический анализ <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кожевников В. В."
},{
    "quote": "<div class='pi_text'>*разговор про душу*<br/>Если она хочет быть, то пусть будет. Мне то что?<br/><br/>Мороз О.Н. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Посмотрите на этот кружок. Впрочем, да, на самом деле это скорее овал... Так вот, посмотрите на этот мёртвый кружок.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F'>#Добровольская</a> Н. Ю. Бизнес процессы разработки программного обеспечения<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Добровольская Н. Ю."
},{
    "quote": "<div class='pi_text'>- Ну вот, например, современной молодежи нравится Филипп Киркоров. Ну по глазам же вижу, что нравится!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A3%D1%80%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2'>#Урманов</a> Д.В. Теория управления<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Урманов Д.В."
},{
    "quote": "<div class='pi_text zoom_text'>Так... Вот тут точенька... Поехали дальше!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2'>#Николов</a> М. С. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Николов М. С."
},{
    "quote": "<div class='pi_text'>П-&gt;С1: Сходи за маркером в деканат.<br/>С2-&gt;П: Давайте пишите, пока его нет.<br/>П: Да... давайте быстренько напишем.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>В лесу раздавался девичий крик, постепенно переходящий в женский.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%B0%D0%B1%D0%BB%D1%8E%D0%BA'>#Хаблюк</a> В. В. Биохимия <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#биофак_КубГУ</a></div>",
    "author": "Хаблюк В. В."
},{
    "quote": "<div class='pi_text'>Театральные паузы хороши, но не в конце пары.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text'>'к тому, что умение логически мыслить - очень важно, и не всегда необходимы формулы-клише' <br/>— Когда в голову что-то лишнее пихаешь, что-то нужное с другой стороны вылезает!<br/><br/>Цалюк М. В. Математический анализ. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Цалюк М. В."
},{
    "quote": "<div class='pi_text zoom_text'>Давайте порешаем. Красавица, иди к доске.<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>Мои приколы против меня? Некультурно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Некультурно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Советский Союз развалили заочники!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B0%D1%81%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2'>#Касьянов</a> В.В. История России <a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Журфак_КубГУ</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Никто не бил стенку кулаком? мм...ей тоже...больно.<br/><br/>Костенко К.И. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>С: На матфаке ужасный интернет.<br/>П: Я знаю, у нас серьёзные помехи. Люди интенсивно думают.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Целые функции <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>В Америке люди со второго класса изучают программирование! Хорошо, что они все там тупые.<br/><br/>Бикмашев. Г.А 'История экономических учений' <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Бикмашев. Г.А"
},{
    "quote": "<div class='pi_text'>Сила притяжения — это отрицательная сила. Поэтому, если вас к кому-то тянет, то задумайтесь, не отрицательная ли это сила.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2'>#Рубцов</a> С. Е. Физические основы построения ЭВМ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Рубцов С. Е."
},{
    "quote": "<div class='pi_text'>Неопознанные трупы грустят.<br/><br/>Эртель Л.А судебная медицина <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Эртель Л.А"
},{
    "quote": "<div class='pi_text zoom_text'>Что такое любовь? Няшки-няшки, розовые сопли.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%B0%D0%B3%D1%83%D1%80%D0%BE%D0%B2'>#Хагуров</a> Т. А. Экономика образования <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Хагуров Т. А."
},{
    "quote": "<div class='pi_text'>Деньги платят за профессионализм, а не за наличие диплома. <br/><br/>Утков Г.Н. Современный русский язык.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г.Н."
},{
    "quote": "<div class='pi_text'>Понимаю, когда сидят мальчик с девочкой разговаривают. Ну, может он ее в кино зовет или еще что. Но когда у двух парней есть общие темы - это весьма странно... <br/><br/>Халафян А.А., теория вероятности <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Халафян А.А."
},{
    "quote": "<div class='pi_text'>Для развития на государственном уровне подлинных процессов демократизации...<br/>* пришла СМС *<br/>Отстань. Процессов демократизации требовалось...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2'>#Петросов</a> Т. А. Современное издательское дело<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Петросов Т. А."
},{
    "quote": "<div class='pi_text'>Женское сердце растопить не так уж и сложно. Оно всегда готово для топки.<br/><br/>Ажгихин С. Г., проектирование <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Ажгихин С. Г."
},{
    "quote": "<div class='pi_text'>*отвлекается на телефон, печатает*<br/>— Извините, ребята, я тут мир спасаю!<br/><br/>Сытина А.В. Судебное красноречие <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Сытина А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Я оптимист — я думаю, что вы всё знаете.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>А теперь маленькое отступление, которое не отступление, а совершенно по делу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Зарубежная литература средних веков и эпохи Возрождения<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>*на консультации* <br/>П: Я слишком ленив, чтобы ловить вас на списывании. Но есть и такие преподаватели, для которых поймать студента - это спорт. <br/> <br/>Чумаков С. Н. Античная литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Чумаков С. Н."
},{
    "quote": "<div class='pi_text'>Чтобы понять, чем отличается тактика от стратегии, расскажу анекдот.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D1%81%D1%82%D0%B0%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE'>#Остапенко</a> А. А. Педагогика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Остапенко А. А."
},{
    "quote": "<div class='pi_text'>Тру-ту-тру-ту...<br/>Да, девочки , ну и трещотки же вы!<br/><br/>Утков.Г.Н. 'Стилистика речи' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Как у вас все логично. Люблю, когда все логично.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B1%D0%B5%D0%B4%D0%B5%D0%B2%D0%B0'>#Лебедева</a> А. П. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Лебедева А. П."
},{
    "quote": "<div class='pi_text'>Ночь, улица, фонарь, Рендж ровер... Я не любитель Блока.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%BF%D0%B0%D1%80%D0%B5%D0%B2'>#Лупарев</a> Е. Б. Административное право <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Блока.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%BF%D0%B0%D1%80%D0%B5%D0%B2'>#Лупарев</a> Е. Б."
},{
    "quote": "<div class='pi_text'>*о приближении к зачетной неделе*<br/><br/>Близится свет в конце тоннеля.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B8%D0%BD%D0%B0'>#Любина</a> Г. С. 'Практический русский язык' <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Любина Г. С."
},{
    "quote": "<div class='pi_text'>Мозг вообще не отдыхает. Он в астрал уходит. Моется, чистится там.<br/><br/>Костенко К.И.<br/>Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>*отвечает коллоквиум по немецкому*<br/><br/>- …kënnt…<br/>- Какой ещё кент? Твой близкий что ли?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D1%87%D0%B0%D0%B9'>#Нечай</a> Ю.П. Немецкий язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Нечай Ю.П."
},{
    "quote": "<div class='pi_text'>Не забывайте, что вы в лаборатории. Здесь можно пить только коньяк!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8B%D1%81%D0%B5%D0%BD%D0%BA%D0%BE'>#Лысенко</a> В. Е. Алгоритмизация и программирование.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Лысенко В. Е."
},{
    "quote": "<div class='pi_text zoom_text'>Постепенно начали понимать, что обменивать золото на специи невыгодно.<br/><br/>Карнаушенко Л. В. История государства и права зарубежных стран <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л. В."
},{
    "quote": "<div class='pi_text'>Вас, чтобы завести, достаточно пошутить.<br/><br/>Спасов С.В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>П: Этого произведения нет в вашем списке,но я вам его рекомендую,точнее почти вас обязываю.<br/><br/>Татаринов А.В. Зарубежная литература<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#Филфак_КубГу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Некоторые ошибочно полагают, что они умеют читать, а другие заходят ещё дальше и думают, что они умеют мыслить. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С. В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>*показывает 5 листов с рекомендуемыми произведениями*<br/><br/>Вот это - списки литературы, которую я рекомендую для чтения. По сути, это 5 фрагментов... *долгое раздумье* ...бумаги.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература средних веков и эпохи Возрождения <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>Аристотель — это не моя ночная фантазия.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2'>#Петросов</a> Т. А. Логика<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Петросов Т. А."
},{
    "quote": "<div class='pi_text zoom_text'>Наших не удивишь сожжением кошечки. Наши потом сами поджигателя за кошечку еще подожгут.<br/><br/>Карнаушенко Л. В. История государства и права зарубежных стран <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л. В."
},{
    "quote": "<div class='pi_text'>* Студенты сидят на контрольной. *<br/><br/>Пеналы на столах есть, а шпоры где?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B0%D0%B4%D0%B0%D1%8F%D0%BD%D1%87%D1%83%D0%BA'>#Задаянчук</a> Н. А. Линейная алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Задаянчук Н. А."
},{
    "quote": "<div class='pi_text'>Круглые черви — не черви вообще!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D1%81%D1%82%D0%BE%D0%B2'>#Кустов</a> С. Ю.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Кустов С. Ю."
},{
    "quote": "<div class='pi_text'>Здесь дно не пробьешь, это же логика.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text'>1. Высокий уровень гигиеничности.<br/>2. Износостойкость.<br/>3. Долговечность.<br/>4. Водонепроницаемость.<br/>Это все 'джентльменский' набор оксигинаторной мембраны.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BD%D0%BE%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE'>#Кононенко</a> Н. А. Мембранные процессы в медицине<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Износостойкость.<br/>3. Долговечность.<br/>4. Водонепроницаемость.<br/>Это все 'джентльменский' набор оксигинаторной мембраны.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BD%D0%BE%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE'>#Кононенко</a> Н. А."
},{
    "quote": "<div class='pi_text'>С: - Скажите, пожалуйста, как понять фильм на английском, если не знаешь английский?<br/>П: - Сердцем и душой, девочки. Сердцем и душой!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BA%D0%BE%D0%B4%D0%B0%D0%B2'>#Волкодав</a> Т. В. Английский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Волкодав Т. В."
},{
    "quote": "<div class='pi_text zoom_text'>Не то.<br/><br/>Авджян Г.Д. теория управления, <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Авджян Г.Д."
},{
    "quote": "<div class='pi_text zoom_text'>Оо, они разбираются в математике. Мы деньги зарабатываем, а они в математике разбираются.<br/><br/>Половодов Ю.А. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Половодов Ю.А."
},{
    "quote": "<div class='pi_text'>* Рассказывая о дочери друга, живущей в Америке *<br/>Надеюсь, она не забеременеет от китайца или, что ещё хуже, от пуэрто американца.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Дроботенко</a> М. И. Основы компьютерных наук <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Дроботенко М. И."
},{
    "quote": "<div class='pi_text'>Что, никогда курсовые не защищали? Ну ничего, в этом году у нас с вами будет замечательный спектакль с замечательными зрителями, которые будут задавать интересные вопросы. И с замечательным автором, который ,конечно же, будет знать все ответы.<br/><br/>Хорева Л. Н. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Хорева Л. Н."
},{
    "quote": "<div class='pi_text'>Сначала я скажу, что производной функции нескольких переменных не существует, а потом покажу как её найти.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B2%D0%B8%D0%BD'>#Савин</a> В. Н. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Савин В. Н."
},{
    "quote": "<div class='pi_text'>Страшно представить, что кто-то из вас будет учить моих детей.<br/><br/>Чернышев А.Н.Числовые системы.<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%A4%D0%9A%D1%83%D0%B1%D0%93%D0%A3_%D0%A1%D0%BD%D0%9A'>#матфак_ФКубГУ_СнК</a></div>",
    "author": "Чернышев А.Н."
},{
    "quote": "<div class='pi_text'>П: Видели как самогон делают?<br/>С: Да.<br/>П: Наши люди!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Пономаренко</a> И. Н. Лексикология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Да.<br/>П: Наши люди!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Пономаренко</a> И. Н."
},{
    "quote": "<div class='pi_text'>П: Вы хоть передохнули, нет?<br/>С: Нет<br/>П: Ну, это уже печаль.<br/><br/>Гукасова Э. М. Языки мира и языковые ареалы. Типология языков. <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Ргф_кубгу</a></div>",
    "author": "Гукасова Э. М."
},{
    "quote": "<div class='pi_text'>В принципе, мне всё равно, но мне не всё равно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B0%D1%81%D0%B0%D0%BD%D0%B5%D0%BB%D0%BB%D0%B8'>#Касанелли</a> Д. П. Геоботаника<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Касанелли Д. П."
},{
    "quote": "<div class='pi_text'>С: ...попробуйте топологию простому человеку объяснить на улице.<br/>П: ХА-ХА человеку с улицы, а еще и 'под градусом'...Но это можно.<br/><br/>Сергеев Э.А. теория чисел <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сергеев Э.А."
},{
    "quote": "<div class='pi_text zoom_text'>Ну почему фанатики? К власти пришли религиозные ребята.<br/><br/>Карнаушенко Л. В. История государства и права зарубежных стран <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л. В."
},{
    "quote": "<div class='pi_text'>*пьет кофеек*<br/>- Мысль понятна? <br/><br/>Мороз О.Н. 'Социология чтения' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Силы притяжения - отрицательные силы. Поэтому подумайте, если вас к кому-то тянет, может, это что-то отрицательное? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2'>#Рубцов</a> С.Е. Физика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Рубцов С.Е."
},{
    "quote": "<div class='pi_text'>Когда не знаешь, что делать, интегрируй по частям.<br/><br/>Черных Н.М. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Черных Н.М."
},{
    "quote": "<div class='pi_text'>П: Что вы там улыбаетесь? Я тоже хочу. <br/>С: Да это их постоянное выражение лица. <br/>П: Неважно, я тоже хочу! <br/>С: Это у них истерическое. <br/>П: НЕВАЖНО, Я ТОЖЕ ХОЧУ!!! <br/><br/>Мороз О.Н. Русская литература 18 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>П: Говорил я вам, не поступайте сюда.<br/>С: *хором* Нет, не говорили!<br/>П: Ну, вот сейчас говорю.<br/><br/>Нагорный С. В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Нагорный С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Запомните, все шумеры - сволочи!<br/><br/>Остапенко А.А. Геодезия с основами космаэрофотосъемки <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Остапенко А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Политикой не интересуетесь? Нет? Ну и правильно. Главное - матанализ!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К.В. Комплексный анализ <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин К.В."
},{
    "quote": "<div class='pi_text zoom_text'>Учитесь, пока есть тот, кто знает, куда вас правильно послать и направить.<br/><br/>Эртель Л.А. Профессиональная этика и служебный этикет <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Эртель Л.А."
},{
    "quote": "<div class='pi_text zoom_text'>— Пробеееел... НО-НО-НО-НО-НО! Что ты как дятел стучишь?<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>*рассказывает как в Москве был на концерте*<br/><br/>Захожу, сажусь, и тут какое-то чмо выбегает. Дык, это ж Пугачева!<br/><br/>Желтоносов В.М. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Желтоносов В.М."
},{
    "quote": "<div class='pi_text'>Ну-ка сдвинься! Пересядь оттуда! Не трогай её, только я имею право приставать к красивым девушкам в этой аудитории!!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D1%82%D0%B5%D1%80'>#Кутер</a> М. И. Теория бух. учёта<br/><a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Эконом_КубГУ</a></div>",
    "author": "Кутер М. И."
},{
    "quote": "<div class='pi_text zoom_text'>У меня приятели примерно вашего возраста, ну как приятели: дети моих друзей.<br/><br/>Змихновский С.И. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Змихновский С.И."
},{
    "quote": "<div class='pi_text'>*студентка заходит во время пары*<br/>С: У нас тут мероприятие, перейдите в другую аудиторию, пожалуйста.<br/>П: Да,конечно.<br/>*закрывает дверь*<br/>П: Вы же поняли, что я обманул её?<br/><br/>Штурба Е.В. Социология  <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Штурба Е.В."
},{
    "quote": "<div class='pi_text zoom_text'>С помощью нашего законодательства можно спокойно уходить от ответственности. НО Я ВАС ЭТОМУ НЕ УЧИЛ!<br/><br/>Осташевский А.В. правовые основы журналистики <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>П: ...вы получаете совершеннейшую абстракцию, вы получаете труп языковой. Или это не понятно? <br/>С: Как-то слишком много смерти на нашей паре.<br/>П: Слишком много смерти в вашей жизни, а не в нашей паре! Здесь вы начинаете жить - здесь вы начинаете думать!<br/><br/>Тащиан А.А. Философия языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Тащиан А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Спокойно! Она учится говорить по-русски! <br/><br/>Чалый В.В. Русский язык и культура речи <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Чалый В.В."
},{
    "quote": "<div class='pi_text'>Дома докажете. На экзамене расскажете.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В. Комплексный анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин К. В."
},{
    "quote": "<div class='pi_text zoom_text'>П: ... и ведь ничего не добавишь. Хотя, как говорят наши братья-англичане, ЛОЛ.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А.А. Онтология и теория познания. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Тащиан А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Конечно, древние греки знали, что такое дроби. Но они в них не верили.<br/><br/>Сидоренко Н.С. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Сидоренко Н.С."
},{
    "quote": "<div class='pi_text'>Не успеваете записывать? Мне вас жаль... Во втором семестре вы будете у меня плакать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D1%89%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F'>#Пащевская</a> Н. В. Неорганическая химия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Пащевская Н. В."
},{
    "quote": "<div class='pi_text'>П: ...  за хорошее поведение.<br/>С: Всмысле за хорошее?<br/>П: Это дебильная шутка, просто сказал.<br/><br/>Павлов Ю.М. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text zoom_text'>А сейчас я напишу какое-то решение.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B6%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Кожевников</a> В.В. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кожевников В.В."
},{
    "quote": "<div class='pi_text zoom_text'>У тебя гёрла есть?<br/><br/>Авджян Г.Д. Теория управления <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Авджян Г.Д."
},{
    "quote": "<div class='pi_text zoom_text'>Мужчины в юбках - это романтично! <br/><br/>Карнаушенко Л. В. История государства и права зарубежных стран <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л. В."
},{
    "quote": "<div class='pi_text'>Это какой-то nightmare.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B4%D1%80%D0%BB%D0%B5'>#Кодрле</a> С. В. Иностранный язык<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кодрле С. В."
},{
    "quote": "<div class='pi_text'>У нас два трупа и никто не виноват?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D1%84%D0%BB%D0%B5%D0%B2%D0%B0'>#Куфлева</a> В.Н. Уголовное право <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Куфлева В.Н."
},{
    "quote": "<div class='pi_text'>П: Соскучились по мне?<br/>С: *хором* Дааа.<br/>П: А я по вам-нет. <br/>*смеётся*<br/><br/>Писаренков А.А. Иностранный язык. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Писаренков А.А."
},{
    "quote": "<div class='pi_text'>Журналисты молчат в двух случаях: либо они спят, либо они мертвы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D1%8B%D0%BA'>#Петрык</a> Я. Ю.  Философия <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#журфак_КубГу</a></div>",
    "author": "Петрык Я. Ю."
},{
    "quote": "<div class='pi_text'>*студент уходит на самый край доски* <br/>- Ты специально сюда встал, чтобы мне шею свернуть?!<br/><br/>Черных Н.М.  <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Черных Н.М."
},{
    "quote": "<div class='pi_text zoom_text'>Полная чехарда происходит.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D1%80%D0%BE%D0%BB%D0%BE%D0%B2%D0%B0'>#Фролова</a> Н.Н. Актуальные проблемы изучения грамматики <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Фролова Н.Н."
},{
    "quote": "<div class='pi_text'>Вау, я чуть не оторвал какой-то кабель!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2'>#Петросов</a> Т. А. Современное издательское дело<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Петросов Т. А."
},{
    "quote": "<div class='pi_text'>— Возьмем, к примеру, как явление, ненависть, ну, пускай, к Тащиану. Или к тому же Гегелю...<br/>*студент, почти шепотом*<br/>— А в чем разница?<br/>— Вот, уже начинаю чувствовать ненависть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Онтология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>С: У нас по РГФ собака ходит!<br/>П: Живая?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%80%D0%B0%D0%BD%D0%B5%D1%86'>#Таранец</a> Н. А. Немецкий язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Таранец Н. А."
},{
    "quote": "<div class='pi_text'>П: Называйте мне периоды революции.<br/>С: *любой ответ*<br/>П: Нет, но молодец, что говоришь. Кто молчит, тех вообще не уважаю.<br/>С: Я не знаю.<br/>П: Молодец!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>П: Сколько осталось до конца пары?<br/>С: 5 минут!<br/>П: Вот значит, как вы любите уголовное право...<br/>С: 6 минут.<br/>П: Вот это уже другое дело! <br/><br/>Прохоров Л.А. Уголовное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA'>#юрфак</a></div>",
    "author": "Прохоров Л.А."
},{
    "quote": "<div class='pi_text zoom_text'>П: Нет ничего более пошлого и повторимого, чем неповторимость. <br/><br/>Тащиан А.А. Онтология и теория познания. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Тащиан А.А."
},{
    "quote": "<div class='pi_text'>С: Константин Владимирович, а какими будут последствия не сдачи коллоквиума?<br/>П: Ну... не переживайте, вы будете не один.<br/><br/>Малыхин К.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин К.В."
},{
    "quote": "<div class='pi_text'>П: - Могу поспорить с каждым на 10 копеек , что вы никогда не видели 2 яблока.<br/>С: - 2 яблока? Вы серьезно ?<br/>П: - Да да, и я вам это докажу.<br/>С: - Но ведь на рынке мы видим и больше двух. Или вы про глазные яблоки ?<br/>П: - Нет, про обычные съедобные. <br/>С: - Ааа, вы может про два одинаковых яблока?<br/>П: - Нее...<br/>С: - Ну так объясните.<br/>П: - Всё просто, вы видите не два яблока, а одно яблоко и другое яблоко, но не два.<br/><br/>Мороз О. Н. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>Так, Камчатка, Курильские острова и остовов Сахалин, будете болтать - мы отдадим вас Японии. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D1%80%D0%BE%D1%85%D0%BE%D1%80%D0%BE%D0%B2%D0%B0'>#Прохорова</a> М.Л. Уголовное право<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Прохорова М.Л."
},{
    "quote": "<div class='pi_text'>Преподаватель студентке: <br/>— Я три месяца смотрел в окошко, выглядывал, где мое белобрысое счастье.<br/><br/>Даниелян А. С. Юридическая техника <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text'>'Я' — место бытия, а у самого 'я' нет места, оно бездомно. Отсюда маета и тревожность, отсюда это чувство 'на измене' и экзистенциальный кризис.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text'>Учёба — это не изнасилование. Инициатива должна исходить от вас!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BE%D0%B2'>#Кузнецов</a> В.А. Бухгалтерский учёт<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кузнецов В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Могила полная. Рисуем гробик.<br/><br/>Любин В. А. Линейная алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>Я считаю, что мы равноправны, но не равны.<br/>Если женщина по своему желанию хочет взять инициативу на себя, то пожалуйста.<br/>Мужчина, как сильный пол, обязан это делать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B0'>#Павлова</a> А.В. Уравнения математической физики <br/> <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Павлова А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Сейчас система образования - это система тренировки лицемерия. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D1%81%D1%82%D1%83%D1%88%D0%B5%D0%BD%D0%BA%D0%BE'>#Пастушенко</a> Ю. Г.  <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Пастушенко Ю. Г."
},{
    "quote": "<div class='pi_text zoom_text'>Представьте, что вы мои крестьяне, вы зависите от меня. И кто рискнет не проголосовать за меня? Это перспектива бродяги...<br/><br/>Карнаушенко Л. В. История государства и права зарубежных стран <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л. В."
},{
    "quote": "<div class='pi_text'>Моя задача — вас озадачить.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B2%D0%B0'>#Большова</a> А. Ю. Деловое общение<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Большова А. Ю."
},{
    "quote": "<div class='pi_text'>Нет, я такого точно не говорил... Более того, даже если и говорил, то мне плевать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. Философия <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text zoom_text'>'Walk with the partner'... это уже всё, good bye!<br/><br/>Жандарова А.В. Практика английского языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Жандарова А.В."
},{
    "quote": "<div class='pi_text'>— Шла старушка через лес и пускала НДС!<br/><br/>Желтоносов В.М. <br/>Методология финансовой науки, <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Желтоносов В.М."
},{
    "quote": "<div class='pi_text'>Я сейчас вас отмечаю, ухожу выставлять оценки за педагогическую практику, а вы делаетесь распущенными  *[т.е. уходите]*<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D1%86%D0%B5%D0%BD%D0%BA%D0%BE'>#Куценко</a> Ф.П. Современное литературоведение в научной периодике<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Куценко Ф.П."
},{
    "quote": "<div class='pi_text'>*первая лекция первокурсников*<br/><br/>П: Кто из вас Бизнес-информатика ? <br/>*студенты поднимают руки* <br/>П: Запомните! Я - Ваш Бог, я - Ваш Царь, я - Ваше все!<br/><br/>Сидоров В.А. Общая Экономическая Теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text'>Армян — это профессия. Армянин — это национальность.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B8%D1%88%D0%BD%D1%8F%D0%BA%D0%BE%D0%B2'>#Вишняков</a> Р.Ю. Технология программирования и работы на ЭВМ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Вишняков Р.Ю."
},{
    "quote": "<div class='pi_text'>*речь шла о процессах дыхания и глотания*<br/><br/>Природа вообще придумывает что-то в эволюционном плане не на сотню миллионов лет вперёд, а то, что необходимо сейчас. Так что, через сотню миллионов лет может получиться вообще фигня какая-то.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BE%D0%B7%D1%83%D0%BB%D1%8F'>#Зозуля</a> Л.В. Физиология человека, животных и ВНД.<br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Биофак_кубгу</a></div>",
    "author": "Зозуля Л.В."
},{
    "quote": "<div class='pi_text'>* идёт перекличка *<br/><br/>П: * фамилия отчисленного студента *<br/>С: Можете его вообще вычеркнуть.<br/>П: Из жизни?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%B0%D1%82%D1%83%D1%88%D0%BD%D1%8F%D0%BA'>#Ратушняк</a> О. В. Теория и история дипломатии<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Ратушняк О. В."
},{
    "quote": "<div class='pi_text'>*за окном раздается звук бьющихся стекол*<br/>- Предлагаю забить на лекцию и пойти посмотреть, что там происходит.<br/><br/>Выскубов Е.В. Архитектура вычислительных систем. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Выскубов Е.В."
},{
    "quote": "<div class='pi_text'>*дверь открылась сквозняком*<br/>Нас подслушивают!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Зарубежная литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Нифига себе вы умные! <br/><br/>Шульженко М. Ю. Практика перевода основного иностранного языка. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Шульженко М. Ю."
},{
    "quote": "<div class='pi_text'>*написал на доске греческую букву Ѡ*<br/>- Это не попа, а омега!<br/><br/>Щеколдин Г.А. Доп. главы по физике. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>Вас всегда могут спросить: зачем вы это процитировали. Но на этот вопрос есть универсальный ответ: а какое ваше собачье дело?<br/><br/>Осташевский А.В., практическая журналистика. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>П - Что вы шепчете там? Молитвы какие-то?<br/>С - Да... Спаси и сохрани... <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D0%B4%D1%8B%D0%B3%D0%B5%D0%B7%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0'>#Адыгезалова</a> Г.Э. Юридическая конфликтология <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Адыгезалова Г.Э."
},{
    "quote": "<div class='pi_text zoom_text'>Лицо может быть опознано по фотоснимку, видеокадру, с натуры... с маленькой буквы.<br/><br/>Натура А.И. Криминалистика <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Натура А.И."
},{
    "quote": "<div class='pi_text zoom_text'>Сейчас я вас буду учить плохому, хорошему вы сами научитесь. <br/><br/>Осташевский А.В. , правовая журналистика, <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>* 2006 год, наушник прилип к губе *<br/>Молодой человек, вы слишком много в рот берете.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%82%D1%8E%D1%89%D0%B5%D0%BD%D0%BA%D0%BE'>#Матющенко</a> П. П. История России <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Матющенко П. П."
},{
    "quote": "<div class='pi_text'>*о современной архитектуре церквей по старинным образцам*<br/>Если они строят не модненько, а аутентичненько, то пожалуйста!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B9%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Сайченко</a> В.В. Основы отечественной художественной культуры <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Сайченко В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Скоро я привыкну, что складывать числа - это большой успех!<br/><br/>Тен О.К. Топология <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О.К."
},{
    "quote": "<div class='pi_text'>- Чего хотела Медея? Ну?!<br/>- Интима.<br/>- Не хотела она интима! Какого интима? Точнее!<br/>- Половых отношений с мужчиной.<br/>- Этот ваш разврат оставьте за дверью. Я еще раз спрашиваю вас!<br/>- Секса она хотела!<br/>- Да! Именно! Правильно!<br/><br/> Мороз О.Н. ' История античной литературы' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>А что хорошего в том, что вы родились? Вы думаете, кому-то было бы хуже, если бы вы не родились?<br/><br/>Мороз О. Н.  История античной литературы <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>— Оно будет нас интересовать посколько-постольку, а точнее — никак!<br/><br/>Тен О. К. Дифференциальная геометрия и топология <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>*В аудитории шумно *<br/>- Можно потише? Если вам это не надо, идите в столовку... или к чёрту. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я. В. Математика и статистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я. В."
},{
    "quote": "<div class='pi_text'>Любви не существовало до 1730 года.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Доклассическая словесность в медиа<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Малахов - это не пуп земли. Это Андрюша. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A3%D1%82%D0%BA%D0%BE%D0%B2'>#Утков</a> Г. Н. Современный русский язык <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г. Н."
},{
    "quote": "<div class='pi_text'>Кто не воскресит Максимку (манекен), зачета не получит!<br/><br/>Эртель Л.А. Специальная подготовка- доврачебная помощь<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Эртель Л.А."
},{
    "quote": "<div class='pi_text'>П: -Слезьте со стола, нельзя на нем сидеть.<br/>С: -А облокачиваться можно?<br/>П: -Ну если есть чем, то можно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Марковский</a> А. Н <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Марковский А. Н"
},{
    "quote": "<div class='pi_text zoom_text'>У тебя все задатки шизофреника.<br/><br/>Кравченко Г.Г. Академическая живопись <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Кравченко Г.Г."
},{
    "quote": "<div class='pi_text zoom_text'>Мужчину можно выбрать по интернету, и то его нужно на себя померять. И это доставляет удовольствие.<br/><br/>Рябикина З.И. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Рябикина З.И."
},{
    "quote": "<div class='pi_text'>Культура — это уход... Нет, не в смысле уход с пар, а уход, возделывание, обработка...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С. Н. Культурология<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шаповалов С. Н."
},{
    "quote": "<div class='pi_text'>*преподаватель показывает иллюстрацию из сборника'<br/><br/>-Смотрите, бабушка злая и грибы соответствующие.. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%80%D1%82%D1%8B%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE'>#Мартыненко</a> Л.Б. Устное народное поэтическое творчество <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Мартыненко Л.Б."
},{
    "quote": "<div class='pi_text'>* Не все студенты отправили сочинения. *<br/><br/>Я ещё не проверяла свою почту, поэтому у вас есть шанс меня обмануть. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%BE%D0%BC%D0%B8%D0%BD%D0%B8%D0%BD%D0%B0'>#Ломинина</a> З. И. Практический курс немецкого языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Ломинина З. И."
},{
    "quote": "<div class='pi_text'>Там, где появляется женщина, не может быть другого конфликта.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>— Теорема о среднем ... Слышали 'Песню о встречном'? Я бы спел, но надо успеть с темой.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Я конечно же ничего не имею против других национальностей. Ну, кроме Собчак.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D1%80%D0%BC%D0%BE%D0%B4%D0%B5%D1%85%D0%B8%D0%BD%D0%B0'>#Дармодехина</a> А.Н. Теория перевода <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Собчак.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D1%80%D0%BC%D0%BE%D0%B4%D0%B5%D1%85%D0%B8%D0%BD%D0%B0'>#Дармодехина</a> А.Н."
},{
    "quote": "<div class='pi_text'>Двоек не ставлю, но обаятельно улыбаюсь.<br/><br/>Утков Г. Н. Современный русский язык.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г. Н."
},{
    "quote": "<div class='pi_text'>С: Если мне не изменяет память...<br/>П: Главное, чтобы по жизни вам изменяла только память.<br/><br/>Даниелян А.С. 'Римское право' <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Что ты там за вибрушку запустила?<br/><br/>Николов М.С. Электричество <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Николов М.С."
},{
    "quote": "<div class='pi_text'>Проблема нашего предмета в том, что мы пытаемся залезть в голову к богу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B2%D0%B0'>#Болотова</a> Е. А. Философия религии<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Болотова Е. А."
},{
    "quote": "<div class='pi_text zoom_text'>У меня вечно что-то пропадает... Обычно я виню в этом студентов. <br/><br/>Касьянов В. В. Культурология <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Касьянов В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Вот люди перестали бояться ада, а следовало бы! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0'>#Татаринова</a> Л.Н. Литература стран изучаемых языков <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Татаринова Л.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Бог дал нам конъюнкцию, дизъюнкцию и отрицание! Все остальное от Лукавого...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F'>#Добровольская</a> Н. Ю. Основы программирования <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Добровольская Н. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Итак, господа присяжные заседатели! <br/><br/>Ювко М. А. Теория государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Ювко М. А."
},{
    "quote": "<div class='pi_text'>* Преподаватель разговаривает с очень амбициозным студентом *<br/><br/>Какие тебе нахрен микропроцессоры программировать? Ты наше оборудование видел? Вот тебе колба, пробирка, банка, бутылка. Иди работай.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D0%B7%D1%8C%D0%BA%D0%BE'>#Бузько</a> В. Ю. Физика наноразмерных систем<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Бузько В. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Из 10 физиков только 1 физик -экспериментатор, остальные 9 - теоретики, чьи руки предназначены только чтобы писать и обниматься. <br/><br/>Савченко В.Ф. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Савченко В.Ф."
},{
    "quote": "<div class='pi_text'>П: Ну и? Что Люций делал в этом доме?<br/>С: Ну, хозяйка перепутала мази и обратила его в осла.<br/>П: Ну и?<br/>С: Он там ещё плотским утехам предавался.<br/>П: А вот это уже интересно.<br/><br/>Мороз О.Н. Античная литература <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Если вы бука, то это вас так воспитали, и вы уже ничего не измените.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Леванова</a> К. А. Всеобщая история<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Леванова К. А."
},{
    "quote": "<div class='pi_text'>Я в таком случае мягко посылаю. Так мягко, что они отпадают как осенние листья. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. История зарубежной литературы Средних веков и эпохи Возрождения <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>Мужчина подаст руку женщине при выходе из транспорта, так она придёт в шок. А виноват в этом кто? Вы, женщины, и виноваты. Мужчине нужно давать возможность быть мужчиной.<br/><br/>Чалый В.В. Русский язык и культура речи.  <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Чалый В.В."
},{
    "quote": "<div class='pi_text'>Что такое красота? Конь красивый, девушка красивая. А чем конь похож на девушку?<br/><br/>Кожевников С.Б. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Кожевников С.Б."
},{
    "quote": "<div class='pi_text zoom_text'>Сейчас и в Сибири всё есть, вся инфраструктура, интернет и так далее. Так какой тогда смысл гонять порожняки туда-сюда, спрашивается?<br/><br/>Огородникова Н.В. Зарубежное Уголовное Право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Огородникова Н.В."
},{
    "quote": "<div class='pi_text zoom_text'>Я не могу объяснить ход своих мыслей, но это вот так вот...<br/><br/>Боровик О.Г. Алгебра и аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Боровик О.Г."
},{
    "quote": "<div class='pi_text'>Это С++, здесь возможно всё!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F'>#Добровольская</a> Н. Ю. Основы программирования.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Добровольская Н. Ю."
},{
    "quote": "<div class='pi_text'>Птички поют, студенты опаздывают.<br/><br/>Утков Г. Н. Современный русский язык.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г. Н."
},{
    "quote": "<div class='pi_text'>Так как я властелин ... хм. Чего? <br/>Ах да - всего!<br/><br/>Гаркуша О.В. <br/>Языки Программирования . <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Гаркуша О.В."
},{
    "quote": "<div class='pi_text'>П: То есть, ты хочешь самозачет?<br/>С: *кивает*<br/>П: А ничего там не треснет у тебя?<br/><br/>Узлов Ю.А. История Кубани <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>Фиолетовая прослойка общества. (о прогуливающих студентах)<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Методы решения физических задач<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>Тамерлан очень ценил философов, преподавателей, строителей и ювелиров. Я ведь строителем работал и философию преподавал. Вот говорю своей жене, когда она на меня нападает: 'Меня бы даже Тамерлан не тронул, а ты...'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>*Речь идёт о ссылках с одного сайта на другой и обратно*<br/>— Не в обиду пользователю, но мы, так сказать, пустим его по кругу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B8%D0%BA%D1%83%D0%BB%D0%B8%D0%BD'>#Никулин</a> И. О. Брэндинг <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Никулин И. О."
},{
    "quote": "<div class='pi_text'>- Ставьте четыре.<br/>- Серьезно? Может, на экзамен?<br/>- А что я там делать буду?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%8B%D1%87%D0%BA%D0%BE%D0%B2'>#Бычков</a> С. С.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Бычков С. С."
},{
    "quote": "<div class='pi_text zoom_text'>Кто разместился — остались, все остальные рассосались по факультету!<br/><br/>Ефименко Л. А. Конституционное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ефименко Л. А."
},{
    "quote": "<div class='pi_text'>Ну то есть, если вы найдёте кошку, вырвите ей усы... Садисты... Тогда этот предикат будет истинен.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В. Фундаментальные дискретные модели<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Экономисты от сохи.<br/><br/>Костецкий А.Н.  Маркетинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Костецкий А.Н."
},{
    "quote": "<div class='pi_text'>П: Как называется этот представитель плоских червей? <br/>С: Нематода! <br/>П: Сам ты Нематода! <br/><br/>Морева Л.Я. Зоология <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Морева Л.Я."
},{
    "quote": "<div class='pi_text zoom_text'>Красавица, весна пришла! А значит надо строить скворечники и заниматься любовью!<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>*идет лекция*<br/>С: Повторите, пожалуйста.<br/>А: Откуда повторить? Со слова «здравствуйте»?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D1%87%D0%B8%D0%BD%D0%BE%D0%BA'>#Починок</a> Т.Б Аналитическая химия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Починок Т.Б"
},{
    "quote": "<div class='pi_text'>С: А мы работаем на баллы или на оценки?<br/>П: На выживание.<br/><br/>Маркосян Г.А. 'Информационные технологии в юридической деятельности'<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Маркосян Г.А."
},{
    "quote": "<div class='pi_text'>Если появляются розы без шипов, а тигры начинают дружить с козлами, то близок конец света.<br/><br/>Кожевников В.В. Математический анализ <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кожевников В.В."
},{
    "quote": "<div class='pi_text'>С: Это что?<br/>П: Стол.<br/>С: А стол это что?<br/>П: Стол это...<br/>С: Ага, дай определение столу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С.В. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Стол.<br/>С: А стол это что?<br/>П: Стол это...<br/>С: Ага, дай определение столу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С.В."
},{
    "quote": "<div class='pi_text'>П: Пишем эссе на тему 'Предупреждение профессиональной и рецедивной преступности<br/>С: А много писать?<br/>П: Пишите все мысли, которые у вас есть по этому вопросу. Вы вообще можете написать: 'Отстань'...<br/>С: А какая тогда будет оценка?<br/>П: * улыбается *<br/><br/>Петровский А. В. Криминология <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Петровский А. В."
},{
    "quote": "<div class='pi_text'>*приоткрыл дверь, заглянул в аудиторию*<br/>П: - Вы здесь?<br/>С: - Да.<br/>*с испуганными глазами захлопнул дверь*<br/><br/>Спасов С. В. Античная философия <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>Не всегда, но часто бывает иногда.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2'>#Рубцов</a> С. Е. Физика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Рубцов С. Е."
},{
    "quote": "<div class='pi_text'>Современный человек эгоистичен, поэтому нет у него эпического начала в поэзии.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>*рисует бессистемные каракули* <br/>- Внимание, мозги журналиста. Точки - это знания.<br/><br/>А.В.Осташевский, правовая журналистика, <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>Запомните, что география - королева  наук!<br/><br/>Жирма В.В. , физ.география России и ближнего Зарубежья<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text zoom_text'>- В классическом или строгом сонете ни одно слово не должно повторяться. Пам-пам! Кто об этом знал? Никто! А я знаю!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%BE'>#Головко</a> В.А. Основы теории литературы. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Головко В.А."
},{
    "quote": "<div class='pi_text'>Как мне нравится наша природа!<br/>Смотришь – 'почти море'; горизонт далеко!<br/>Кому нужен горизонт, который близко?! <br/>Это не горизонт – это уже бордюр!!<br/><br/>Жирма В.В. , физ.география России и ближнего Зарубежья<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text'>Итак, неравенство Бернулли... Пишется 'Б', с двумя 'л'... Нет, не 'Вернули', потому что не понравилось или размер не подошел, а Бернулли.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A6%D0%B0%D0%BB%D1%8E%D0%BA'>#Цалюк</a> М. В. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Бернулли.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A6%D0%B0%D0%BB%D1%8E%D0%BA'>#Цалюк</a> М. В."
},{
    "quote": "<div class='pi_text'>- И таким образом мы понимаем,что в языке не все так просто и даже определить одушевлен ли предмет иногда довольно затруднительно, но возможно. Например, борщ, мы все понимаем, что он неодушевлен, но вы все-таки прислушайтесь, может он дышит? <br/><br/>Шемелева Т.В. Современный русский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D0%A4%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФилФак_КубГУ</a></div>",
    "author": "Шемелева Т.В."
},{
    "quote": "<div class='pi_text'>*проверка домашнего задания*<br/><br/>П: Ты видишь там à?<br/>С: Нет.<br/>П: Ну так чего орешь?!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D1%80%D0%B5%D1%82%D1%8C%D1%8F%D0%BA%D0%BE%D0%B2%D0%B0'>#Третьякова</a> Г.А. Французский язык. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Нет.<br/>П: Ну так чего орешь?!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D1%80%D0%B5%D1%82%D1%8C%D1%8F%D0%BA%D0%BE%D0%B2%D0%B0'>#Третьякова</a> Г.А."
},{
    "quote": "<div class='pi_text'>— Как садовнику нарисовать эллипс?<br/>— Сначала коробочку нарисовать.<br/>— Да коробочка это для нас — колхозников.<br/>...<br/>— А гиперболу? Пишем дз: 'Как построить гиперболу с помощью веревочки?'<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>Как Бог на сердце положит.<br/><br/>Литус Е.В. Заведующая кафедры русской и зарубежной филологии <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Литус Е.В."
},{
    "quote": "<div class='pi_text zoom_text'>Сергий Радонежский - он для нас глыба. Он первый из церковных деятелей, который сказал что можно убивать... Убивать за Родину.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Родину.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И."
},{
    "quote": "<div class='pi_text zoom_text'>Мы все с вами в некоторой степени азиаты. Вы. Не я.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Дискретная математика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФКТиПМ_КубГу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Ни у кого в гороскопе не написано, что он сегодня умрёт. Но с большинством людей это все таки происходит.<br/><br/>Шувалов С. С. Теория и практика массовой информации <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text zoom_text'>Сразу вас обрадую, что дело закончится экзаменом.<br/><br/>Томилов А.Б. Возрастная анатомия и физиология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Томилов А.Б."
},{
    "quote": "<div class='pi_text'>- Кто-нибудь помнит продолжение?<br/>- ...<br/>- У вас очищение кэша после сессии?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В. Основы космологии<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Телефон надо отключать и убирать и тогда вы не будете знать, что вам звонят.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B8%D1%82%D1%83%D1%81'>#Литус</a> Е.В. Актуальные проблемы изучения грамматики <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Литус Е.В."
},{
    "quote": "<div class='pi_text'>Стоит пользоваться алгебраической нормальной формой, чтобы человек где-нибудь в Китае понял, как компьютерную плату собирать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%BA'>#Жук</a> А. С. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Жук А. С."
},{
    "quote": "<div class='pi_text'>Нет уравнения — нет проблем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D1%83%D0%B1%D1%8B%D1%80%D1%8C'>#Чубырь</a> Н. О. Дифференциальные уравнения<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Чубырь Н. О."
},{
    "quote": "<div class='pi_text'>Контакт шатается в дупле,как карандаш в ведре.<br/><br/>Николов М.С Электричество<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Николов М.С"
},{
    "quote": "<div class='pi_text'>У вас, химиков, хорошо! Там H2O, картошечка всегда варёная получается...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В.И. История России <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%85%D0%B8%D0%B2%D1%82_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фхивт_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>* Про филологов. *<br/><br/>Мы же подвержены разным... Разным подвержены.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Введение в филологию<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>* Про кафедру социологии. * <br/> <br/>Вы же понимаете, что здесь половина под социологов только косит? <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D0%B6%D0%B8%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0'>#Тажидинова</a> И. Г. Социология культуры <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Тажидинова И. Г."
},{
    "quote": "<div class='pi_text'>С: Бежевый сейчас в моде.<br/>П: Это чтобы одеться в него и ходить будто голенький? <br/>С: Нет.<br/>П: Одежда на самом деле ничего не скрывает. Все мы тут голенькие. Лицемерные. И голенькие. <br/><br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Нет.<br/>П: Одежда на самом деле ничего не скрывает. Все мы тут голенькие. Лицемерные. И голенькие. <br/><br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н."
},{
    "quote": "<div class='pi_text'>С:*хором* Здравствуйте.<br/>П: Здравствуйте, существа.<br/><br/>Спасов. С. В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Спасов. С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Не то что бы вы тусуетесь, но каждый раз начинается какое-то дефиле по аудитории. <br/><br/>Факторович А.Л. 'Концепция Современного Естествознания' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Факторович А.Л."
},{
    "quote": "<div class='pi_text'>* студент с заднего ряда громко открывает газировку *<br/><br/>П: О, пиво пошло! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8B%D1%81%D0%B5%D0%BD%D0%BA%D0%BE'>#Лысенко</a> В. Е. Атомная физика <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Лысенко В. Е."
},{
    "quote": "<div class='pi_text'>* Говорит о недостатке матриц смежности, показывая их избыточность. Для наглядности рассчитывает процент полезной информации, не может выбрать между 0.04% и 0.004%. *<br/><br/>Сколько будет 1000 умножить на 1000? Миллион? Я не знаю.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>- Телефон на экзамене асимптотически стремится к 'до свидания'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B2%D0%B8%D0%BD'>#Савин</a> В. Н. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Савин В. Н."
},{
    "quote": "<div class='pi_text'>Главное — найти к каждому студенту подход. Найти, а потом заминировать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2'>#Половодов</a> Ю. А. Физический практикум <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Половодов Ю. А."
},{
    "quote": "<div class='pi_text'>Нам это не нужно, но мы это получили.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>Планы должны быть реалистичными, а вот мечты - заоблачными!<br/><br/>Жирма В.В. методы географических исследований<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text'>Самое интересное время в английском языке - Past Perfect. Мои студенты называют его 'past пофиг', потому что ему пофиг, где, когда, с кем... Ему, как рогатому мужу, главное знать - было или не было.<br/><br/>Савельева О.Г. Английский язык <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Савельева О.Г."
},{
    "quote": "<div class='pi_text'>П: Готовьтесь! <br/>С: Это что значит? <br/>П: Хорошо. 10 вопросов вычеркните и готовьтесь! <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D1%83%D1%85%D0%B0%D1%80%D0%B5%D0%B2%D0%B0'>#Пухарева</a> Т.С. Основы психологии <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Пухарева Т.С."
},{
    "quote": "<div class='pi_text'>* Разговор о психоанализе по Фрейду. *<br/><br/>Если я говорю, что я люблю пельмени, то это к удовольствию. Если я говорю, что я люблю жену, то это к чувствам. А, если я говорю, что люблю их одинаково, то это уже трагедия.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%B0%D0%B3%D1%83%D1%80%D0%BE%D0%B2'>#Хагуров</a> Т. А.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Хагуров Т. А."
},{
    "quote": "<div class='pi_text'>Человек усваивает информацию на 95%, когда объясняет ее сам. Так что не будем скрывать, совершенствуюсь сегодня я, а не вы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D1%81%D1%82%D0%B0%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE'>#Остапенко</a> А. А. Педагогика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Остапенко А. А."
},{
    "quote": "<div class='pi_text zoom_text'>Я злой дядька!<br/><br/>Гайдуков В.Г. Практ.курс английского языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ргф_КубГУ</a></div>",
    "author": "Гайдуков В.Г."
},{
    "quote": "<div class='pi_text'>* о чрезмерном употреблении 'типа' в ответе студента*<br/>Так, без 'типа', журналистики любимые мои. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С. Н. История России<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шаповалов С. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Если и писать аналитическую статью, то качественно, а не листиками осенними шуршать.<br/><br/>Денисов В.Л. Аналитическая журналистика. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Денисов В.Л."
},{
    "quote": "<div class='pi_text'>Пожилой человек заходит в продуктовый магазин и произносит: 'Здравствуйте, дорогие мои продукты!'. И вкладывает он в это особый, для себя, пенсионера, смысл. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D0%B0%D0%BB%D1%8B%D0%B9'>#Чалый</a> В. В. Русский язык и культура речи <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Молодые, ещё по-русски не мыслите...<br/><br/>Осташевский А.В. Правовые основы журналистики <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>Думаем, думаем! Я верю, что у вас в голове не одна лишь труха.<br/><br/>Мороз О.Н. 'Русская литература 18 века'<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Курица египетская.<br/><br/>Бурмистрова С.В. Рисунок. <a data-link='/feed?section=search&amp;q=%23%D1%85%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#хгф_кубгу</a></div>",
    "author": "Бурмистрова С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Сделала курсовую? А мы что, летом не увидимся? <br/><br/>Ажгихин С.Г. Проектирование. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Ажгихин С.Г."
},{
    "quote": "<div class='pi_text zoom_text'>Вы, юристы, должны  руководствоваться особыми  методами  мышления. Вы как маги в Гарри Поттере- отличаетесь от маглов.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С.В. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Гарин С.В."
},{
    "quote": "<div class='pi_text'>Мира ещё нет, а Россия уже сотворена!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%B2'>#Бараков</a> В. Н. Тенденции развития современной периодики<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Бараков В. Н."
},{
    "quote": "<div class='pi_text'>Написано же: 'Для канцелярских отходов'. А не для ваших бутылок, жвачек и прочего. Там если покопаться можно всё что угодно найти... Хотел сказать что, но не стал<img alt='😄' class='emoji' src='/emoji/e/f09f9884.png'/><img alt='🔞' class='emoji' src='/emoji/e/f09f949e.png'/><br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <br/><a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D0%A3%D0%91%D0%93%D0%A3'>#Эконом_КУБГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>Не надо думать. Надо делать. Думать — это вредно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%BC%D0%BF%D0%B0%D0%BD'>#Кумпан</a> В. А. История международных отношений <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Кумпан В. А."
},{
    "quote": "<div class='pi_text'>Я категорически не согласен, точнее, меня откровенно бесит, когда криминалистику называют прикладной наукой. Ну скажите, к какому месту вы её прикладывать собрались, а?! <br/><br/>Натура А.И. Криминалистика <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Натура А.И."
},{
    "quote": "<div class='pi_text'>С: У нас созрел вопрос: автоматы будут?<br/>П: А что, у кого-то есть желание встать к стенке?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С.В. Античная философия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>Сейчас медицина всё лечит, кроме безответной любви.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B7%D0%B8%D0%B4%D0%B7%D0%BE%D0%B5%D0%B2'>#Дзидзоев</a> Р. М. Конституционное право зарубежных стран<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Дзидзоев Р. М."
},{
    "quote": "<div class='pi_text'>Кто споёт песню про уголовный кодекс, оценка будет лучше!<br/><br/>Прохоров Л.А. Уголовное право<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Прохоров Л.А."
},{
    "quote": "<div class='pi_text zoom_text'>Когда я был молодым и у меня не было джакузи...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%82%D1%83%D1%80%D0%B1%D0%B0'>#Штурба</a> Е. В.</div>",
    "author": "Штурба Е. В."
},{
    "quote": "<div class='pi_text'>*рисует кружки на доске* <br/>Сдох во мне живописец нерадивый, правда так и не родившись<br/><br/>Утков Г. Н. 'Стилистика и литературное редактирование' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Что значит «Платон придумал»? Верить ему на слово теперь, что ли? Вы — философы, и теперь вы должны отвечать за Платона, Евклида и всю компанию...<br/><br/>Спасов С. В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Англия до сих пор не знает о смесителях. У них один кран для холодной воды, другой для горячей. Как барсучок - не получится ручками соединить эти две струйки...<img alt='😅' class='emoji' src='/emoji/e/f09f9885.png'/><br/><br/>Ювко М.А. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>В 18-м веке тот, у кого не было любовницы или любовника, был лох. <br/><br/>Мороз О.Н. История русской литературы XVIII века<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>*рассказывает о Курильских островах*<br/>Можете в интернете вбить 'остров Кунашир', посмотрите, где я служил. Вообще это закрытая информация, но ФСБ вами не заинтересуется, Владимир Иваныч разрешил.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>Простота — свидетельство большого ума. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>- Вы не будете читать Гегеля. <br/>- Но почему так критично? А вдруг?<br/>- Не будете. Не знаю почему, но потому. <br/><br/>Мороз О.Н. 'Социология чтения'. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>- Я не могу находиться в нескольких местах одновременно.<br/>- Я же не могу разорваться на кучу маленьких Галутв.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D0%BB%D1%83%D1%82%D0%B2%D0%BE'>#Галутво</a> Л. М. Введение в профессию<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Галутв.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D0%BB%D1%83%D1%82%D0%B2%D0%BE'>#Галутво</a> Л. М."
},{
    "quote": "<div class='pi_text'>У Цветаевой Добрыня туповат в эмоциональном отношении.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%80%D1%82%D1%8B%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE'>#Мартыненко</a> Л. Б. Региональная литература и фольклор <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Мартыненко Л. Б."
},{
    "quote": "<div class='pi_text zoom_text'>Творчество - страшная сила, как женщина. Никуда от него не денешься.<br/><br/>Осташевский А.В., правовые основы журналистики <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>* студент заходит в аудиторию и не замечает преподавателя *<br/>С: А Полупанова здесь была?<br/>П: Она ещё здесь и у неё перерыв!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BB%D1%83%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Полупанова</a> Е. Е.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Полупанова Е. Е."
},{
    "quote": "<div class='pi_text'>Людям прикольно делать плохое другим. И я с удовольствием это делаю.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Газпром, роснефть - это все жалкие нищенки перед тетра паком. Это спрут, который охватил весь мир - везде они.<br/><br/>Желтоносов В.М. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Желтоносов В.М."
},{
    "quote": "<div class='pi_text'>П: 'Руслан и Людмила' — это что за жанр?<br/>С: Ну, это точно произведение...<br/>П: Ага, и точно Пушкина, да?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Молдованова</a> Л. И. Русский язык и культура речи <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Молдованова Л. И."
},{
    "quote": "<div class='pi_text'>*кто-то из студентов разговаривает по телефону, слышен голос из трубки* <br/>П: Откуда эти божественные голоса?<br/><br/>Чумаков С.Н. История мировой зарубежной литературы <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>*студенты слушают лекцию*<br/>Вы успеваете? В смысле слушать<img alt='😹' class='emoji' src='/emoji/e/f09f98b9.png'/><br/><br/>Болтуц О.А. История отечественной журналистики <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Болтуц О.А."
},{
    "quote": "<div class='pi_text'>С: Krakow is the capital of Poland...<br/>П: Ну, это сразу на костёр Вас...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BD%D0%B4%D1%80%D0%B0%D1%82%D1%8C%D0%B5%D0%B2%D0%B0'>#Кондратьева</a> Т.С. Английский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Кондратьева Т.С."
},{
    "quote": "<div class='pi_text'>Эту теорему я нашёл в книжке для шестиклассников. Не знаю, какими должны были быть школьники, но с теоремой разбирался я долго.<br/><br/>Костенко К.И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>Флора — это что? Правильно, совокупность животного и растительного мира. А ещё фея винкс, как сказали мне первокурсники. Но лично я люблю Музу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. Логика и теория аргументации<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Музу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И."
},{
    "quote": "<div class='pi_text zoom_text'>Если мы не предпримем меры, быстро кирдык настанет клиенту. <br/><br/>Эртель Л.А. Специальная Подготовка <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Эртель Л.А."
},{
    "quote": "<div class='pi_text'>*староста группы мило беседовала с соседом по парте*<br/>П: Староста, прекрати болтать, а то я тебя укушу и ты станешь такой же лысой, толстой и старой как я, а ещё и сексисткой!<br/><br/>Штурба Е.В.Социология.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Штурба Е.В."
},{
    "quote": "<div class='pi_text zoom_text'>Ну же думайте. Вы же Homo sapiens.<br/><br/>Мавроди Н.Н. Математический анализ. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н.Н."
},{
    "quote": "<div class='pi_text'>* Студент рассказывает доклад. *<br/><br/>П: - Вы как-то начали издалека.<br/>С: - Ну, это чтобы подойти поближе. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B5%D1%80%D0%B3%D0%B8%D0%B5%D0%BD%D0%BA%D0%BE'>#Сергиенко</a> В. С. История России<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Сергиенко В. С."
},{
    "quote": "<div class='pi_text'>Мужчину делает мужчиной мужчина.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BB%D0%B8%D0%BC%D0%B5%D1%86'>#Климец</a> А. А.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Климец А. А."
},{
    "quote": "<div class='pi_text zoom_text'>Выбор направления движения это дело, так сказать, сугубо личное.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2'>#Рубцов</a> С.Е. Физика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Рубцов С.Е."
},{
    "quote": "<div class='pi_text zoom_text'>Сидоров был, есть и будет!<br/><br/>Сидоров В.А, экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А"
},{
    "quote": "<div class='pi_text'>- Сказать, что плохо контрольную работу написали... Да нет, не плохо, а очень ужасно написали!<br/> <br/>Кособуцкая Е.В. Дискретная математика. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Кособуцкая Е.В."
},{
    "quote": "<div class='pi_text'>Акция: покупаешь три — берешь две.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B8%D1%82%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>#Литвинский</a> К. О. Микроэкономика<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Литвинский К. О."
},{
    "quote": "<div class='pi_text'>...но такое определение логики содержит в себе логическую ошибку.  У вас же логики нет и не предвидится.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С.И.<br/>Философия <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Змихновский С.И."
},{
    "quote": "<div class='pi_text zoom_text'>Не смотрели лекцию, ну и давайте не будем смотреть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D1%80%D0%B5%D0%B3%D1%83%D0%B1%D0%BE%D0%B2%D0%B0'>#Трегубова</a> Е.Н. История русского литературного языка. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Трегубова Е.Н."
},{
    "quote": "<div class='pi_text'>С: Все ничтожно вообще.<br/>П: Не надо нервничать!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А.А. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Тащиан А.А."
},{
    "quote": "<div class='pi_text'>* Нашёл у себя ошибку. *<br/><br/>Ну вот. Видите? Это я не думал особо и сделал ошибку. А когда я уже более углублённо вдумался, то обнаружил её. В этом смысле я не ошибаюсь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>*разговор о вреде алкоголя на организм*<br/>Ведь эволюционно не запланировано, что человек будет закидываться таким большим количеством этилового спирта. <br/><br/>Зозуля Л.В. Возрастная анатомия, физиология и гигиена, <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_Кубгу</a></div>",
    "author": "Зозуля Л.В."
},{
    "quote": "<div class='pi_text zoom_text'>Ну вот, что такое 'сексуальный партнёр'?? Муж - понятно. Человек, с которым занимаюсь сексом - тоже понятно. Но что значит 'партнёр'?!<br/><br/>Босенко М.В. Психология, <a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%B1%D0%93%D0%A3_%D0%A0%D0%93%D0%A4'>#КубГУ_РГФ</a></div>",
    "author": "Босенко М.В."
},{
    "quote": "<div class='pi_text'>С: Нам уже можно подбирать аналоги, смотреть стилистику будущего интерьера? <br/>П: Зачем так сложно? Вы же можете просто сесть на дракона и полететь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D0%B6%D0%B3%D0%B8%D1%85%D0%B8%D0%BD'>#Ажгихин</a> С. Г. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Ажгихин С. Г."
},{
    "quote": "<div class='pi_text zoom_text'>Надо жить по понятиям.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я.В. Информатика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я.В."
},{
    "quote": "<div class='pi_text'>* Студент спрашивает у преподавателя *<br/>- Вы случайно не этот университет оканчивали?<br/>- Этот. Именно поэтому я и не работаю в IBM.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8B%D1%81%D0%B5%D0%BD%D0%BA%D0%BE'>#Лысенко</a> В. Е. Алгоритмизация и программирование<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Лысенко В. Е."
},{
    "quote": "<div class='pi_text zoom_text'>Что это там у вас вибрирует? (телефон) Вам приятно? А мне нет.<br/><br/>Яременко Л.А. ' Математический анализ' <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Яременко Л.А."
},{
    "quote": "<div class='pi_text'>Кто? Я не люблю людей? Эх, хорошо, что вы не сказали, что я не люблю мужчин.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D0%B2%D0%B0%D0%BD%D0%B5%D1%81%D1%8F%D0%BD'>#Аванесян</a> А. А. Теория и история государства и права<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Аванесян А. А."
},{
    "quote": "<div class='pi_text zoom_text'>Странный народ эти девушки! Им не говоришь, а они думают!<br/><br/>Даниелян А.С. ТГП <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text'>*студентка читает очень большой доклад и продолжает*<br/><br/>С: А теперь ход австро-прусской войны.<br/>П: Не надо! Нафига?<br/>С: Ладно, результаты войны.<br/><br/>Евтушенко А. С. Всеобщая история<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Евтушенко А. С."
},{
    "quote": "<div class='pi_text zoom_text'>Полина, мы - РГФ, мы не умеем считать!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D1%80%D0%B8%D0%BC%D0%B0'>#Прима</a> А. М. Английский язык <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Прима А. М."
},{
    "quote": "<div class='pi_text zoom_text'>Ничто не учит лучше боли.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B2%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Свитенко</a> Н. В. Русская литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Свитенко Н. В."
},{
    "quote": "<div class='pi_text'>У каждой девушки бывает момент, когда она опаздывает на первую пару.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%B0%D0%B1%D0%BB%D1%8E%D0%BA'>#Хаблюк</a> В. В. Биохимия <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Хаблюк В. В."
},{
    "quote": "<div class='pi_text zoom_text'>— Мы будем обозначать систему тремя буквами, но не теми, которые на заборе пишут.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A6%D0%B0%D0%BB%D1%8E%D0%BA'>#Цалюк</a> М. В. Функциональный анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Цалюк М. В."
},{
    "quote": "<div class='pi_text'>* Разговор о детской литературе. *<br/><br/>Въехать в фантастический контент.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B2%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Свитенко</a> Н. В. <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Свитенко Н. В."
},{
    "quote": "<div class='pi_text zoom_text'>Вот на других факультетах студенты меня очень внимательно слушают, а вас уже перекормили математикой.<br/><br/>Сергеев Э. А. Алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сергеев Э. А."
},{
    "quote": "<div class='pi_text'>Фросю знаете? Знаменитая уборщица. Главный человек на факультете.<br/><br/>Чумаков С.Н. Античная литература<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>Почему я так написал, как я написал?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%BA%D0%BE%D0%B2'>#Жуков</a> С. А. Моделирование взаимодействующих систем<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Жуков С. А."
},{
    "quote": "<div class='pi_text'>Люблю латинскую букву 'хи', особенно в квадрате. Получается 'хи-хи'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>П: Кто научил вас так определять простоту числа? Есть маркер?<br/>С: Нет.<br/>П: Так вам и надо!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В. Программирование на С++<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Нет.<br/>П: Так вам и надо!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В."
},{
    "quote": "<div class='pi_text'>Посылаю вас на 3 буквы — www.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%B6%D0%B0'>#Жужа</a> М. А. Молекулярна физика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Жужа М. А."
},{
    "quote": "<div class='pi_text zoom_text'>Да нет у нас при себе договора, и не будет... Хоть переобуйтесь здесь!<br/><br/>Короткий Ф.В. Арбитражный Процесс <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Короткий Ф.В."
},{
    "quote": "<div class='pi_text'>* Студент сделал ошибку в переводе предложения. *<br/><br/>П: - Чего молчишь?<br/>С: - Я Вас боюсь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BA%D0%BE%D0%B2%D0%B0'>#Сидоркова</a> Г. Д. Практический курс второго иностранного языка.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Сидоркова Г. Д."
},{
    "quote": "<div class='pi_text'>До появления интернета, студенты все время проводили в библиотеках: они там учились, встречались и женились.<br/><br/>Тарасенко.Т.П., 'Основы Теории Коммуникации'.<br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Тарасенко Т.П."
},{
    "quote": "<div class='pi_text zoom_text'>Анализ позволяет разбить знания на части. В этом плане удаву не повезло -ему приходится заглатывать жертву целиком. А математикам повезло.<br/><br/>Костенко К.И. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>С: У него не было ни семьи, ни жены, ни детей...<br/>П: Счастливый человек, в общем-то!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D1%82%D1%83%D1%86'>#Болтуц</a> О.А. Регионально-информационное региона и права человека <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Болтуц О.А."
},{
    "quote": "<div class='pi_text zoom_text'>— Прылэсно!<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Мужик с чековой книжкой - это лучше, чем мужик с деньгами. Так что ищите мужика с чековой книжкой и выгодно выходите замуж<img alt='👰🏼' class='emoji' src='/emoji/e/f09f91b0f09f8fbc.png'/><br/><br/>Ермоленко В.В. (Основы финансового менеджмента) <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#фуп_КубГУ</a></div>",
    "author": "Ермоленко В.В."
},{
    "quote": "<div class='pi_text'>С: А давайте поговорим об истории или литературе!<br/>П: Да щазз... больше я на это не куплюсь!<br/><br/>Алеников А.С. Контроллинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text'>Студенты, как собаки - глаза умные, а сказать ничего не могут.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BA%D0%B0%D1%87'>#Ткач</a> Д. С.<br/>Общая психология<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Ткач Д. С."
},{
    "quote": "<div class='pi_text'>*отчитывая опоздавшего*<br/>-Ну вы же математики, должны понимать хоть какие-то элементарные вещи. Вы же не филологи.<br/><br/>Гортинская В.В. Алгебра и аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Гортинская В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Если ты весь в любви, то я тебя уважаю. <br/><br/>Авджян Г.Д. Теория управления <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Авджян Г.Д."
},{
    "quote": "<div class='pi_text'>*во время пары студент шёпотом со своей группой: 'АХТУНГ, Трамп победил, ликуем. Подкиньте повод для обсуждения Баранову на последние 10 минут.*<br/>С: *очень громко охнула*<br/>П: Что случилось???<br/>С: Трамп победил! <br/>П: И что?<br/>С: Это же ужасно...<br/>П: Ну что ж вы так пугаете? А я подумал мышь или букашка какая-то. Уже был готов кого-нибудь убивать!<br/>*продолжил пару*<br/><br/>Баранов А. В. <br/>Теория цивилизаций<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Баранов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Без тангенса тут ни в какую дырку.<br/><br/>Литвинский К.О. Микроэкономика <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Литвинский К.О."
},{
    "quote": "<div class='pi_text zoom_text'>Если на основании докладов не возникнет дискуссии, то у меня нет оснований вас задерживать. <br/><br/>Смертин Ю.Г. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Смертин Ю.Г."
},{
    "quote": "<div class='pi_text'>С: Но любить надо душой, а не глазами.<br/>П: Вы сначала душу у себя найдите, а потом и любите.<br/><br/>Осташевский А.В. Правовые основы журналистики <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>Учебник содержит большое количество волшебной, животворящей жидкости -воды.<br/><br/>Ювко М. А. Теория государства и права <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М. А."
},{
    "quote": "<div class='pi_text zoom_text'>Когда будете где-то лежать: в больнице, в МОРГЕ, не важно, читайте книги, например, 'Мой маленький Париж'. Очень хорошая книга.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>*говорит о егэ* <br/>Хорошее дело тремя буквами не назовут!<br/><br/>Робский В.В. Педагогика <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Робский В.В."
},{
    "quote": "<div class='pi_text'>*обращаясь к студенту насчет домашнего задания*<br/>П: Что-нибудь сделал?<br/>С: Нет. *начинает отмазываться*<br/>П: Ты на договорном?<br/>С: Да.<br/>П: То есть, ты платишь деньги, чтобы ничего не делать? Ты к бомжу вот тут на лавке пойди, скажи ему об этом. Он на тебя, как на идиота будет смотреть, скажет :'Я тоже ничего не делаю, но бесплатно'.<br/><br/>Нагорный С.В., Линейная алгебра <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Нагорный С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Эту задачу я вам давать не буду, она слишком простая, а я всё-таки уважаю уровень вашего интеллекта, каким бы низким он ни был.<br/><br/>Костенко К. И. Дискретная математика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФКТиПМ_КубГу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>Возьмём систему отсчёта, связанную с троллейбусом<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2'>#Рубцов</a> С. Е. Физика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Рубцов С. Е."
},{
    "quote": "<div class='pi_text'>А теперь плавно, не заметно для себя переходим к первому вопросу.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D0%BC%D0%B5%D1%86'>#Немец</a> Г. Н. Имиджелогия<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Немец Г. Н."
},{
    "quote": "<div class='pi_text zoom_text'>В общем, вы не 'овощи', и мне это нравится.<br/><br/>Вологина Е.В. 'Электронные средства информации' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Вологина Е.В."
},{
    "quote": "<div class='pi_text zoom_text'>Жорж, ты что ржешь?<br/><br/> <a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История России <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>* Преподаватель проговаривает формулу. *<br/><br/>Звучит страшно. На деле ещё хуже.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Мельников</a> С. С. Введение в термодинамику<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Мельников С. С."
},{
    "quote": "<div class='pi_text'>Поднимите руки те, кто считает себя лучше таракана.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D1%81%D1%82%D0%BE%D0%B2'>#Кустов</a> С. Ю.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Кустов С. Ю."
},{
    "quote": "<div class='pi_text'>*идёт пара,студент посмотрел, который час*<br/>П: Что,смотрите,сколько времени осталось до вашего отчисления?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Леванова</a> К. А. Всеобщая история<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Леванова К. А."
},{
    "quote": "<div class='pi_text zoom_text'>Вы же имеете цель? Собрать себе... покемонов на одно место.<br/><br/>Узлов Ю.А. 'История  России'  <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#биофак_КубГУ</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>Так давайте же я вас обозначу, раз вы приперлись.<br/><br/>Большов В.Б. Основы социального моделирования и программирования <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Большов В.Б."
},{
    "quote": "<div class='pi_text zoom_text'>Друг друга в этом отношении, это самое.<br/><br/>Фоменко Г.Ю  <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Фоменко Г.Ю"
},{
    "quote": "<div class='pi_text zoom_text'>Матанализ вы должны делать каждый божий день!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A6%D0%B0%D0%BB%D1%8E%D0%BA'>#Цалюк</a> М. В. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Цалюк М. В."
},{
    "quote": "<div class='pi_text zoom_text'>Так... Решим ещё одну задачу от Марка Ювко с Краснодара.<br/><br/>Ювко М.А. ИГПЗС <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>*говорит о студентах, которые плохо работают на практических*<br/><br/>И это тоже претендентка на откручивание головы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D0%B5%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>#Малевинский</a> С.О. Старославянский язык<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Малевинский С.О."
},{
    "quote": "<div class='pi_text'>Я не за халяву, но за возможность.<br/><br/>Утков Г. Н. Современный русский язык.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г. Н."
},{
    "quote": "<div class='pi_text'>Застрелиться солёным огурцом!<br/><br/>Черных Н.М. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Черных Н.М."
},{
    "quote": "<div class='pi_text'>* выдает дз на следующую пару * <br/>С: А все эти номера через тире записывать?<br/>П: Хоть через решетку!<br/><br/>Письменский А.В. Дифференциальные и разностные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Письменский А.В."
},{
    "quote": "<div class='pi_text'>Вы должны рассказывать доклад так,чтоб аж слеза в глазах стояла.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B8%D1%80%D0%BE%D0%BA%D0%BE%D1%81%D1%8F%D0%BD'>#Кирокосян</a> М. А. Финансовая безопасность<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кирокосян М. А."
},{
    "quote": "<div class='pi_text zoom_text'>Как было высечено на могильной плите: 'Не все йогурты бывают полезными'.<br/><br/> Чалый В. В. Русский язык и культура речи <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Я и самостоятельную дать могу. Мало ли какая мне желтая жидкость в голову ударит.<br/><br/>Петров В.И., История России, <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>Все проблемы в жизни от недостатка конспирации.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D0%BC%D0%B5%D1%86'>#Немец</a> Г. Н.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Немец Г. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Бродячие печатники посещали монастыри и удовлетворяли печатные потребности.<br/><br/>Садыкова С. М., 'Книговедение', <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Садыкова С. М."
},{
    "quote": "<div class='pi_text zoom_text'>Только человеку с образованием свойственно сомневаться! <br/><br/>Лежнёв А.В. Математический анализ. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Лежнёв А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Это профанация! <br/><br/>Волгина А. П. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Волгина А. П."
},{
    "quote": "<div class='pi_text zoom_text'>...люди с квадратным восприятием шарообразности Земли.<br/><br/>Остапенко А.А. Геодезия с основами космаэрофотосъемки <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Остапенко А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Студент - это ищущий! <br/><br/>Узлов Ю.А. История <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83%D0%BF'>#геофак_кубгуп</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>Воробушек-социофобушек :)<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B2'>#Большов</a> В. Б. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Большов В. Б."
},{
    "quote": "<div class='pi_text'>П: ‐ Как у вас дела? <br/>С: - Нормально.<br/>П: - Нормально? А должно быть лучше всех!<br/><br/>* Тишина. *<br/><br/>П: - Ну так, как у вас дела?<br/>С: - Лучше всех! <br/>П: - Правда? А ну доставайте конспекты, сейчас буду проверять.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B5%D1%80%D1%88%D0%BD%D1%91%D0%B2%D0%B0'>#Шершнёва</a> Н. Б. Теоретическая грамматика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Нормально.<br/>П: - Нормально? А должно быть лучше всех!<br/><br/>* Тишина. *<br/><br/>П: - Ну так, как у вас дела?<br/>С: - Лучше всех! <br/>П: - Правда? А ну доставайте конспекты, сейчас буду проверять.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B5%D1%80%D1%88%D0%BD%D1%91%D0%B2%D0%B0'>#Шершнёва</a> Н. Б."
},{
    "quote": "<div class='pi_text'>Чего нам не хватает для полного счастья? Ещё одного определения.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Мы живём случайно. Необходимости нет ни в чем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B8%D0%BC%D0%B1%D0%B5%D1%80%D0%B3'>#Кимберг</a> А.Н. Психология идентичности <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Кимберг А.Н."
},{
    "quote": "<div class='pi_text'>Пока вы не дошли до зачета, у меня было ощущение, что вы вполне адекватные.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И.  Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Большинство всё-таки отсеивается с помощью турникета - это могут быть бомжи, алкаши, педофилы и прочие интеллигентные люди.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BE%D0%BC%D0%B8%D0%BB%D0%BE%D0%B2'>#Томилов</a> А.Б. Безопасность жизнедеятельности <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Томилов А.Б."
},{
    "quote": "<div class='pi_text zoom_text'>Говоря о человеке, мы говорим о чём-то большем, чем человек.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Методология журналистского творчества <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>В языке художественной литературы всякое нарушение нормы — это тоже приём. Даже инверсия и ритм — нарушения нормы общения. Кто говорит стихами? Это ненормально!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B9%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Сайченко</a> В. В. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Сайченко В. В."
},{
    "quote": "<div class='pi_text'>Лучше всего матерятся филологи. Они в этом деле профессионалы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%BC%D0%BF%D0%B0%D0%BD'>#Кумпан</a> В. А. Профессиональные компетенции международника<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Кумпан В. А."
},{
    "quote": "<div class='pi_text zoom_text'>— На самом деле я буду делать вид, что рисую, а вы будете делать вид, что понимаете.<br/><br/>Тен О. К. Дифференциальная геометрия и топология <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>И, если уж вам хочется куда-то уехать, то нужно ехать далеко!<br/><br/>Жирма В.В. методы географических исследований<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text'>* студентка показывает свой конспект *<br/><br/>У вас почерк как моя кардиограмма после вашей пары.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BB%D0%BC%D0%B0%D1%81%D1%8F%D0%BD'>#Элмасян</a> А. В. Иностранный язык <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Элмасян А. В."
},{
    "quote": "<div class='pi_text'>Согласно Монтескьё республика характерна для небольших государств по типу греческих полисов,монархия характерна для государств средних размеров и деспотия для крупных империй. В общем, мы обречены.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%BE%D0%B3%D0%BE%D1%87%D0%B0%D1%8F'>#Рогочая</a> Г.П. История политических учений зарубежных стран. <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Рогочая Г.П."
},{
    "quote": "<div class='pi_text zoom_text'>Сейчас сбегаю за списочком группы и мы стартанём.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F'>#Янковская</a> Л. К. Теория случайных процессов <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Янковская Л. К."
},{
    "quote": "<div class='pi_text'>Я не крепость, измором меня брать не надо!<br/><br/>Краснова Н.В. 'Экономическая география России'<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Краснова Н.В."
},{
    "quote": "<div class='pi_text zoom_text'>Парни, запомните, одно неверное движение и все!!! Ты отец.<br/><br/>Логинов В.В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Логинов В.В."
},{
    "quote": "<div class='pi_text'>*идет лекция, студенты шумят*<br/>Тихо! Моих шуток не слышно! <br/><br/>Даниелян А. С. Римское право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text zoom_text'>- Мальчики же сейчас какие? До тридцати лет танцуют, потом наркотики, потом однополая любовь. Куда девчонкам деваться?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В.И. История Кубани <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text zoom_text'>Смотрели мультик «Ледниковый период»? Там белка ведет себя как первокурсник. Две цели: найти пожрать и найти туалет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В.И. История <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text zoom_text'>Вы учитесь в ОКСВОРДЕ!!! Правда на Комсомольском.<br/><br/>Арламов. А. А. Социальная педагогика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Арламов. А. А."
},{
    "quote": "<div class='pi_text'>* разговор зашёл за степень религиозности *<br/><br/>П: Уберём показушность. Признайтесь, большинство из вас обращается к богу только в случае острой необходимости. 'Помоги, Боже, успешно сдать экзамен Карине Алексеевне'. Ну ведь так?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Леванова</a> К. А. Культурно-религиозные традиции в международных отношениях <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Леванова К. А."
},{
    "quote": "<div class='pi_text'>* студент собирается отвечать на вопрос по семинарскому занятию и поднимает руку *<br/>П: Фамилия?<br/>С: Иванов.<br/>П: Правильно. * отвечает преподаватель, глядя в список *<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BB%D0%B5%D1%81%D0%BD%D0%B8%D0%BA'>#Колесник</a> Л. Л.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Иванов.<br/>П: Правильно. * отвечает преподаватель, глядя в список *<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BB%D0%B5%D1%81%D0%BD%D0%B8%D0%BA'>#Колесник</a> Л. Л."
},{
    "quote": "<div class='pi_text'>ТОП-3 цитаты:<br/>1. Удивительная вещь!<br/>2. Этого вы нигде не найдете.<br/>3. У нас у каждого свой Петр/Александр/Николай.<br/><br/>Касьянов В.В. 'История' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text'>Рефлексия — это вот когда едет человек в трамвае и ведёт диалог сам с собой... С чем-то согласен, с чем-то нет... Поэтому я хожу пешком.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>*преподаватель видит грязную доску*<br/><br/>Представьте, что я беру мел и рисую невидимую линию, потом я начерчу стрелки... Вообразите себе все это на чистой доске...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D0%BD%D1%87%D0%B0%D1%80%D0%BE%D0%B2'>#Гончаров</a> Ю.В. История зарубежной лит-ры 17-18 вв. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Гончаров Ю.В."
},{
    "quote": "<div class='pi_text'>Пора определяться со своей научной деятельностью. Впереди вас ждёт курсовая работа, потом ещё курсовая и ещё курсовая, диплом, магистратура, аспирантура и вечная любовь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература Средних веков и эпохи Возрождения<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>— Меня зовут Герасим Александрович, я буду вести ваши лекции.<br/>— Как зовут, повторите? <br/>— Ну, Тургенева читал? Помнишь, там собачку утопили? Так вот это я сделал.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B0%D0%B7%D0%B0%D0%BA%D0%BE%D0%B2'>#Казаков</a> Г.  А. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Казаков Г. А."
},{
    "quote": "<div class='pi_text'>С: Не люблю я статические матрицы, место в стеке только занимают.<br/>П: Правильно! В вашем возрасте нужно любить девушек, а не матрицы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В. Олимпиадное программирование<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text'>П: - Вы боитесь отвечать? <br/>С: - Да.<br/>П: - Не надо бояться. Ну что самое страшное случится, если Вы не ответите? Вас просто отчислят! Так что отвечайте спокойно и ничего не бойтесь. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A6%D0%B0%D1%82%D1%83%D1%80%D1%8F%D0%BD'>#Цатурян</a> М. М. История английского языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Да.<br/>П: - Не надо бояться. Ну что самое страшное случится, если Вы не ответите? Вас просто отчислят! Так что отвечайте спокойно и ничего не бойтесь. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A6%D0%B0%D1%82%D1%83%D1%80%D1%8F%D0%BD'>#Цатурян</a> М. М."
},{
    "quote": "<div class='pi_text zoom_text'>Вы, колышницы. Виолончелисты! Поняли, ясно?<br/><br/>Коновалов А. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Коновалов А. В."
},{
    "quote": "<div class='pi_text'>* Преподаватель, глядя в глаза студенту. *<br/><br/>Вы многомерны... Многодисциплинарны... Ну хватит вас обижать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Экспертные системы<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>П:*шутит*<br/>Студенты:*молчат*<br/>П: Ну, это я вам ради шутки рассказал, а вы, заразы, не смеетесь. Как говорят, новое поколение, фаст поколение....<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История России <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>* Перед зимней сессией. *<br/><br/>П: - Если к вам приближается белое и пушистое, знайте — это песец.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text'>Аналогично, как говорят колобки.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Механика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>*решаем задачу по теории графов, в которой котам ставится в соответствие вершина графа* <br/> <br/>С: Что будет, если при обходе мы будем ходить по котам? <br/>П: Нет, не надо ходить по котам.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text'>* 4 курс *<br/>С: Здравствуйте!<br/>П: Вы наша?<br/>С: Ваша.<br/>П: Новенькая? <br/>С: Старенькая.<br/>* тихий смех в аудитории *<br/>П: Да какая Вы старенькая? Блестите как новенькая!<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D1%88%D0%B5%D0%B2'>#Богдашев</a> И.В. Менеджмент <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Ваша.<br/>П: Новенькая? <br/>С: Старенькая.<br/>* тихий смех в аудитории *<br/>П: Да какая Вы старенькая? Блестите как новенькая!<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D1%88%D0%B5%D0%B2'>#Богдашев</a> И.В."
},{
    "quote": "<div class='pi_text'>П: Ну что это за непонятные определения вы мне говорите?<br/>С: Мы это так и записали в лекции.<br/>П: Не может быть, чтоб мы так записывали.<br/>С: Ну мы вот так записали.<br/>П: Не, ну если вы так записали, я тут не причем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>*необходимо объяснить суть лабораторной работы*<br/>С: А можно своими словами?<br/>П: Можно.<br/>С: А если это будет очень примитивно?<br/>П: Если это будет очень примитивно, то тебя отчислят.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD'>#Волошин</a> М.А. Физ.практикум <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A2%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФТФ_КубГУ</a></div>",
    "author": "Можно.<br/>С: А если это будет очень примитивно?<br/>П: Если это будет очень примитивно, то тебя отчислят.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD'>#Волошин</a> М.А."
},{
    "quote": "<div class='pi_text zoom_text'>Тот, кто примет окончательное решение, жить будет недолго... *радостно улыбается*<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Дискретная математика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФКТиПМ_КубГу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>*преподаватель выставляет зачеты по лабораторным* <br/>- Смотри сюда, колышница!! Номер работы ваша оценка, т.е. - два.<br/>*после смотрит работу и ставит 'зачёт'*<br/><br/> <br/>Коновалов А. В. Физика  <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Коновалов А. В."
},{
    "quote": "<div class='pi_text'>Хочешь работать с концерном Калашникова? Могу устроить. Нужно всего лишь пару лаб не написать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD'>#Волошин</a> М.А Физический практикум<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Волошин М.А"
},{
    "quote": "<div class='pi_text'>Я вообще не верю в теорию Дарвина. Ну серьёзно, можно написать в учебнике, что человек произошёл от пингвина и через два поколения все будут думать, что это так. И только попробуй сказать им, что человек произошёл от обезьяны, тебя засмеют, ведь у нас с пингвинами явные сходства: прямохождение, уход за потомством, любовь к <br/>купанию, 'белый верх, черный низ'...<br/><br/>Шпаков. А.Э. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Шпаков. А.Э."
},{
    "quote": "<div class='pi_text'>Чёрная дыра, она такая- чёрная,  дырявая...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%85%D0%BE%D0%B2%D0%B8%D1%87'>#Бухович</a> Е.В. Концепции современного естествознания <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Бухович Е.В."
},{
    "quote": "<div class='pi_text'>П: Почему вас не было на прошлых парах?<br/>*студент отвечает*<br/>П: Послушайте, мне это не интересно и вы мне не интересны!<br/><br/>В.Н.Рябов .Психолингвистика <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Рябов В.Н."
},{
    "quote": "<div class='pi_text zoom_text'>– Ещё одно предложение и я вас отпущу...на свободу... А вот Бородин отсидел 11 лет!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2'>#Павлов</a> Ю. М. Русская литература ХХ века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю. М."
},{
    "quote": "<div class='pi_text'>-ФерштЭйн? АндэстУд?<br/><br/>Кутер М.И. Бухгалтерский учёт <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>П: Вы можете сами почитать про эту тему в учебнике. Если что-то не понятно то, можете это пропускать.<br/>С: * шёпотом * То есть его можно не открывать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D0%BA'>#Боровик</a> О. Г.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Боровик О. Г."
},{
    "quote": "<div class='pi_text'>* пара уже закончилась *<br/>Времени у нас, судя по взгляду, уже не осталось?<br/><br/>Письменский А.В. Дифференциальные и разностные уравнения. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Письменский А.В."
},{
    "quote": "<div class='pi_text'>Нож где-то, а я здесь. И я начинаю им орудовать через информационную среду. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D1%8F%D0%BD'>#Закарян</a> М. Р. Методология организационного проектирования системы организации<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Закарян М. Р."
},{
    "quote": "<div class='pi_text zoom_text'>...но когда-нибудь я всё равно умру. А если повезёт, то нет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А.А. Онтология и теория познания. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Тащиан А.А."
},{
    "quote": "<div class='pi_text zoom_text'>— Курс связан с теорией вероятностей, так что перечитайте лекции, если вы их не сожгли на радостях.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BB%D1%8E%D1%81%D1%82%D0%B5%D0%BD'>#Тлюстен</a> С. Р. Математическая статистика <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С. Р."
},{
    "quote": "<div class='pi_text'>Карма не пополняется – она отрабатывается. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D0%BC%D0%B5%D1%86'>#Немец</a> Г. Н. Основы интегрированных коммуникаций<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Немец Г. Н."
},{
    "quote": "<div class='pi_text'>Сон серой кобылы в электрическую ночь.<br/><br/>Юрченко В. М. Молодёжь в общественно-политической жизни общества <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Юрченко В. М."
},{
    "quote": "<div class='pi_text'>- И напоследок вот еще что... Думайте как шарик.<br/>*все недоумевают*<br/>- Ну по принципу: 'Я шарик, я шарик'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD%D0%BE%D0%B2'>#Логинов</a> В. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Логинов В. В."
},{
    "quote": "<div class='pi_text'>При приеме Линекса, у которого коэффициент полезности 0, в организм, якобы, попадают другие бактерии. Вот представьте, что в большой и дружный коллектив ваших кишечных бактерий приходит другая бактерия и говорит: 'Алё, я буду тут размножаться!' А ей говорят: 'Нет, не будешь'. <br/><br/>Зозуля Л.В. Возрастная анатомия, физиология и гигиена, <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Зозуля Л.В."
},{
    "quote": "<div class='pi_text'>П: *называет имя студента* здесь?<br/>С: Его 2 дня не будет.<br/>П: А потом проснется?<br/><br/>Щеколдин Г.А. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>Классная теорема, классная!<br/><br/>Сергеев Э.А. теория чисел <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сергеев Э.А."
},{
    "quote": "<div class='pi_text'>Не путайте философию с туманом. <br/><br/>Гарин С.В. Логика <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Гарин С.В."
},{
    "quote": "<div class='pi_text'>П: ...Получить диплом, выйти замуж/жениться,родить детей...<br/>С: А может,я не доживу до этого момента!<br/>П: Да успокойтесь, напишете Вы свою курсовую. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Онтология и теория познания. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>*лекция по Пётру I*<br/>П: Фактически теряется былой смысл церкви, она превращается в министерство. Вот представьте, министерство вашей души...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B5%D1%86%D0%BA%D0%B8%D0%B9'>#Любецкий</a> А.И. История государственного управления <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Любецкий А.И."
},{
    "quote": "<div class='pi_text'>*стирает записи на доске*<br/>С: Подождите, не стирайте!<br/>П: *посмотрев на студента, начинает стирать со скоростью света*<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2'>#Колоколов</a> Ф. А. Неорганическая химия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Колоколов Ф. А."
},{
    "quote": "<div class='pi_text zoom_text'>Вот заходите вы в столовую, а там лошадь мертвая лежит, разлагается...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D1%8C%D1%8F%D0%BD%D0%BA%D0%BE%D0%B2'>#Пьянков</a> В.Г. Проектная графика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Пьянков В.Г."
},{
    "quote": "<div class='pi_text'>4 бочки, соль и розги мне! Будем пороть.<br/><br/>Окунь А.С. Налоговый менеджмент<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Окунь А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Я вас не учу плохому, я вас учу только плохому.<br/><br/>Пономарева Д.О. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Пономарева Д.О."
},{
    "quote": "<div class='pi_text'>Сообразили? <br/>Чувствуете, да?<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>— Диалог это вам не монолог!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D0%BA'>#Петрик</a> Я. Ю. Философия <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Петрик Я. Ю."
},{
    "quote": "<div class='pi_text'>— Это хорей? Хорей! Стопудово, я проверяла.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B9%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Сайченко</a> В. В. Введение в литературоведение<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Сайченко В. В."
},{
    "quote": "<div class='pi_text'>Есть такие женщины, которые созданы, чтобы портить жизнь великим литераторам.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%B2'>#Бараков</a> В. Н. Тенденции развития современной периодики<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Бараков В. Н."
},{
    "quote": "<div class='pi_text zoom_text'>П: Вы должны сделать мир своим домом, а не дом своим миром. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Онтология и теория познания <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>*перед началом пары преподы разговаривают друг с другом*<br/>— Ты посмотри, у меня один в трусах пришёл!<br/>— Кто??.. ооооо-о-о! Ты зачем в трусах пришёл? Ты что? На улице холодно же! Джюджюлик надо беречь!<br/><br/>Титулов Р. В. и Дорошенко В. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Титулов Р. В."
},{
    "quote": "<div class='pi_text'>* студентка не пишет лекцию *<br/><br/>Записывай-записывай. Мама ведь спросит, чему тебя четыре года учили, когда придётся устраиваться продавцом-консультантом. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D1%80%D0%B1%D0%B0%D0%BB%D1%8C'>#Щербаль</a> С. С. Технология видеосъемки и видеомонтажа <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Щербаль С. С."
},{
    "quote": "<div class='pi_text'>Да не волнуйтесь вы так! Ну не сдадите вы этот экзамен сейчас — пойдёте на пересдачу. Не получится пересдать — ещё на одну передачу. И вообще в этот унивеститет сложнее поступить, чем отсюда вылететь.<br/><br/>Чумаков С. Н. Античная литература. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Чумаков С. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Перельман доказал великую проблему и пошёл в лес по грибы.<br/><br/>Марковский А.Н. уравнения математической физики <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Марковский А.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Это сложная функция, но мы будем называть ее по-простецки — функция от функции.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я. В. Математика и статистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я. В."
},{
    "quote": "<div class='pi_text'>*преподаватель разбирает творческие работы, в которых студенты могли задать ему любой вопрос*<br/>— Что является центром вселенной?<br/>— Сейчас – наша лекция.<br/><br/>Чалый В.В. Русский язык и культура речи <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Чалый В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Ну, запишите ещё одну умную мысль, пока я ещё не умер. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D0%B5%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>#Малевинский</a> С.О. История русского литературного языка <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Малевинский С.О."
},{
    "quote": "<div class='pi_text'>Знаете,  Вы как механическая мыльница. Я должен постоянно давить,  чтобы добыть Ваши знания!<br/><br/>Ювко М.А. ИГПЗС<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>* формулирует теорему *<br/>— Напишу так...<br/>* стирает всю доску * <br/>— А лучше не так!<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Если я подумаю, что вы подумали списать — экзамен для вас окончен. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%BA'>#Жук</a> А. С. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Жук А. С."
},{
    "quote": "<div class='pi_text zoom_text'>— Вот детские пирамидки... Вы давно играли в детские пирамидки?<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>-Вот, пишут объявления на подъездах - 'Куплю рога'. На голову надеть себе хотят что ли?<br/><br/>Узлов Ю. А. <br/>История Кубани <br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Узлов Ю. А."
},{
    "quote": "<div class='pi_text'>Чтобы сдать зачёт, необходимо ответить на 5 вопросов из 8. Но это невозможно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Модели интеллектуальных систем<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>Нужно уметь определять, где торт, а где вишенки.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%B7%D0%B0%D0%BA%D0%BE%D0%B2'>#Лузаков</a> А. А. Психодиагностика в псих. исследовании<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Лузаков А. А."
},{
    "quote": "<div class='pi_text'>Кому подойти поведение поправить... по морде!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История России<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text zoom_text'>Вот представьте себе, Ивану Грозному сказали: 'Поцелуй мой тапок'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0'>#Бородина</a> С.Н. История кубани <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Бородина С.Н."
},{
    "quote": "<div class='pi_text'>Никогда не осуждай своего мужчину, иначе будут проблемы по-женски... Не желай ему несчастья, скажи лучше :'Будь ты трижды раз здоров и четырежды счастлив'.<br/><br/>Кравченко Г.Г. Академическая живопись <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Кравченко Г.Г."
},{
    "quote": "<div class='pi_text zoom_text'>Шею надо хорошо разминать! А если справа парень красивый и вы раз! Повернули голову и все, хорошо:)<br/><br/>Дорошенко В.В. физ-ра <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Дорошенко В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Генетика - продажная девка империализма.<br/><br/>Спасов С.В. Философия <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Староста - это глаз в пустыне преподавателя. <br/><br/>Родин А. В. Статистика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_Кубгу</a></div>",
    "author": "Родин А. В."
},{
    "quote": "<div class='pi_text'>*обсуждаем политическую статью и тут вдруг*<br/>П: *имя*, у Вас есть корова?<br/>С: Нет, а у Вас?<br/>П: Тоже нет, но знаете, я думаю, что нам нужно приобрести корову. Вот сюда её поставим, будет травку щипать. Наша коровка будет. НО КТО БУДЕТ ЕЁ ОХРАНЯТЬ? ЭТОТ НЕНОРМАЛЬНЫЙ ОХРАННИК? Мы ему не позволим, нет.<br/><br/>Павлов Ю.М. Практическая журналистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text'>Из ротовых полостей вылезают какие-то звуки. <br/><br/>Ювко М.А. Теория государства и права.<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>Лучше работайте на практиках и получите самозачёт. Вы же не хотите попасть в 'интеллектуальные тёзки' на моей итоговой аттестации?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text'>С: Можно взять для проекта тему 'Салон красоты'?<br/>П: Нет, точно НЕТ! Убирайте весь этот гламур!!!<br/>С: Ну мы же девочки!<br/>П: Вы не девочки, вы дизайнеры!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B8%D1%80%D0%BE%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Мирошников</a> В. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Мирошников В. В."
},{
    "quote": "<div class='pi_text'>Я не алкоголик, но мы в России.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Пономаренко</a> Т. Н. Архитектура компьютера<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "России.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Пономаренко</a> Т. Н."
},{
    "quote": "<div class='pi_text'>Каждый несёт свои яйца сам. Если разбил, то это его проблемы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%98%D0%B2%D0%B0%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE'>#Иваненко</a> А. М. История биологии<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Иваненко А. М."
},{
    "quote": "<div class='pi_text'>Русскому человеку только дай намёк на апокалипсис, и он пойдёт с топором решать проблемы бытия. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. История зарубежной литературы Средних веков и эпохи Возрождения <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Наука история - наука проститутка.<br/><br/>Клочков О.Б. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Клочков О.Б."
},{
    "quote": "<div class='pi_text'>Я могу не только с напильником ходить, но и с цветами, как девочка. <br/><br/>Гаврилова В. Н.  История мировой культуры и искусства<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Гаврилова В. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Интернет - странное пространство. Здесь нет ни чести, ни совести, ни достоинства... ни понятий, ни прав, ни норм.<br/><br/>Осташевский А.В., 'Авторское право', <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>П: -Самый любимый человек?<br/>С: -Мама!<br/>П: -Котики?<br/>С: -Не, мы сказали мама.<br/>П: -Ну а для меня котики.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8C%D1%86%D0%B5%D0%B2%D0%B0'>#Мальцева</a> Р. И. Современный русский и родной язык <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Мальцева Р. И."
},{
    "quote": "<div class='pi_text'>Эконом — это аквариум. Я не рыбка, а доцент! Я не буду там заниматься!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B8%D1%80%D0%BC%D0%B0'>#Жирма</a> В. В. Методы физико-географических исследований.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В. В."
},{
    "quote": "<div class='pi_text zoom_text'>— Что вы руками размахались? У меня ощущение, что я на сеансе у шамана.<br/><br/>Толкачёва Е. Г. Дифференциальная геометрия и топология <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Толкачёва Е. Г."
},{
    "quote": "<div class='pi_text'>Идея есть? А если найду?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2'>#Петросов</a> Т. А. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Петросов Т. А."
},{
    "quote": "<div class='pi_text'>Функции можно закрывать в любом месте! Ба-бах и хорошо! Бум! На выход! <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Бакалавр — не образование. Это ПТУ.<br/><br/>Большова А.Ю. Введение в языкознание <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Это ПТ"
},{
    "quote": "<div class='pi_text zoom_text'>Акционерные общества? 'Азино три топора' - то, что подсаживает политиков на долги.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B7%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B8%D1%87'>#Сазантович</a> А. Б. Политология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Сазантович А. Б."
},{
    "quote": "<div class='pi_text'>Знаете анекдот про положительную и отрицательную связь?...ну когда в общежитие принесли ящик водки.<br/><br/>Остапенко А.А. Глобальная экология<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Остапенко А.А."
},{
    "quote": "<div class='pi_text'>Гелий потихоньку в космос уходит, а метеориты потихоньку падают на Землю.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D1%8B%D1%81%D0%BA%D1%83%D0%B1%D0%BE%D0%B2'>#Выскубов</a> Е. В. Основы кибернетики <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Землю.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D1%8B%D1%81%D0%BA%D1%83%D0%B1%D0%BE%D0%B2'>#Выскубов</a> Е. В."
},{
    "quote": "<div class='pi_text'>*рассказывает про произведение*<br/>- Зацените, да?<br/><br/>Блинова М. П. История зарубежной литературы, <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Блинова М. П."
},{
    "quote": "<div class='pi_text'>* Контрольная работа. *<br/><br/>С: - Ничего страшного, если тут большие числа получаются?<br/>П: - Это какие?<br/>С: - Двузначные.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B8%D1%8F%D0%BD'>#Шиян</a> В. И. Алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Двузначные.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B8%D1%8F%D0%BD'>#Шиян</a> В. И."
},{
    "quote": "<div class='pi_text'>*на создателей научных видео*<br/>П: Басурмане проклятые.<br/><br/>Самков А. А. Иммунология. <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Самков А. А."
},{
    "quote": "<div class='pi_text zoom_text'>Не фамильярничайте. Это я выгляжу так. На самом деле я очень строгая и умная тётка.<br/><br/>Мальцева Р.И. Язык СМИ. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мальцева Р.И."
},{
    "quote": "<div class='pi_text'>*идёт пара, студенты не могут решить пример*<br/>- Ну кто тут математик, вы или я?!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE'>#Яременко</a> Л.А. ТФКП<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Яременко Л.А."
},{
    "quote": "<div class='pi_text'>*обращается к студентке* <br/>П: Гегель 'Наука логики'. Не читала?<br/>С: Нет.<br/>П: Скоро будешь, сочувствую тебе.<br/><br/>Спасов С. В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Выходит банк на рынок и кричит: 'Я - банк! Идите все ко мне!'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0'>#Платонова</a> Ю.Ю. Банковское дело <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Платонова Ю.Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Я человек неверующий, но шо-то такое есть.<br/><br/>Закарян М. Р. Введение в теорию систем <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Закарян М. Р."
},{
    "quote": "<div class='pi_text'>В нашем мире все живое, куда ни глянь, вон, даже пиво живое!<br/><br/>Волгина А. П. История государства и права России<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Волгина А. П."
},{
    "quote": "<div class='pi_text'>С : Меня тут убивают.<br/>П: Ну найди себе тихонькое место и там погибай.<br/><br/>Кузьменко А.Н. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Кузьменко А.Н."
},{
    "quote": "<div class='pi_text'>Леонардо день начинает как? Что-нибудь записал в дневнике. Посмотрел на себя в зеркало - лицо мощного мудреца, - стало ему, наверное, страшно! Пошел что-то нарисовал, допустим, часть лица Джаконды. Потом, значит, что делать в обед? В обед нужно вскрывать мертвое тело. Нельзя вскрывать, церковь против, но вскрывать нужно. Леонардо идет к трупу, преодолевая запах, начинает рыться в человеческом теле не потому что он маньяк, а потому что он такой мощный маньяк, что ему все интересно. Церковь говорит: нельзя, ты дьявол! А он говорит: а вот я нарисовал икону. Какая икона?! И пока все смотрят, он опять вскрывает тело. Потом он начинает придумывать летательный аппарат. Потом ему становится опять немножко скучно, но скучать нельзя - он в Ренессансе!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Зарубежная литература средних веков и эпохи Возрождения<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>А теперь давайте подумаем не как Роскомнадзор, а как нормальные адекватные люди. <br/><br/>Осташевский А.В. Информационное пространство региона и права человека, <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>Если Вы куда-то пришли, то Вы должны оттуда уйти.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B0'>#Васильева</a> Е. М. Работа в творческой студии<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Васильева Е. М."
},{
    "quote": "<div class='pi_text zoom_text'>Коммутативность в теории групп встречается не чаще, чем алмазы с бычью голову величиной на улицах Краснодара.<br/><br/>Рожков А.В. 'Комп.алгебра'' <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Рожков А.В."
},{
    "quote": "<div class='pi_text'>Самоэкзамен — это уйти из жизни.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B0%D1%80%D0%BC%D0%B0%D0%B7%D0%B8%D0%BD'>#Кармазин</a> В. Н. Теория риска и моделирование рисковых ситуаций<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Кармазин В. Н."
},{
    "quote": "<div class='pi_text zoom_text'>... ведь каждая ерунда — это начало чего-то важного.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BD%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Бондаренко</a> Н. А. Структурная геология <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Бондаренко Н. А."
},{
    "quote": "<div class='pi_text zoom_text'>Не ребят, это все мимо кассы.<br/><br/>Воронов А.А. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Воронов А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Мы НАУЧАЕМСЯ этой процедуре анализа, обсуждения и т.д.<br/><br/>Спасов С.В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Мы НА"
},{
    "quote": "<div class='pi_text'>Я рассказываю очень быстро? Нет, это вы слушаете медленно.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Дифференциальная геометрия и топология <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>П: Устали?<br/>С: Да! (хором)<br/>П: А я как устала.<br/>Пишем дальше.<br/><br/>Гортинская В.В. Алгебра и аналитическая геометрия. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Гортинская В.В."
},{
    "quote": "<div class='pi_text'>Логика здесь иногда не работает, но зачем вы её, вообще, сюда принесли? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К.И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>Кант привёл философию к совершеннолетию. До этого все философы просто играли в песочнице.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text'>П: Приведите примеры баллад.<br/>С: Если брать Рождественского, которого вы не любите, * приводит пример *. <br/>П: Ну да, лиро-эпический. Я вообще-то примеры просил привести. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Если не сможете меня удовлетворить - ничего не получите.<br/><br/>Кизим А.А. Логистика <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кизим А.А."
},{
    "quote": "<div class='pi_text'>Сократ жил по принципу: 'Вы говно, а я царица, и я вам это сейчас докажу'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BC%D0%B5%D0%B4%D0%BE%D0%B2'>#Мамедов</a> Р. Я. Риторика для юристов<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Мамедов Р. Я."
},{
    "quote": "<div class='pi_text'>Я приведу вам чисто практический пример. Хотите прикол?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text'>Ну что вы сразу самоубийство? Близость с поездом. Анна Каренина хотела сблизиться с ним. Больше было не с кем. Все мужики ведь козлы!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О.Н. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Полное копирование - это всегда элемент саморазрушения!<br/><br/>Карнаушенко Л. В. История государства и права зарубежных стран <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л. В."
},{
    "quote": "<div class='pi_text'>Что участвует в процессе производства? Станок! Станок и человек, который вокруг этого станка крутится. Чё-то там в него суёт. Вот как называется то, что он в него су..... *прерывается* Не не, это не то, не то<img alt='😁' class='emoji' src='/emoji/e/f09f9881.png'/><br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория<br/><a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Эконом_КубГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Нельзя хвалить мужчин и поросят. Они сразу испортятся.<br/><br/>Болтуц О.А <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Болтуц О.А"
},{
    "quote": "<div class='pi_text zoom_text'>На каникулах никому не раскрывайте  свои зачётные книжки.<br/><br/>Карпенко А.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Карпенко А.В."
},{
    "quote": "<div class='pi_text'>С *жалостливо*: Отпустите!<br/>П: По-моему, здесь хорошо видно, что на мне нет бороды, да и не в черном я сегодня. Что вам отпустить? Грехи?<br/><br/>Алеников А.С. Контроллинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Таких чисел очень мало, хотя их бесконечно много.<br/><br/>Жуков С.А. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Жуков С.А."
},{
    "quote": "<div class='pi_text zoom_text'>Не приложишь — не узнаешь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BE%D0%B2'>#Кузнецов</a> А.В. Бух. учет <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кузнецов А.В."
},{
    "quote": "<div class='pi_text'>П: Извините, аллергия. <br/>С: Не на нас, надеюсь?<br/>П: Да-да...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2'>#Павлов</a> Ю.М. Аналитическая журналистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text'>Если вы уже переродились — это ваша проблема. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Доклассическая словесность в медиа <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>*пишем со скоростью света, не успеваем моргать*<br/>Преподаватель:<br/>- Вот я коза...зачеркиваем последний лист.<br/>*лучезарно улыбается*<br/><br/>Гортинская В.В. / Алгебра и аналитическая геометрия  <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФПМ_кубгу</a></div>",
    "author": "Гортинская В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Кто хорошо учился, тому функциональный анализ понравится, а тот, кто нет, будет чихать, кашлять и подорвёт себе здоровье.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В. Функциональный анализ <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Малыхин К. В."
},{
    "quote": "<div class='pi_text'>С: Носителем мифологического сознания был человек.<br/>П: А щас кто? Кот что ли?<br/><br/>Спасов.С.В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Ну убил отца, ну женился на своей матери. Это же не повод расстраиваться! <br/><br/>Мороз О.Н. История античной литературы <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>*преподаватель читает вступительную лекцию по биохимии*<br/>Вот рука для чего нужна? <br/>/пауза/<br/>Правильно, чтобы бить!<br/><br/>Хаблюк В.В. Органическая и биологическая химия<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Хаблюк В.В."
},{
    "quote": "<div class='pi_text zoom_text'>За все русское Екатерина Вторая стояла своей грудью, а грудь у нее была.<br/><br/>Касьянов В.В. 'История' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text'>Помните мультик 'Ледниковый период' ? Вот. Там белка ведёт себя, как первокурсник. <br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>(Студенты как всегда не выполнили задание)<br/>П: А что вы ночью делали?<br/>С: Спали!<br/>П: Да, что вы за студенты тогда. Нормальный студент или задание делает ночью или улучшает демографическую ситуацию в стране.<br/><br/>Белопольская Т. Н., <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Белопольская Т. Н."
},{
    "quote": "<div class='pi_text'>*когда речь зашла о бабушках у подъезда*<br/><br/>-Никакая она тебе не Oma, это die Babuschka!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%8B%D1%87%D0%BA%D0%BE%D0%B2'>#Бычков</a> С.С Практический курс немецкого языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Бычков С.С"
},{
    "quote": "<div class='pi_text'>Изначально предел решался через правило Лопиталя. Ну, мы и без него решили проблему.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2'>#Александров</a> А. А. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Александров А. А."
},{
    "quote": "<div class='pi_text'>*Рисует график*<br/>Какиииим тыы быыыыл<br/>Такииим и остааалсяяя<br/><br/>Щеколдин Г.А. Доп.главы по физике <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>Это число мне, как и Вам, вообще ни о чем не говорит... но оно колоссально!<br/><br/>Лысенко В.Е. Астрофизика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Лысенко В.Е."
},{
    "quote": "<div class='pi_text zoom_text'>У вас такое присутствие, что отсутствие.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%80%D0%B0%D0%BD%D0%B5%D1%86'>#Таранец</a> Н.А. Практика языка. <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Таранец Н.А."
},{
    "quote": "<div class='pi_text'>П: Вот что вам говорят, средняя зарплата в России достигла 21000 рублей.<br/>...<br/>П: К вашему сведению, у 80% работающих зарплата ниже средней. Учитывая, где вы находитесь... Я вот в соседней аудитории прочёл на столах: 'ФПМ — зло'.. Так вот, учитывая, где вы находитесь, вам грозит зарплата максимум 80% от средней.<br/>...<br/>*смеясь*<br/>П: Поэтому, бегите. Дети, БЕГИТЕ!<br/><br/>Нагорный С.В., Линейная алгебра, <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Нагорный С.В."
},{
    "quote": "<div class='pi_text'>У каждого из нас в жизни должен быть свой Малыхин.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К.И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФКТиПМ_КубГу</a></div>",
    "author": "Малыхин.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К.И."
},{
    "quote": "<div class='pi_text zoom_text'>Ферштейн?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Марковский</a> А. Н. Уравнения с частными производными <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Марковский А. Н."
},{
    "quote": "<div class='pi_text'>Так, у кого есть писюль? Кхем, маркер.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А.<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Поэтому мы должны помнить, что природа нас создала разумными. Для чего? Чтобы мы сохраняли дом, в котором живём. Ту воду. Тот воздух.<br/><br/>Морева Л.Я. <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Морева Л.Я."
},{
    "quote": "<div class='pi_text zoom_text'>У любого человека есть своё что-то. <br/><br/>Утков Г. Н. 'Стилистика и литературное редактирование' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Переведите 'хухры-мухры' на немецкий. Легче тортик с рыбкой съесть. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D0%B2%D1%87%D0%B0%D1%80%D0%BE%D0%B2%D0%B0'>#Овчарова</a> К. В. Письменный перевод <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Овчарова К. В."
},{
    "quote": "<div class='pi_text'>* Перемена. Студенты толпятся у деканата. Отрывается дверь. Выходят преподаватели. *<br/><br/>Чуть было не пал под дверью деканата.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AE%D1%80%D1%8C%D0%B5%D0%B2%D0%B0'>#Юрьева</a> М. В. <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Юрьева М. В."
},{
    "quote": "<div class='pi_text zoom_text'>Что касается других способов заражения, то это могут быть и половой путь и убийцы-парикмахеры…<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D1%8F%D1%82%D0%BA%D0%B8%D0%BD%D0%B0'>#Вяткина</a> Г. Г. Иммунология <a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Биофак_кубгу</a></div>",
    "author": "Вяткина Г. Г."
},{
    "quote": "<div class='pi_text'>Если я сомневаюсь, что я есть, значит, я есть, иначе как бы я сомневался, если бы меня не было.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%B9%D0%BA%D0%BE'>#Бойко</a> П. Е.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Бойко П. Е."
},{
    "quote": "<div class='pi_text zoom_text'>Нормальные должны игнорить все аргументы курильщиков в свою защиту. Помните - наркоманы лживы и изворотливы. <br/><br/>Алеников А.С. Контроллинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text'>Ну зачем козе баян...<br/><br/>Бондаренко Н.А.<br/>Структурная геология <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Бондаренко Н.А."
},{
    "quote": "<div class='pi_text'>Вот это инопланетянин, который умнее нас.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>* рассказывает ТБ в лаборатории * <br/>— И последнее: нельзя умирать от электричества.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD'>#Волошин</a> М. А. Физика <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Волошин М. А."
},{
    "quote": "<div class='pi_text'>*Опаздываю на пару. Приехала на лонгборде*<br/>*захожу в кабинет*<br/><br/>С: Извините за опоздание.<br/>П: Яна, ну вы же на колёсах!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BC%D0%B0%D1%80%D0%BE%D0%B2'>#Комаров</a> Д.А. Использование карт в географии<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D0%B8%D0%B3%D0%B3%D1%82%D1%81_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#иггтс_кубгу</a></div>",
    "author": "Комаров Д.А."
},{
    "quote": "<div class='pi_text'>А для расширения сознания, кто не хочет принимать психотропные средства, полистайте эту книгу. Она как 2 таблетки.<br/><br/>Мартиросов А.В. Проектная графика <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Мартиросов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Ubuntu- это кастрированный Debian.<br/><br/>Рожков А.В. компьютерная алгебра и криптография <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Рожков А.В."
},{
    "quote": "<div class='pi_text'>Хорошая девушка — молодая девушка. Все остальное — это не так уж и важно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Доклассическая словесность в медиа<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>*студенты заполняют медицинские карточки* <br/><br/>...Дальше пол. Подчеркиваем 'М' или 'Ж'. Кто не определился, тот пусть пишет 'не определился'. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BC%D0%B8%D0%BB%D1%83%D0%B9%D0%BA%D0%BE'>#Помилуйко</a> Ю.В. Физическая культура <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Помилуйко Ю.В."
},{
    "quote": "<div class='pi_text zoom_text'>Если ты понимаешь, что изнасилование неизбежно, нужно расслабиться и получить удовольствие.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Дополнительные главы по физике и математике физики <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>П: Как думаете, сколько учителей-мужчин в школе, где я был?<br/>С: 3<br/>П: Вы конченный оптимист!<br/><br/>Рожков А.В. компьютерная алгебра и криптография <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Рожков А.В."
},{
    "quote": "<div class='pi_text'>* Преподаватель заходит в кабинет. * <br/>П: - О, а что вы здесь делаете?<br/>С: - У нас пара.<br/>П: - Не ожидал вас увидеть.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B0%D1%86%D0%B5%D0%BF%D0%B8%D0%BD'>#Зацепин</a> М. Н. Информатика и информационные технологии в профессиональной деятельности <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Зацепин М. Н."
},{
    "quote": "<div class='pi_text zoom_text'>А получат кредиторы сколько? Ноль целых (пауза), шиш десятых! <br/><br/>Кутер М. И. Фин. учет <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М. И."
},{
    "quote": "<div class='pi_text'>В то время рыцарский роман был чем-то вроде романов о вампирах или Дарьи Донцовой. Все читают, но никто не признается!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BA%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Ткаченко</a> В. В. Литература стран изучаемых языков<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Ткаченко В. В."
},{
    "quote": "<div class='pi_text'>-Читайте псалтырь в свое свободное время, которого у вас нет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. История зарубежной литературы <br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>- Я неправильно пишу, чтобы вам понятнее было.<br/><br/>Нестеренко А.Г. Дискретная математика <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Нестеренко А.Г."
},{
    "quote": "<div class='pi_text zoom_text'>Я буду спрашивать только по желанию... Правда ещё не всё знают, что они желают ответить. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B8%D0%BD%D0%BA%D0%B8%D0%BD'>#Жинкин</a> С. А. Теория государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Жинкин С. А."
},{
    "quote": "<div class='pi_text'>Что такое дэ икс в квадрате? Это дэ икс в квадрате, правильно!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D0%BA'>#Боровик</a> О. Г. Математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Боровик О. Г."
},{
    "quote": "<div class='pi_text zoom_text'>Просто непозволительно, чтобы человек матерился! Он просто напросто не попадет в рай.<br/><br/>Тарасенко.Т.П. 'Культура речи' <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Тарасенко Т.П."
},{
    "quote": "<div class='pi_text'>*произносит монотонным, тихим голосом*<br/><br/>— И во время зачета живой позавидует мертвому. Шутка. Расслабьтесь.<br/><br/>Писаренков А. А. Иностранный язык. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Писаренков А. А."
},{
    "quote": "<div class='pi_text zoom_text'>- Знаете, я вам открою маленькую тайну: ничего так просто не происходит в мире.<br/><br/>Чалый В.В. 'Русский язык и культура речи' <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Чалый В.В."
},{
    "quote": "<div class='pi_text'>* говорит о теме исключения *<br/><br/>Ошибки могут генерироваться автоматически... Нет. Ошибки могут генерироваться только вами. Исключения генерируются автоматически ...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A3%D0%B2%D0%B0%D1%80%D0%BE%D0%B2%D0%B0'>#Уварова</a> А. В. Объектно-ориентированное программирование <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Уварова А. В."
},{
    "quote": "<div class='pi_text'>Ядовитая слюна Щеколдина растворяет любую математическую ересь.<br/><br/>* Плюет на доску и вытирает. *<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>*два студента разговаривают, входит преподаватель* <br/>С: Тогда, чему ты радуешься?<br/>П: Мат. анализу!<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Я даже не знаю, как выразить своё негодование. <br/><br/>Бондарев Д.Г. Эконометрика <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Бондарев Д.Г."
},{
    "quote": "<div class='pi_text zoom_text'>Я предпочитаю говорить о людях объективно.<br/><br/>Павлов Ю.М. 'Практическая журналистика' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text'>С: Я дико извиняюсь!<br/>П: Зачем вы дико извиняетесь? Извиняетесь цивилизованно!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Онлайновые СМИ<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text'>Дело пахнет интегралом!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D0%BD%D1%8F%D0%BA%D0%B8%D0%BD'>#Бунякин</a> А. В. Основы и математические модели механики сплошной среды<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Бунякин А. В."
},{
    "quote": "<div class='pi_text'>Вы же не здесь сидели. И причёска на прошлом занятии была другая, да? Ха! А хотите, чтобы я вас запомнил!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>То есть, что? Ничто - это что? <br/>Зачем? Ни зачем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0'>#Татаринова</a> Л. Н. История зарубежной литературы ХХ века.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринова Л. Н."
},{
    "quote": "<div class='pi_text'>Не нужно смешивать сложное и простое. Вот знаете Золушку? Рис отделить от гречки. Вопрос: зачем смешали?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B2%D0%B8%D0%BD'>#Савин</a> В. Н. Дифференциальные уравнения <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Савин В. Н."
},{
    "quote": "<div class='pi_text'>П: Назовите мне главного врага экономиста!<br/>*... после кучи вариантов*<br/>П: Время. А главного антропоморфного врага экономиста?<br/>С: Налоговик?<br/>П: Вообще-то,  я налоговик по профессии... <br/><br/>Алеников А.С. Контроллинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text'>- А автомат будет?<br/>- Автомат получат те, кто не закроет сессию.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BB%D1%8C%D0%B1%D0%B0'>#Кольба</a> А. И. Основы государственного и муниципального управления<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Кольба А. И."
},{
    "quote": "<div class='pi_text'>П: - Как думаете, можно ли поймать тигра в клетку?<br/>С: - Конечно.<br/>П: - А вот и нет! Все тигры в полоску!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В. Фундаментальные дискретные модели<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Конечно.<br/>П: - А вот и нет! Все тигры в полоску!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В."
},{
    "quote": "<div class='pi_text'>*староста делает опрос*<br/><br/>П: Кого хочешь вызвать, скажи мне?<br/>С: *молчит*<br/>П: Давай, быстро говори кого!<br/>С: 'Мальчика'... *называет фамилию*<br/>П: Ты должен быть счастлив, она тебя хочет!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>Если вы хотите поговорить - выйдите. Чем вас меньше, тем мне лучше. А если бы вас вообще не было, было бы вообще прекрасно. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#журфак_КубГу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'><a data-link='/feed?section=search&amp;q=%23%D0%95%D1%80%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Ермоленко</a> С. С. Моделирование информационных процессов <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Ермоленко С. С."
},{
    "quote": "<div class='pi_text'>*говорит студенту о религии*<br/> Понимаешь, какая-то хрень существует уже 2000 лет!<br/><br/>Щеколдин Г.А. Механика  <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>Что там за болтовня? Кому кости моем? Я для кого тут выпендриваюсь?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <br/><a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Эконом_КубГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>Философия - это то, чем занимаются философы, когда занимаются философией.<br/><br/>Спасов С.В.  Античная философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE'>#фисмо</a><a data-link='/feed?section=search&amp;q=%23%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Вы читали теорию? Если не читали - не надо, не забивайте себе голову!<br/><br/>Письменский А.В. Дифференциальные и разностные уравнения. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Письменский А.В."
},{
    "quote": "<div class='pi_text'>Рукопожатный релятивизм как котенок пристроился к телу классики.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Когда я слушаю рэп, у меня ощущение, что это у меня соседи за стенкой ругаются. И причём эти соседи - негры.<br/><br/>Толкачева Е.Г. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Толкачева Е.Г."
},{
    "quote": "<div class='pi_text'>*разговор об эпидемии коровьего бешенства в Европе*<br/>Вымирали целые стада, их хозяева рыдали, сжигали целые огромные кучи трупов... А знаете причину? Их кормили дорогим кормом, в котором было все, кроме полезного. Единственная страна, которую это не затронуло - Россия. У нас просто денег не захватило его купить. Все копили,  копили, но как-то не получилось.<br/><br/>Грушко Г.В. БЖД, <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Грушко Г.В."
},{
    "quote": "<div class='pi_text'>* Студентка затянула с ответом. Тишина. *<br/><br/>Здесь могла быть ваша реклама.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D0%B0%D0%BB%D1%8B%D0%B9'>#Чалый</a> В. В. Русский язык и культура речи<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text'>П: Какой по-вашему этот мир?<br/>С: Грешный?<br/>П: Кошмар! Даже я так не думаю...<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О.Н. Методологические проблемы журналистского творчества <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>П: Мы не успеваем, поэтому я дам вам домашнюю контрольную работу. <br/>С: Это как? <br/>П: Это как обычно, но только списывать вы будете не у меня под носом, а дома. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я. В. Математика и статистика  <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я. В."
},{
    "quote": "<div class='pi_text zoom_text'>Вот кто-то пожаловался на человека, они его цап-царап, в каталажку, сломали ему пару ребер, а он оооп... и не виноват. Неловко. <br/><br/>Левашов А.Ю. Прокурорский надзор. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Левашов А.Ю."
},{
    "quote": "<div class='pi_text zoom_text'>У человека после 40 лет можно найти кучу болячек. А этот прибор отпахал 45 лет, причем в таких жестких условиях, как общение с вами.<br/><br/>Савченко В. Ф. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Савченко В. Ф."
},{
    "quote": "<div class='pi_text'>* студентки заняты другой дисциплиной *<br/>С: Ты досчитала мат. ожидания?<br/>П: Какие мат. ожидания? Закрывайте теорию вероятностей, считайте углы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B0'>#Васильева</a> И. В. Дополнительные главы алгебры <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Васильева И. В."
},{
    "quote": "<div class='pi_text'>П: Вопросы у кого-нибудь есть?<br/>С: Есть!<br/>П: Тогда пара закончилась!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B0%D0%BF%D1%83%D1%81%D1%82%D0%B8%D0%BD'>#Капустин</a> М.С. Управление информацией <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Капустин М.С."
},{
    "quote": "<div class='pi_text'>- Ну, вот. Типичная блондинка.<br/>- Вообще-то я крашеная!<br/>- Вот! Типичная крашеная блондинка!<br/><br/>Гребенников О.В. Робототехника <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Гребенников О.В."
},{
    "quote": "<div class='pi_text zoom_text'>— Какая она будет — как Эйлер дал.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>С: - Извините, я сейчас кота уберу.<br/>П: - Не надо.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Вы не подписаны на меня в инстаграме? Как вам не стыдно вообще.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%8B%D1%87%D0%BA%D0%BE%D0%B2'>#Бычков</a> С.С Практический курс немецкого языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Бычков С.С"
},{
    "quote": "<div class='pi_text zoom_text'>Ну что, комбатанты, готовы слушать лекцию?<br/><br/>Малиновский О. Н. Международное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Малиновский О. Н."
},{
    "quote": "<div class='pi_text'>С: Я всего лишь стал общаться с очень творческими людьми. <br/>П: С наркоманами что ли?<br/><br/>Акопьян В. С. Рисунок, живопись<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Акопьян В. С."
},{
    "quote": "<div class='pi_text'>*преподаватель об экзамене*<br/>У меня в четверг туристы, географы и бандиты.<br/><br/>Узлов Ю.А. История России <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#биофак_КубГУ</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>ЧМО — чисто молодой обольститель.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Мальчик к мальчику не пристает. <br/><br/>Кирокосян М.А. Экономический анализ <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кирокосян М.А."
},{
    "quote": "<div class='pi_text'>Теоремы каких гениев вам уже известны? Лагранжа, Ролля, Ферма, Коши... Но вы забыли назвать главное: Мавроооооди.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ<br/> <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроооооди.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>В психушку сегодня жену отправить можно, но сложно.<br/><br/>Волгина А.П.  ИГПР <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA'>#юрфак</a></div>",
    "author": "Волгина А.П."
},{
    "quote": "<div class='pi_text'>...мне все равно кто есть, а кого нет .<br/>Вас все равно не существует....<br/>Мысль моя понятна?<br/><br/>Мороз О. Н. Современный литературный процесс <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>Эффект неожиданности чудовищно прекрасен. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Если вы так построете предложение, то ваш собеседник подумает, что у вас не всё окей с головой, вы ку-ку.<br/><br/>Писаренков А.А. Иностранный язык <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Писаренков А.А."
},{
    "quote": "<div class='pi_text'>А вот моя задача. Сам сочинял. Задача собственного розлива.<br/><br/>Гайденко С.В. Основные разделы элементарной математики.<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Гайденко С.В."
},{
    "quote": "<div class='pi_text'>*смотрит на исписанную доску*<br/>-Та-ак, а что это я тут надоказывал?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К.В. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Малыхин К.В."
},{
    "quote": "<div class='pi_text'>П: Можем мы проложить здесь сечение? <br/>С: Нет.<br/>П: Можем-можем. Не спорьте со мной, я всегда прав.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BA%D0%B0%D1%80%D0%B5%D0%B2'>#Бокарев</a> А. П. Основы начертательной геометрии<br/><a data-link='/feed?section=search&amp;q=%23%D1%85%D1%83%D0%B4%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#худграф_кубгу</a></div>",
    "author": "Нет.<br/>П: Можем-можем. Не спорьте со мной, я всегда прав.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BA%D0%B0%D1%80%D0%B5%D0%B2'>#Бокарев</a> А. П."
},{
    "quote": "<div class='pi_text zoom_text'>— Это сдохло, это сдохло; что осталось?<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>Литературоведение — это вещь для меня интимная, я с кем попало об этом не говорю.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%BE'>#Головко</a> В. А. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Головко В. А."
},{
    "quote": "<div class='pi_text'>Если бы Роулинг не придумала Слизерин, его бы придумал я.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2'>#Половодов</a> Ю. А. Механика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Половодов Ю. А."
},{
    "quote": "<div class='pi_text'>*речь идёт о поэзии Юрия Кузнецова'<br/>Мужчина в поэзии этого периода уподобляется творцу, который закрывает орущие рты, облагораживает глупые лица и творит женщину. Ему стоит только захотеть 'Покачнуться и любая твоя!'.<br/><br/>Вот он (Ю.К.) так один раз покачнулся... и 'сломал' себе многое!<br/><br/>Павлов Ю.М. История русской литературы 20 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text'>*пара на пятом этаже, внизу уже второй раз проезжает с ревом мотоцикл, препод выглядывая в окно*<br/>— Интересно.... это экономисты или философы? Наверное философы. Как он будет философствовать, если на него что-нибудь упадет?<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Естественно, все ваши причины опоздания являются уважительными, поэтому пускать на пару я вас не буду.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>Все мы живём в грустной сказке.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BD%D0%B4%D0%B0%D1%80%D0%B5%D0%B2'>#Бондарев</a> П. Б. Теоретическая и практическая педагогика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Бондарев П. Б."
},{
    "quote": "<div class='pi_text'>*идет лекция, заходит девушка*<br/>- Извините пожалуйста, а можно Юлию ... ?<br/>- Изыйди!<br/><br/>Штурба В. А. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Штурба В. А."
},{
    "quote": "<div class='pi_text'>Девушка должна со всех сторон энергичной быть. Вон, Софья Ковалевская, как Вейерштрасса окрутила. Тюх-тюх-тюх. Он её и доктором сделал, а она его тюх-тюх-тюх. И премию помог получить. Тюх-тюх-тюх. Так и надо.<br/><br/>Сергеев Э.А. Теория чисел <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9C%D0%B8%D0%9A%D0%9D_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФМиКН_кубгу</a></div>",
    "author": "Сергеев Э.А."
},{
    "quote": "<div class='pi_text zoom_text'>Хорошо быть кисею, хорошо собакою- где хочу...*молчание*...помечу ёлочку, где хочу - нет. Ну это уже административное правонарушение. <br/><br/>Клюев А.А. Квалификация преступлений <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Клюев А.А."
},{
    "quote": "<div class='pi_text'>С: Это природная красота.<br/>П: Ооу, что ж за природа такая... Как в Чернобыле.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D1%8F%D0%BD'>#Даниелян</a> А.С. Теория государства и права<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Чернобыле.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D1%8F%D0%BD'>#Даниелян</a> А.С."
},{
    "quote": "<div class='pi_text'>* Преподаватель рассказывает про королеву Англии. *<br/><br/>П: - Вы заметили, как искусно Елизавета подбирает шляпки к своим образам? Черт возьми, откуда она их берет?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Леванова</a> К. А. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Леванова К. А."
},{
    "quote": "<div class='pi_text zoom_text'>Все вокруг — тупое и безмозглое. Птички вон полетели. Дуры.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Онтология и теория познания</div>",
    "author": "Дуры.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А."
},{
    "quote": "<div class='pi_text'>Ааа... Вооот... Ну... Вот...<br/>Вот, ммм... Ну м вот... А, вооот....<br/>Вооооот, ммм.. вооот. Вот.<br/><br/>Мороз О.Н. на всех парах <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Нас в 3 раза меньше? Меня нормально, даже много.<br/><br/>Троян В.Г. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Троян В.Г."
},{
    "quote": "<div class='pi_text zoom_text'>Например, он в своей статье утверждает... (останавливается и обращается к студенту) Денис, даже вы напишете лучше! <br/><br/>Павлов Ю. М. Медиакритика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю. М."
},{
    "quote": "<div class='pi_text'>Я понимаю, что полтора часа высидеть невозможно. Но это возможно. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D1%83%D0%BA%D0%B0%D1%81%D0%BE%D0%B2%D0%B0'>#Гукасова</a> Э. М.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Гукасова Э. М."
},{
    "quote": "<div class='pi_text'>Пары — это борьба голода со сном.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B8%D0%BA%D1%83%D0%BB%D0%B8%D0%BD'>#Никулин</a> И. О.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Никулин И. О."
},{
    "quote": "<div class='pi_text'>Тот кварц, что, прошел такую большую школу жизни, что залег в песчанике?!<br/><br/>Бондарнко Н.А. Литология <br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Бондарнко Н.А."
},{
    "quote": "<div class='pi_text'>*разговаривает со студенткой*<br/><br/>П: - А ты меня кормить будешь? Я ем, как птичка.<br/>С: - Нуу...тогда буду.<br/>П: - А ты хоть знаешь сколько птичка ест?<br/>С: - Сколько?<br/>П: - Больше своего веса.<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Сейчас у вас стипендия 1500 рублей, на эти деньги можно целый день прожить...если дома сидеть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D0%B8%D0%BA'>#Болик</a> А.В. Экономика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Болик А.В."
},{
    "quote": "<div class='pi_text'>*заходит первый опоздавший студент*<br/>П: Открывается кружок 'Художественное слово'.<br/><br/>Чалый В.В. Русский язык и культура речи <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Чалый В.В."
},{
    "quote": "<div class='pi_text'>Вот, когда я училась, мы видели фигуры, которые не видно, и рисовали их.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE'>#Яременко</a> Л. А. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Яременко Л. А."
},{
    "quote": "<div class='pi_text'>П: Высокоинтеллектуальные люди не могут себе позволить смотреть сериалы. <br/>С: А вы смотрите? <br/>П: Я? Нет. У меня и телевизора нет. Есть только занятия. Вот когда их не было, смотрел что-то вроде 'Санта Барбары'. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>Чудеснейшая поэма! Кстати, она есть в вашем списке литературы, что, собственно, и доказывает её чудесность.<br/><br/>Татаринов А.В. Зарубежная литература средних веков и эпохи Возрождения<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>С : Подождите, пожалуйста! <br/>П : Конечно. <br/>*продолжает диктовать* <br/>Не подождём.<br/><br/>Шаповалов С. Н. История Кубани  <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шаповалов С. Н."
},{
    "quote": "<div class='pi_text'>Ну в общем, мне тут определённо не нравится две вещи: эта аудитория *небольшая пауза* и эта аудитория.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Линейная алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#матфак_КубГУ</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text zoom_text'>Серое вещество у вас в голове что-то долго делает физкультуру.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D1%80%D0%B5%D0%B3%D1%83%D0%B1%D0%BE%D0%B2%D0%B0'>#Трегубова</a> Е. Н. История русского литературного языка <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Трегубова Е. Н."
},{
    "quote": "<div class='pi_text'>Поисковые системы ведь тоже пишут не люди, а те, которые программисты! <br/><br/>Добровольская Н.Ю. Алгоритмы. Теория и практическое применение.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Добровольская Н.Ю."
},{
    "quote": "<div class='pi_text'>Сколько я напишу нулей после запятой? Аж до Динской! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F'>#Макаровская</a> Т. Г. Математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Макаровская Т. Г."
},{
    "quote": "<div class='pi_text'>С1 : Местное Самоуправление является отдельной системой, к госорганам никак не относится.<br/>П : Погодите-ка. Группа, а кто-нибудь думает иначе?<br/>С2 : Я! Я иначе думаю.<br/>П : Больше никогда, НИКОГДА... так не думайте!<br/><br/>Салфетников М.А. Военное Право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Салфетников М.А."
},{
    "quote": "<div class='pi_text zoom_text'>Студент - это круто! Это вам не в тапочки гадить.<br/><br/>Литвин А.В. Управление человеческими ресурсами <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Литвин А.В."
},{
    "quote": "<div class='pi_text'>Так, продолжаем, в правом столбике пишем 'добро', а в левом 'зло', как и другие отрицательные понятия. Ой, зло в правом написал. Простите, бес попутал.<br/><br/>Спасов С.В., 'Философия' <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>Чем больше ты мальчиков динамишь,тем сильнее они за тобой бегают. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%BE%D1%82'>#Хот</a> Ф.Т.<br/>Бухгалтерский (управленческий) учёт <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Хот Ф.Т."
},{
    "quote": "<div class='pi_text'>Куда идём мы с пятачком?<br/>Конечно за вином.<br/><br/>Штурба Е.В. Социология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Штурба Е.В."
},{
    "quote": "<div class='pi_text'>П: Когда кажется, то что?<br/>С: Креститься надо!!!<br/>П: Нет! Математики проверяют!<br/><br/>Бочаров А. В. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Бочаров А. В."
},{
    "quote": "<div class='pi_text'>П: На лекции ходите?<br/>С: Да.<br/>П: Аккуратно все записываете?<br/>С: Да.<br/>П: Домой приходите, все повторяете?<br/>С: Да.<br/>П: И ничего не понимаете?<br/>С: Да.<br/>П: Ну контрольную вы не сдадите...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К.В. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Да.<br/>П: Аккуратно все записываете?<br/>С: Да.<br/>П: Домой приходите, все повторяете?<br/>С: Да.<br/>П: И ничего не понимаете?<br/>С: Да.<br/>П: Ну контрольную вы не сдадите...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К.В."
},{
    "quote": "<div class='pi_text zoom_text'>Это наш шкурный вопрос.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BB%D1%8E%D1%81%D1%82%D0%B5%D0%BD'>#Тлюстен</a> С. Р. Теория вероятностей <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С. Р."
},{
    "quote": "<div class='pi_text'>П: Так может Вивальди неправильно играл? <br/>С: А кто знает, как правильно? <br/>П: Я знаю! <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>И доказываем условие для миниму-мо-ми-ма. Кажется, что то лишнее сказал.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Дифференциальная геометрия и топология<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text zoom_text'>Вам не кажется, что твОрог явно вкуснее, чем  творОг?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B6%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Кожевников</a> В.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Физтех_КубГУ</a></div>",
    "author": "Кожевников В.В."
},{
    "quote": "<div class='pi_text'>* преподаватель выставляет зачёт, студентка стоит сбоку и от длительного ожидания зачёток покачивается *<br/><br/>П: Боже, хватит, пожалуйста, а то у меня сейчас морская болезнь начнётся!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%88%D0%B5%D0%B2%D0%B0'>#Малышева</a> О. П. Второй иностранный язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Малышева О. П."
},{
    "quote": "<div class='pi_text'>Ладно, коллеги. Счастья, здоровья, детей побольше. Уходим тихо. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2'>#Петросов</a> Т. А. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Петросов Т. А."
},{
    "quote": "<div class='pi_text'>Так бывает, что ты не знаешь, что ты знаешь. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D1%8B%D1%81%D0%BA%D1%83%D0%B1%D0%BE%D0%B2'>#Выскубов</a> Е. В. Основы кибернетики <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Выскубов Е. В."
},{
    "quote": "<div class='pi_text'>Логика является бабушкой всех языков программирования.<br/><br/>Гарин С.В. Логика<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Гарин С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Не доводи меня до совершенства!<br/><br/>Щеколдин Г.А. Доп. главы по физике <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>П: Откуда вы взяли эти коэффициенты?<br/>С: Из методички...<br/>П: Молодец!<br/><br/>Нгуен Д. Т. Методы вычислительной математики <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Нгуен Д. Т."
},{
    "quote": "<div class='pi_text'>*препод отчитал весь материал семестра*<br/>С: Так следующая пара в четверг будет?<br/>П: Пара будет, нас не будет!<br/><br/>Гаркуша О.В. Основы Информатики <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Гаркуша О.В."
},{
    "quote": "<div class='pi_text'>Хуже воды в курсовых может быть только пена.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text'>Как вы относитесь к правам женщин в римском государстве? Вот есть одна девочка, не буду называть её имени...Сюзанна...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D1%8F%D0%BD'>#Даниелян</a> А.С Римское право <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С"
},{
    "quote": "<div class='pi_text zoom_text'>Компьютер хулиганит!<br/><br/>Кутер М.И. Бух. Учет <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>В аудиторию зашла девушка, молча выкинула стакан в мусорку и вышла.<br/>- Ну и ладно, видимо, большего я не достоин.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D0%BC%D0%B5%D1%86'>#Немец</a> Г. Н. Основы интегрированных коммуникаций <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Немец Г. Н."
},{
    "quote": "<div class='pi_text'>Раньше была лучше только сама молодость!<br/><br/>Жирма В.В. , физ.география России и ближнего Зарубежья<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text'>П: Так где эта точка?<br/>С: В голове?<br/>П: В голове у вас ничего нет. Только мозг. Кто не верит- может вскрыть себе череп и проверить. <br/><br/>Спасов.С.В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>П: А точно его Гефест звали?<br/>С: Сто процентов!<br/>П: Мда. Жесть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. Философия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Жесть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И."
},{
    "quote": "<div class='pi_text'>*студент страдающе зевнул*<br/>Так! Перестаньте! Зевота и дремота - заразительные вещи! Особенно в 8:00 утра во вторник.<br/><br/>Чалый В.В. Русский язык и культура речи. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Чалый В.В."
},{
    "quote": "<div class='pi_text'>П: День рождения - это тоже колебательное явление... Вот, староста, ты какого числа родился? Ну, какого? <br/>С: ...<br/>П: Понятно. Когда звезда сверкнула, тогда и я выпал.<br/><br/>Щеколдин Г.А. Доп. главы по физике <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>Экзамен - это социальная глупость!<br/><br/>Сухих С.А. Бизнес-коммуникации<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Сухих С.А."
},{
    "quote": "<div class='pi_text'>Закредитованы по самые помидоры.<br/><br/>Алеников А.С. Контроллинг<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text'>Что делать? Космически мыслить: по другой траектории лететь, сквозь кометы, к звездам...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Тест на дебильность.<br/><br/>Кутер М.И. Бухгалтерский учет <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>* Преподаватель пишет интеграл на доске, в нем присутствует буква 'а', быстро стирает с доски, студенты не успевают писать, в очередной раз, когда быстро стирает с доски, студентка говорит 'ааааааааааа' *<br/><br/> П: Зачем нам 'а'? Это константа, константа + константа будет константа, константы нас не интересуют.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Ты далеко сидишь, но если бы ты сидела близко ко мне, то я бы сел тебе на колени и показал, что такое вербальное...общение.<br/><br/>Штурба В.С. Социология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Штурба В.С."
},{
    "quote": "<div class='pi_text'>*кто-то один разговаривает*<br/>- Так, все встали!... Продолжим.<br/><br/>Цалюк В.З. Технологии программирования <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Цалюк В.З."
},{
    "quote": "<div class='pi_text'>*в группе разгорелся сильный и шумный спор*<br/><br/>Филологический базар работает без выходных!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература Средних веков и эпохи Возрождения<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Как?! Вы не знаете ислам?!<br/><br/>Щеколдин Г. А. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text zoom_text'>Любое общечеловеческое живёт только в конкретном.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D0%BD%D1%87%D0%B0%D1%80%D0%BE%D0%B2'>#Гончаров</a> Ю. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Гончаров Ю. В."
},{
    "quote": "<div class='pi_text'>Мужчины - это скоты, но они поддаются дрессировке.<br/><br/>Арламов А.А <br/>Социальная педагогика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A'>#ФППК</a></div>",
    "author": "Арламов А.А"
},{
    "quote": "<div class='pi_text zoom_text'>Если не можете ответить на вопрос, то сделайте как обычная нормальная девочка: расплачьтесь. <br/><br/>Даниелян А. С. Теория государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text'>П: *задал вопрос,не получив на него ответа* <br/>П: Ну? Веселье должно охватить вас!Ваше мнение наконец-то хоть кого-то заинтересовало!<br/><br/>Спасов.С.В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>Сейчас будет fun. <br/><br/>Шершнева Н.Б. Лингвострановедение Великобритании<br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Шершнева Н.Б."
},{
    "quote": "<div class='pi_text'>Я тебе зевну!!<br/><br/>Гончаров Ю.В. <br/>Литература изучаемых стран <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#РГФ_КубГу</a></div>",
    "author": "Гончаров Ю.В."
},{
    "quote": "<div class='pi_text'>*студенты собираются писать тест*<br/><br/>- Учебники, альбомы и тетради закрываем. Там спойлер.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BE%D0%B7%D1%83%D0%BB%D1%8F'>#Зозуля</a> Л.В. Биология человека <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Зозуля Л.В."
},{
    "quote": "<div class='pi_text'>*у преподавателя непонятный почерк, он,видимо, это сам понимает*<br/>Что-то эта ручка не располагает к каллиграфии...<br/><br/>Тен О.К. Топология <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О.К."
},{
    "quote": "<div class='pi_text zoom_text'>Здесь вам не там!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD%D0%BE%D0%B2'>#Логинов</a> В.В., <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Логинов В.В."
},{
    "quote": "<div class='pi_text'>Ферштейн?!<br/><br/>Сопкин П. Т. 'Основы <br/>журналистской деятельности'. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Сопкин П. Т."
},{
    "quote": "<div class='pi_text zoom_text'>Присаживайтесь, повеселили... но не удовлетворили.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AE%D0%B2%D0%BA%D0%BE'>#Ювко</a> М.А. История отечественного государства и права. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text zoom_text'>Ноги - это не предмет для разговора. Особенно женские.<br/><br/>О.Н Мороз История зарубежной литературы, <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Когда я была молодой и красивой...<br/><br/>Будовская М.А. Климатология и метеорология <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#географ_КубГУ</a></div>",
    "author": "Будовская М.А."
},{
    "quote": "<div class='pi_text'>*рассказывает про ученого, чью теорию раскритиковали*<br/>Сейчас бы он выложил это вк, а вы бы ставили лайки или писали в комментариях 'фу, убейся'.<br/><br/>Нюхтилин П.В.<br/>Вебдизайн <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Нюхтилин П.В."
},{
    "quote": "<div class='pi_text'>Я не буду усложнять, я просто сложнее напишу.<br/><br/>Дроботенко М. И. Основы компьютерных наук<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Дроботенко М. И."
},{
    "quote": "<div class='pi_text zoom_text'>- Только подумайте, студенты прикладной математики не умеют играть в шахматы!!! Покемонов ловить - ВО! А в шахматы играть не умеют...<br/><br/>Логинов В.В., <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Логинов В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Ведьм за что в средневековье сжигали? За макетирование картонной упаковки!<br/><br/>Ажгихин С.Г. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Ажгихин С.Г."
},{
    "quote": "<div class='pi_text'>С: Архилох был одним из самых известных поэтов древней Греции.<br/>П: Конечно, одним из самых! Архилох всем лохам лох!<br/><br/>Спасов С. В. Античная философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Мышечная система - это мать, костная - отец.<br/><br/>Кравченко Г.Г. Академическая живопись <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Кравченко Г.Г."
},{
    "quote": "<div class='pi_text'>Всем огромный ПРИВЕТ!!!<img alt='❤' class='emoji' src='/emoji/e/e29da4.png'/><img alt='🎊' class='emoji' src='/emoji/e/f09f8e8a.png'/><img alt='🎉' class='emoji' src='/emoji/e/f09f8e89.png'/> <br/>SPACE PARTY <img alt='⃣' class='emoji' src='/emoji/e/3e283a3.png'/>снова в деле! <img alt='🤩' class='emoji' src='/emoji/e/f09fa4a9.png'/><img alt='🤯' class='emoji' src='/emoji/e/f09fa4af.png'/><img alt='😎' class='emoji' src='/emoji/e/f09f988e.png'/> <br/>Ещё круче! Мы снова дарим подарки от наших партнёров! Снова танцуем всю ночь и провожаем весну, встречая лето<img alt='🔥' class='emoji' src='/emoji/e/f09f94a5.png'/><img alt='💥' class='emoji' src='/emoji/e/f09f92a5.png'/> <br/>С каждым разом доказывая, что SPACE PARTY-лучшая студенческая вечеринка Краснодара <img alt='👊🏼' class='emoji' src='/emoji/e/f09f918af09f8fbc.png'/>! <br/>Снова ВСЕГО <img alt='⃣' class='emoji' src='/emoji/e/1e283a3.png'/><img alt='⃣' class='emoji' src='/emoji/e/0e283a3.png'/><img alt='⃣' class='emoji' src='/emoji/e/0e283a3.png'/> билетов на один ВУЗ, так что придётся поторопиться! <img alt='😉' class='emoji' src='/emoji/e/f09f9889.png'/><img alt='😏' class='emoji' src='/emoji/e/f09f988f.png'/> <br/>Если ты студент КубГУ, КубГАУ, РГУП, РЭУ, КубГМУ, то мы ждём тебя <img alt='🤪' class='emoji' src='/emoji/e/f09fa4aa.png'/> <br/><img alt='❤' class='emoji' src='/emoji/e/e29da4.png'/><img alt='‼' class='emoji' src='/emoji/e/e280bc.png'/>ЗАПОМИНАЙ <img alt='‼' class='emoji' src='/emoji/e/e280bc.png'/><img alt='❤' class='emoji' src='/emoji/e/e29da4.png'/> <br/><img alt='🥂' class='emoji' src='/emoji/e/f09fa582.png'/> 31 мая(четверг) в 23:00 <br/><img alt='🔞' class='emoji' src='/emoji/e/f09f949e.png'/> ресторан-бар La Villa (ул. Рашпилевская, 106А) <br/><img alt='💣' class='emoji' src='/emoji/e/f09f92a3.png'/> за перфоманс у микрофона отвечает @akapellastar <br/><img alt='🎸' class='emoji' src='/emoji/e/f09f8eb8.png'/> По вопросам раскачки танцпола отвечают: <br/>DJ VAGE <br/>DJ MUTTI <br/>DJ MANILOVE <br/><img alt='🌟' class='emoji' src='/emoji/e/f09f8c9f.png'/>DRESS CODE: CASUAL(кэжуал)<img alt='👔' class='emoji' src='/emoji/e/f09f9194.png'/> <img alt='👠' class='emoji' src='/emoji/e/f09f91a0.png'/> <br/><img alt='💸' class='emoji' src='/emoji/e/f09f92b8.png'/>Цена пригласительного: 300₽ <br/><img alt='📲' class='emoji' src='/emoji/e/f09f93b2.png'/>Бронь столов(1000₽/чел)/покупка пригласительных(300₽): +7(988)6666551 (WhatsApp) <br/>+18(при себе иметь документ удостоверяющий личность) <br/>Наши партнёры: <br/>@am_solange_boutique (бутик женской одежды) <br/>@green_luck_coffee (лучший кофе в городе)<br/>@inferno.krd (кальянная на ЮМР) <br/>Маэстро (стоматологическая клиника) <br/><img alt='💫' class='emoji' src='/emoji/e/f09f92ab.png'/>Стань частью истории вместе с нами!</div>",
    "author": "Снова ВС"
},{
    "quote": "<div class='pi_text'>*разговор о версиях убийства*<br/>Она не мертвецки пьяная, она мертвецки мёртвая.<br/><br/>Натура А.И. Криминалистика <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Натура А.И."
},{
    "quote": "<div class='pi_text'>* пересаживает студентку на первую парту *<br/><br/>Это ваше место отныне и во веки веков. Аминь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%BE%D0%B1%D1%81%D0%BA%D0%B8%D0%B9'>#Робский</a> В. В. Основы специальной педагогики и психологии<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Аминь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%BE%D0%B1%D1%81%D0%BA%D0%B8%D0%B9'>#Робский</a> В. В."
},{
    "quote": "<div class='pi_text'>П: Что же фиксирует бух.учёт?<br/>С: Финансовые потоки предприятия.<br/>П: А что вы понимаете под финансовыми потоками? А то у кого-то потоки, а у кого-то ручейки.<br/><br/>Гайденко В. В., финансовый аудит<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Гайденко В. В."
},{
    "quote": "<div class='pi_text'>Мы найдем ответ, если выйдем из пещеры... Это не ночной клуб так называется, если что.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В. Основы космологии<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text'>Если вы Бэтмен, значит ваша любовь — это справедливость.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2'>#Петросов</a> Т. А. Философия.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Петросов Т. А."
},{
    "quote": "<div class='pi_text'>П: Какая вы группа? <br/>С: Прикладной бакалавриат.<br/>П: Что к чему прикладывать?<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D0%B5%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>#Малевинский</a> С. О. История русского литературного языка <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Малевинский С. О."
},{
    "quote": "<div class='pi_text zoom_text'>О чем мы? Опять о любви-злодейке...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD%D0%BE%D0%B2'>#Логинов</a> В. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Логинов В. В."
},{
    "quote": "<div class='pi_text'>Зачем мы всё это учим? Чтобы знать!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Малиновский</a> О. Н. Международное право<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Малиновский О. Н."
},{
    "quote": "<div class='pi_text'>Вот у вас компьютер как говорит, если ошибка:<br/>— ТЫ ДУРАК! Исправь там это!<br/>А у нас в теории не так. Говорят:<br/>— ТЫ ИДИОТ!? <br/> Вы компьютерщики, должны понимать. Ясно, да?!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B8%D1%82%D0%BE%D0%B2'>#Титов</a> Г. Н. Фундаментальная и компьютерная алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Титов Г. Н."
},{
    "quote": "<div class='pi_text'>*начало пары*<br/>История!  ...<br/><br/>Хачиянц А.И. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Хачиянц А.И."
},{
    "quote": "<div class='pi_text zoom_text'>Мне кажется, экзамен будете вы у меня принимать, а не я у вас.<br/><br/>Выскубов Е.В.  Архитектура вычислительных систем. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Выскубов Е.В."
},{
    "quote": "<div class='pi_text'>А если у вас ещё нет демократии, тогда мы летим к вам. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D1%85%D0%B1%D0%B0%D0%B7%D1%8F%D0%BD'>#Шахбазян</a> М.А. История античной литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шахбазян М.А."
},{
    "quote": "<div class='pi_text'>Ну мы устно видим.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE'>#Яременко</a> Л. А.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Яременко Л. А."
},{
    "quote": "<div class='pi_text zoom_text'>За Аристотеля ответишь. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С. В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>*студентам*<br/>Мне кажется, что вы каждый месяц там у себя в голове генералите.<br/><br/>Цалюк М.В. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Цалюк М.В."
},{
    "quote": "<div class='pi_text'>П: Математика была создана женщинами. Одним словом, женская логика.<br/>С: Теперь понятно почему ни то, ни другое нам не понятно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D1%88%D0%B5%D0%BD%D1%86%D0%B5%D0%B2%D0%B0'>#Пашенцева</a> В. В. Дифференциальные исчисления<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Пашенцева В. В."
},{
    "quote": "<div class='pi_text'>* проверяет дз, перепутал одну фамилию с другой*<br/>П: Так у вас тоже нет домашнего задания? Чего вы скрываетесь-то?<br/>С: Так я вам сразу сказал, что у меня нет домашки.<br/>П: Да нет, это я вам сказал, что у вас нет...<br/><br/>Гаврилюк М. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Гаврилюк М. Н."
},{
    "quote": "<div class='pi_text'>* заглядывает в тетрадь студента *<br/>Кто тут без предела пишет? Беспредельщики!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D1%84%D0%B0%D0%BD%D0%B0%D1%81%D1%8C%D0%B5%D0%B2%D0%B0'>#Афанасьева</a> Т. Н. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Афанасьева Т. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Девочка, меняй образ жизни, выкрашивай трезвой!<br/><br/>Ажгихин С.Г <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Ажгихин С.Г"
},{
    "quote": "<div class='pi_text'>Человек по природе своей ленивая скотина. Ну, так уж получилось. <br/><br/>Малевинский С.О 'Русский язык и культура речи'<br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Малевинский С.О"
},{
    "quote": "<div class='pi_text zoom_text'>Никогда не говорите, что вы объект, я Вас умоляю! Нет, Вы, возможно, объект вожделения, но я этого не знаю...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Раньше говорили 'я туплю', а сейчас — 'когнитивный диссонанс' .<br/><br/>Шемелева Т. В. Современный русский язык: словообразование и морфология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Шемелева Т. В."
},{
    "quote": "<div class='pi_text zoom_text'>Вы уже так долго боритесь с гравитацией, что вы хотите сказать? Что именно сейчас вас прижимает к земле? <br/><br/>Ювко М.А.  <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>И он решил убить свою мать. Добрый сын. Три раза он ее убивал. Три раза она не убивалась.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D0%B6%D0%BA%D0%BE'>#Перенижко</a> О. А Всеобщая история<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Перенижко О. А"
},{
    "quote": "<div class='pi_text zoom_text'>Уголовного хулиганства там, собственно, не было. Но эти... 'пуськи', тем не менее, сели.<br/><br/>Петровский А.В. Зарубежное Уголовное Право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Петровский А.В."
},{
    "quote": "<div class='pi_text'>Я сначала сказала, потом подумала, потом сказала.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%B1%D0%B5%D1%80%D1%91%D0%B7%D0%BA%D0%B8%D0%BD%D0%B0'>#Подберёзкина</a> А. И. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Подберёзкина А. И."
},{
    "quote": "<div class='pi_text'>Вот такой наш мир... Хоть не «Бауцентр»!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D0%B6%D0%B8%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0'>#Тажидинова</a> И. Г. Социология культуры<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Тажидинова И. Г."
},{
    "quote": "<div class='pi_text'>* преподаватель выводит формулу на доске *<br/><br/>С: - А куда коэффициент K делся?<br/>П: - А это как в том фильме... Тут были демоны? Да, были демоны!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D1%8B%D1%81%D0%BA%D1%83%D0%B1%D0%BE%D0%B2'>#Выскубов</a> Е. В. Основы кибернетики<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Выскубов Е. В."
},{
    "quote": "<div class='pi_text'>Очень часто мы нервничаем, пытаясь принять решение. Как правило, чтобы избавиться от этого волнения, достаточно собрать всю информацию<br/>о проблеме, и тогда решение приходит само собой!<br/><br/>Жирма В.В. Методы географических исследований<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text'>*студент Валерий спустя n-ное количество пропусков появился на паре*<br/>— Валера, настало твоё время! Давай!<br/><br/>Ювко М.А. ТГП <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>Первые люди пришли на Кубань 500 тысяч лет назад. Ну, не совсем люди. Помните, я вам рисовал бабушку-дриопитечку, которая была похожа на собачку? Вот такие люди на Кубань пришли.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История Кубани<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text zoom_text'>Любовь - она ни о чем.<br/><br/>Мороз О.Н. 'История античной литературы' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Вы эту задачу не потянете, потому что надо уметь думать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>Там зарплаты такие, что человек может вести такую... Исследовательскую жизнь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text zoom_text'>Вы же бакалавры - не пойми что!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B5%D0%BD%D0%BA%D0%BE'>#Тарасенко</a> Т. П. Основы теории коммуникации <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Тарасенко Т. П."
},{
    "quote": "<div class='pi_text'>С: - Я отсутствовал, потому что была сложная семейная ситуация, которая только недавно разрешилась.<br/>П: - Вы женаты?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B7%D0%B8%D0%B4%D0%B7%D0%BE%D0%B5%D0%B2'>#Дзидзоев</a> Р. М. Конституционное право зарубежных стран<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Дзидзоев Р. М."
},{
    "quote": "<div class='pi_text zoom_text'>— Думаете, Утков опять лапшу на уши вешает? Но какая это лапша! Длинная, тонкая — попробуй ухватить.<br/><br/>Утков Г. Н. Современный русский язык <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г. Н."
},{
    "quote": "<div class='pi_text'>- Где ваш учебник?<br/>- Он слишком старый, он мне не нравится.<br/>- Это вам не парень, чтобы нравиться.<br/><br/>Даниелян А.С. ТГП <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text'>*после лабораторной*<br/>По итогам выясним, кого и куда поцеловала криминалистика.<br/><br/>Бондаренко Ю.А Криминалистика.<a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Бондаренко Ю.А"
},{
    "quote": "<div class='pi_text'>Расчехляем наше идеальное мышление.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text'>*разговор о том, что студенты не понимают объёмную геометрию*<br/>- Ну неужели МУЖИКИ не могут смотреть сквозь стены???<br/><br/>Ярёменко Л.А. Теория функций комплексного переменного <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9C%D0%B8%D0%9A%D0%9D_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФМиКН_кубгу</a></div>",
    "author": "Ярёменко Л.А."
},{
    "quote": "<div class='pi_text'>Представьте, взяла она в кулачок его ножку и говорит ему: «Какой ты у меня крутой самец».<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>*говоря о плохо написанной программе*<br/>-Ну, ничего. Дворник тоже профессия, пять тысяч тоже зарплата.<br/><br/>Харченко А.В. Практикум по программированию<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Харченко А.В."
},{
    "quote": "<div class='pi_text'>-Чем руководствовалась 'Матрона' перед сближением с рассказчиком?<br/>-Страждущая она была.<br/>-А точнее?<br/>-Секса ей хотелось.<br/>-Нет, не то.<br/>-Ну, неудовлетворенная она была.<br/>-Так, физиологию вашу будете в другом месте применять. <br/><br/>Мороз О.Н. 'История античной литературы' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Не нужно никогда психовать! Ведь можно просто лечь и умереть.<br/><br/>Кравченко Г.Г. Академическая живопись<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Кравченко Г.Г."
},{
    "quote": "<div class='pi_text'>Нууу...если очень надо...<br/><br/>Шаповаленко В.В. Высшая математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#геолог_КубГУ</a></div>",
    "author": "Шаповаленко В.В."
},{
    "quote": "<div class='pi_text'>Щас соображу!!!<br/><br/>Бочаров А.В<br/>Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Бочаров А.В"
},{
    "quote": "<div class='pi_text'>Вот вы все: химики, физики, математики закончите обучение. И встретитесь вы где? Ну где? На рынке вы встретитесь! Будете торговать. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>*после шутки преподавателя все посмеялись, пауза*<br/>-Хммм, хорошо пошутил. Да. Не всегда так получается.<br/><br/>Тен О.К. Дифференциальная геометрия и топология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9C%D0%B8%D0%9A%D0%9D_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФМиКН_кубгу</a></div>",
    "author": "Тен О.К."
},{
    "quote": "<div class='pi_text'>К концу турнира у этой женщины было видно руки и даже щиколотки. Такой вот средневековый секс.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BA%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Ткаченко</a> Литература стран изучаемых языков <br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Ткаченко"
},{
    "quote": "<div class='pi_text zoom_text'>П: Как говорится, размер не имеет значения; главное содержание.<br/><br/>Спасов С.В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>Служить будут все!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B2%D0%B5%D1%80%D0%B3%D1%83%D0%BD'>#Свергун</a> С. В.<br/>Мобилизационный отдел</div>",
    "author": "Свергун С. В."
},{
    "quote": "<div class='pi_text'>*рассказывает, что мы тут все в университете делаем*<br/>- Wir gehen in der Universität nicht штаны zu просиживать!<br/><br/>Бычков С.С. Немецкий язык <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Бычков С.С."
},{
    "quote": "<div class='pi_text zoom_text'>Излишняя инициатива - это уже не инициатива. Всему своё время.<br/><br/>Чалый В. В. Русский язык и культура речи. <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a>.</div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Что это вас так мало? Эпидемия какая-то началась?<br/><br/>Ермоленко С.С. Объектно-ориентированное решение задач. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Ермоленко С.С."
},{
    "quote": "<div class='pi_text'>*девочка в медицинской маске отпрашивается*<br/>С: Можно выйти?<br/>П: Куда?<br/>С: В коридор.<br/>П: Что, теперь в коридоре будешь всех пугать?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С. В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>* проверяет ответ на экзамене *<br/>— И понесло Остапа!<br/><br/>Афанасьева Т. Н. Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Афанасьева Т. Н."
},{
    "quote": "<div class='pi_text'>Если желающих нет, то они будут.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BD%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Бондаренко</a> Ю. А. Профессиональная этика юриста<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Бондаренко Ю. А."
},{
    "quote": "<div class='pi_text'>Я не злопамятный, но я злой, и у меня хорошая память. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D1%81%D1%82%D0%B0%D1%88%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Осташевский</a> А. В. Правовые основы журналистики. <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А. В."
},{
    "quote": "<div class='pi_text'>С: Что вы нарисовали на доске?<br/>П: Вы, конечно, извините, но это - мозг журналиста.<br/><br/>Осташевский А.В., правовые основы журналистики <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>Любовь - это когда ты отдаёшь больше, чем хочешь получить. А влюблённость наоборот. <br/><br/>Белоконь Т.М. Теоретическая и практическая педагогика <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Белоконь Т.М."
},{
    "quote": "<div class='pi_text zoom_text'>В каждой культуре есть свой размер интимной зоны.<br/><br/>Тарасенко Т.П.  Основы теории коммуникации <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Тарасенко Т.П."
},{
    "quote": "<div class='pi_text zoom_text'>Лучше иметь синий диплом и красное лицо, чем иначе... Красный диплом и синее лицо.<br/><br/>Остапенко А.А. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Остапенко А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Кто будет списывать - зачмырю! <br/><br/>Кирокосян М.А. Финансовый анализ. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кирокосян М.А."
},{
    "quote": "<div class='pi_text zoom_text'>Лень - это полезная вещь!<br/><br/>Титов Г.Н. Алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#матфак_КубГУ</a></div>",
    "author": "Титов Г.Н."
},{
    "quote": "<div class='pi_text'>*задаёт вопрос - в ответ тишина*<br/>П: Девочки, ну вы хоть просматривайте мои лекции иногда, чтобы не быть лохушками!<br/><br/>Малевинский С.О. Старославянский язык<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#филфак_КубГу</a></div>",
    "author": "Малевинский С.О."
},{
    "quote": "<div class='pi_text'>*студент не очень хорошо подготовил презентацию*<br/>П: У Вас было две недели, чтобы опозориться. Вы могли хотя бы позориться симпатичнее?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%BE'>#Головко</a> В. А. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Головко В. А."
},{
    "quote": "<div class='pi_text zoom_text'>— Кому грустно, может погреться возле кондиционера.<br/><br/>Тен О. К. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text zoom_text'>Девочки ходят у нас с дырочками...<br/><br/> Г.Н. Утков про кроп-топы <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г.Н."
},{
    "quote": "<div class='pi_text'>Какой пример для представления вам привести, чтобы продемонстрировать несостоятельность представления?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>*ходит по аудитории в тишине и роняет ключи, которые звонко падают на пол*<br/><br/> Студентка, не отрываясь от ноутбука:<br/>- Не шумите тут!<br/>Преподаватель с улыбкой:<br/>- А вот это ты зря ...<br/><br/>Май В.А. Техника и технология видеосъемки и видеомонтажа <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Май В.А."
},{
    "quote": "<div class='pi_text'>* Преподаватель пишет на доске имена библейских пророков. Из-за высохшего маркера было плохо видно. *<br/><br/>С: - А вы можете Иезекииля обвести?<br/>П: - Обвести Иезекииля? Как бы он нас не обвёл.... Ну, попробуем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. История мировой (зарубежной) литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Если случится что-то плохое, то двойка по экономической теории не повод для самоубийства.<br/><br/>Сидоров В. А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>Если у вас не будет совести, то у вас не будет зачёта!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%82%D1%82%D0%BE'>#Бутто</a> О. Л. Введение в филологию<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Бутто О. Л."
},{
    "quote": "<div class='pi_text'>Бывает задумался, очнулся - а уже февраль. <br/><br/>Костенко К.И. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>*рассуждая о внешнем виде толстых тётушек*<br/>Там такой чехол от танка, а они называют это одеждой для полных!<br/><br/>Пономаренко И.Н. Лексикология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Пономаренко И.Н."
},{
    "quote": "<div class='pi_text zoom_text'>— Мозг распался на атомы и обратно не собирается.<br/><br/>Афанасьева Т.Н. Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Афанасьева Т.Н."
},{
    "quote": "<div class='pi_text'>Вы же математики-прикладники. Надо прикладываться уметь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Да что вы так на него набрасываетесь? Базаров клевый чувак!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%BE'>#Головко</a> В.А. Основы теории литературы <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Головко В.А."
},{
    "quote": "<div class='pi_text'>*биография Державина,рассказывает про его первую жену*<br/>С: Она что, из за него умерла?<br/>П: Ну, почему из-за него то? Можно и так сказать...<br/>С: Это из-за нервов?<br/>П: В те времена было все иначе. Это сейчас дамы такие, что от их психов сходят с ума мужья, а не наоборот. Хотя, я бы хотел, чтобы было наоборот. Исключительно в целях гуманизма!.....шутка! Ну правда.<br/><br/>Мороз О.Н. История русской литературы 18 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>— Ой, да знаю я этих отличников: 'Ааа, я ничего не выучил!'. Да-да, 4-5 дней он сидел, ничего не выучил. Вечно мне шестёрки портили.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D1%8F%D0%BD'>#Даниелян</a> А. С. Римское право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text zoom_text'>Если вас к кому-то тянет, подумайте, потому что силы притяжения - отрицательные силы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2'>#Рубцов</a> С.Е. Физика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Рубцов С.Е."
},{
    "quote": "<div class='pi_text'>П: Были ли в Древней Греции Университеты?<br/>С: да<br/>А: Обломись, Бабуля. Сделай паузу, скушай твикс.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов"
},{
    "quote": "<div class='pi_text zoom_text'>Ты отказываешь мне в развитии, если я не верю в Большой Взрыв? <br/><br/>Лысенко В.Е. 'Астрофизика' <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Лысенко В.Е."
},{
    "quote": "<div class='pi_text'>В конце пары:<br/>Все свободны, как трусы без резинки.<br/><br/>Щеколдин Г.А. Доп. главы по физике <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>П: Где существуют числа?<br/>С: В окружающем мире.<br/>П: Пойдем поищем. Где они? На деревьях висят?<br/><br/>Спасов С.В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Грустить вам идёт больше!<br/><br/>Штурба В.А. История образования и педагогики <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Штурба В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Так, рыжие и умные руки опустили, дайте другим шанс.<br/><br/>Любин В. А. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Если вам покажется, что я груб или стебаюсь, то я всегда себя так веду.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B8%D1%88%D0%BD%D1%8F%D0%BA%D0%BE%D0%B2'>#Вишняков</a> Р. Ю. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9C%D0%B8%D0%9A%D0%9D_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФМиКН_КубГУ</a></div>",
    "author": "Вишняков Р. Ю."
},{
    "quote": "<div class='pi_text'>Смысл понятен?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%B2%D0%B0'>#Толстова</a> А. З. Мировая экономика и МЭО<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Толстова А. З."
},{
    "quote": "<div class='pi_text'>*непрерывный поток юмора и иронии в отношении отвечающей студентки*<br/>*недоумевающей взгляд преподавателя*<br/><br/>— Что-то вас сегодня как-то кроет, коллеги! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2'>#Петросов</a> Т.А. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#матфак_КубГУ</a></div>",
    "author": "Петросов Т.А."
},{
    "quote": "<div class='pi_text'>С: А почему мы именно таким способом решили задачу?<br/>П: Победителей не судят!<br/><br/>Кожевников В. В.<br/>Аналитическая геометрия<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кожевников В. В."
},{
    "quote": "<div class='pi_text'>П: И какие женщины будут повторяться?<br/>С: Разные.<br/>П: Разные?<br/>С: Да.<br/>П: А разные женщины - неповторимы.<br/><br/>Босенко М.В. Математическая статистика <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#фуп_КубГУ</a></div>",
    "author": "Босенко М.В."
},{
    "quote": "<div class='pi_text'>Сообразили? Да?<br/>Почувствовали?<br/><br/>Костенко К.И<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C'>#ФКТиПМ</a></div>",
    "author": "Костенко К.И"
},{
    "quote": "<div class='pi_text'>Это утверждение не столь капитаночевидно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2'>#Половодов</a> Ю. А. Механика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Половодов Ю. А."
},{
    "quote": "<div class='pi_text zoom_text'>Вам понятно?...Ну кому-то понятно, а кто-то попал...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В. Функциональный анализ <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин К. В."
},{
    "quote": "<div class='pi_text'>* рассказывает про рождение ребенка, в этот момент студент скривил лицо *<br/><br/>- Маэстро, вы чего скривились? А вы думали, вас инопланетяне принесли? <br/><br/>Орёл А. А. Психология <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Орёл А. А."
},{
    "quote": "<div class='pi_text'>Девушки на последней парте, ваши предположения? Не правильно... ранена, ранена, ранена, убиты. <br/>Молчите! Вы уже утонули.<br/><br/>Ювко М.А. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text zoom_text'>Если у нас и были шизофреники, то они были тихими.<br/><br/>Гутник Е. П. Введение в псих-пед деятельность <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФППК_КубГу</a></div>",
    "author": "Гутник Е. П."
},{
    "quote": "<div class='pi_text zoom_text'>Женщинам больше трёх собираться нельзя. <br/><br/>Нюхтилин П. В. Вебдизайн <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Нюхтилин П. В."
},{
    "quote": "<div class='pi_text'>П: В организации часто человек-человеку дятел.<br/>*недоумевающие взгляды студентов* П: Ну стучат друг на друга !<br/><br/>Флоровский С.Ю. Психология управления. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Флоровский С.Ю."
},{
    "quote": "<div class='pi_text'>П: А зачем вы сделали это задание? <br/>С: Ну мы думали, что....<br/>П: Думать не задавали!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B5%D1%80%D1%88%D0%BD%D0%B5%D0%B2%D0%B0'>#Шершнева</a> Н.Б. Практический курс английского языка. <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Шершнева Н.Б."
},{
    "quote": "<div class='pi_text zoom_text'>Зло есть зло. И не надо его обелять.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BD%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Бондаренко</a> Ю.А Профессиональная этика и служебный этикет <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Бондаренко Ю.А"
},{
    "quote": "<div class='pi_text'>- Записываем новую тему: 'КомплЕксные числа.'<br/>- Может кОмплексные?<br/>- КОмплексной бывает только неполноценность.<br/><br/>Гортинская В.В. Алгебра и аналитическая геометрия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Гортинская В.В."
},{
    "quote": "<div class='pi_text'>П: Сейчас схожу в деканат узнаю новости.<br/>С: Хорошо.<br/>* прошло минут 40* <br/>П: Зря пришли. Новости заключаются в том, что вы больше не в моей нагрузке. Всем до свидания!<br/>* уходит * <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2'>#Терешенков</a> В.А. Безопасность жизнедеятельности <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Хорошо.<br/>* прошло минут 40* <br/>П: Зря пришли. Новости заключаются в том, что вы больше не в моей нагрузке. Всем до свидания!<br/>* уходит * <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2'>#Терешенков</a> В.А."
},{
    "quote": "<div class='pi_text'>Я ничего плохого не сказал. Хорошего, кстати, тоже.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>Нравится модель? Вот эту хрень придумал я!<br/><br/>Ермоленко В.В. Основы теории управления<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Ермоленко В.В."
},{
    "quote": "<div class='pi_text'>Поверьте, в Арбитражном суде судятся очень обеспеченные люди, это по КАСу судится голытьба. <br/><br/>Берлизов М.П. Административный процесс. <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Берлизов М.П."
},{
    "quote": "<div class='pi_text'>Вы что не умеете концентрироваться? Концентрироваться надо на концентрации.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B2%D0%B8%D0%BD'>#Савин</a> В. Н. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Савин В. Н."
},{
    "quote": "<div class='pi_text'>Я знаю другое произведение Бориса Рыжего, но я вам его не расскажу. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>П: В состояние равновесия человек придёт только после смерти.<br/>С: А если его охладить?<br/>П: Не надо охлаждать человека!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%BE%D0%B7%D0%B0'>#Лоза</a> С.А. Физхимия <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фХиВТ_кубгу</a></div>",
    "author": "Лоза С.А."
},{
    "quote": "<div class='pi_text'>С: Она кривенькая.<br/>П: Ты про жизнь?<br/><br/>Ажгихин С.Г. Упаковка <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Ажгихин С.Г."
},{
    "quote": "<div class='pi_text'>*пишем лекцию с презентации*<br/>- Написали?<br/>- Нет, подождите.<br/>- Написали *перелистывает слайд*.<br/><br/>Туйбаева Е.И основы мат. обработки  <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Туйбаева Е.И"
},{
    "quote": "<div class='pi_text'>*заговорившись второй раз за минуту*<br/>- К вечеру мы все мутируем! <br/><br/>Татаринов А.В. 'Современная зарубежная литература' <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D0%A3%D0%91%D0%93%D0%A3'>#филфак_КУБГУ</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>Парень, отсядь от девочек. Они тебя все равно не любят!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8C%D1%86%D0%B5%D0%B2%D0%B0'>#Мальцева</a> Р. И. Современный русский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мальцева Р. И."
},{
    "quote": "<div class='pi_text'>Идете вы по жизни, поёте себе песенку. А в этой песенке ни слова о мат. анализе.<br/><br/>Малыхин К.В. Мат. Анализ. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин К.В."
},{
    "quote": "<div class='pi_text zoom_text'>— Ай сказал.<br/><br/>Токарь Э. К. Английский язык <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Токарь Э. К."
},{
    "quote": "<div class='pi_text'>Людям прикольно делать плохо другим. А мне за это ещё и деньги платят.<br/><br/> <a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Теория литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Диссимиляция не может быть дистантной? Что? Да кто это сказал? Плюньте этому человеку в лицо! <br/><br/>Костина Л.Ю. Современный русский язык, фонетика. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Костина Л.Ю."
},{
    "quote": "<div class='pi_text'>Ты звал меня, особь противоположного пола? <br/><br/>Кравченко Г. Г.  Академическая живопись <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Кравченко Г. Г."
},{
    "quote": "<div class='pi_text'>Кто молчит, тот выглядит умнее. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. История русской литературы 18 века<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Возбудитесь на задачу!<br/><br/>Кирокосян М.А. Финансовый анализ. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кирокосян М.А."
},{
    "quote": "<div class='pi_text'>Хотите почувствовать себя эвгленой? Возьмите лампу и крутите вокруг себя. Так, вы поймете куда двигаетесь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D1%81%D1%82%D0%BE%D0%B2'>#Кустов</a> С. Ю. Зоология<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Кустов С. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Девочки, вы должны быть очень внимательными по жизни, как говорится: 'На Аллаха надейся, а верблюда привязывай'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BE%D0%BC%D0%B8%D0%BB%D0%BE%D0%B2'>#Томилов</a> А.Б Основы Безопасности Жизнедеятельности <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФППК_КубГу</a></div>",
    "author": "Томилов А.Б"
},{
    "quote": "<div class='pi_text'>К (качественно) + Р (результативно) + Э (эффективно) = <br/>К (конкурентоспособность), т.е. КРЭК.<br/>КРЭК — это наркотик. Поднимите руки, кто из вас наркоман.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%95%D1%80%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Ермоленко</a> В. В. Основы теории управления<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Ермоленко В. В."
},{
    "quote": "<div class='pi_text'>Совокупность может конкурировать с убийством двух и более лиц по единству умысла.<br/>Вот приехал муж пораньше из командировки, и видит двух и более лиц...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B8%D0%BD%D0%BA%D0%B8%D0%BD'>#Жинкин</a> А.А. Квалификация преступлений <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Жинкин А.А."
},{
    "quote": "<div class='pi_text'>* Вопрос преподавателя к студентке. *<br/><br/>- А вы из какой страны? Краснодарской?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Леванова</a> К. А. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Леванова К. А."
},{
    "quote": "<div class='pi_text'>* Преподаватель объясняет первому курсу задачи на кровно-родственные связи. *<br/><br/>Смена пола — действие ответственное. Слишком часто это делать не нужно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Да кому нужен ваш английский? Ваш английский каждый бомж знает. <br/><br/>Зеленская В. В. Латинский язык. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Зеленская В. В."
},{
    "quote": "<div class='pi_text zoom_text'>— Если условие нарушено, то теорема летит в печку.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>*студентка пишет под партой кому-то сообщение*<br/>П: Чем ты там занимаешься? Кому пишешь? Скажи ему, что ты со мной, пусть обзавидуется!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>- Вот что у нас сейчас строится за окном?<br/>* студентка-блондинка, выглянув в окошко *<br/>- Я не вижу, мне крыша отсвечивает.<br/>- Капитализм, барышня.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Античная литература<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Любовь между супругами возникла в 19 веке. До этого они были компаньонами, бизнесменами, так сказать. Они хотели иметь наследника - это вопрос бизнеса. <br/><br/>Гарин С.В. Логика <a data-link='/feed?section=search&amp;q=%23%D0%AE%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Юрфак_КубГУ</a></div>",
    "author": "Гарин С.В."
},{
    "quote": "<div class='pi_text'>* лектор 10 минут выводит формулу *<br/>П: - Итак, что мы можем увидеть в этой формуле? <br/>С: - Отчаяние...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В. Математический анализ <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин К. В."
},{
    "quote": "<div class='pi_text'>*разговор о «Божественной комедии» Данте*<br/><br/>Что было в Пасху 1300 года? Где был ты?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература Средних веков и эпохи Возрождения<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>* преподаватель доказывает теорему, доходит до конца и находит ошибку *<br/><br/>П: - Такс, а почему тут так? А... Ну правильно, я вам тут вру, а вы молчите, партизаны.<br/>С: - Мы вам верим просто.<br/>П (смеётся): - Ну мы на экзамене посмотрим.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D1%87%D0%B0%D1%80%D0%BE%D0%B2'>#Бочаров</a> А. В. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Бочаров А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Были у меня арабы из Арабии... Так они и писали справа налево. А вы так можете? <br/><br/>Узлов Ю.А. История. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>П: Вообще, я презираю человека.<br/>С: Вы же сам человек!<br/>П: Ну я же не 'вообще'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Те примеры, что мы изучали... мы правда еще ничего не изучали...<br/><br/>Гаврилюк М. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Гаврилюк М. Н."
},{
    "quote": "<div class='pi_text'>П: Вот ты можешь бесконечность пройти?<br/>С: Эээм...Нет.<br/>П: Ну и отдыхай тогда.<br/><br/>Спасов С. В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>В моём понимании полка — это стол, но стол — это не полка.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%95%D0%B3%D1%83%D0%BF%D0%BE%D0%B2'>#Егупов</a> А. В. Основы информационной политики<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Егупов А. В."
},{
    "quote": "<div class='pi_text'>П: *диктует материал*<br/>С: - Это классификация чего?<br/>П: - Пирожков. Слушать надо было!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0'>#Шалина</a> Е.М. Общая психология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Шалина Е.М."
},{
    "quote": "<div class='pi_text'>* пишет лекцию на доске *<br/><br/>Я рисую как Ван Гог, сразу трудно понять, нужно присмотреться. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B7%D0%B8%D0%B4%D0%B7%D0%BE%D0%B5%D0%B2'>#Дзидзоев</a> Р. М. Конституционное право зарубежных стран <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Дзидзоев Р. М."
},{
    "quote": "<div class='pi_text'>Преподаватели с истфака, когда подозревают студента в умозрительности, сразу посылают к нам.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В. Философия и методология науки<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text'>Пушкина можно препарировать как угодно. Он абсолютно безопасен. <br/><br/>Сайченко В.В. История педагогической мысли в преподавании отечественной словесности <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Сайченко В.В."
},{
    "quote": "<div class='pi_text'>Что надо делать? Мерцать по-разному. Не так мерцаешь — лети мимо.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D1%81%D1%82%D0%BE%D0%B2'>#Кустов</a> С. Ю. Зоология <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Кустов С. Ю."
},{
    "quote": "<div class='pi_text'>То, что мы делали в предыдущую субботу - одноразовое разбиение. Там как раз удается за...ну одно, ну максимум два разбиения всё разложить. А когда так не бывает? И бывает ли так, когда так не бывает? Бывает.<br/><br/>Костенко К. И. Математическая логика и дискретная математика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>*разбор кейса на паре*<br/><br/>П: Так, отлично, а чем диоксины опасны?<br/>С: Они подрывают гормональный фонд.<br/>П: Ага. Положите на мой счет еще тестостерона, пожалуйста. Так что ли?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BC%D0%B5%D1%80%D0%B4%D0%B0%D1%88%D0%B5%D0%B2'>#Темердашев</a> А. З. Методы экоаналитического контроля суперэкотоксикантов <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Темердашев А. З."
},{
    "quote": "<div class='pi_text'>П: 11 счёт.. Это маааленькие животные, которые потом подрастут и станут...<br/>С: Продуктом!<br/>П: Ну вообще-то основным стадом.<br/><br/>Гурская М.М. Бухгалтерский (финансовый) учет <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Гурская М.М."
},{
    "quote": "<div class='pi_text'>Обмани ближнего своего, пока он не сделал это за вас.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D1%85%D0%B0%D0%B3%D0%B0%D0%BF%D1%81%D0%BE'>#Тхагапсо</a> Р. А. Бухгалтерский учет<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Тхагапсо Р. А."
},{
    "quote": "<div class='pi_text'>Вы что, из пробирки что ли?! <br/><br/>Узлов Ю. А.  История России<br/> <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Узлов Ю. А."
},{
    "quote": "<div class='pi_text zoom_text'>Ты был обязан предупредить. Осознаешь свою вину? Ответ - мгновенно! <br/><br/>Факторович А.Л. Современные информационные технологии <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Факторович А.Л."
},{
    "quote": "<div class='pi_text'>П: Вы откуда?<br/>С: С Украины.<br/>П: Аааа, знаем, знаем, Чернобыль.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <br/><a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Эконом_КубГУ</a></div>",
    "author": "Украины.<br/>П: Аааа, знаем, знаем, Чернобыль.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А."
},{
    "quote": "<div class='pi_text zoom_text'>— Предела нет, они скачут как блохи бешеные.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A6%D0%B0%D0%BB%D1%8E%D0%BA'>#Цалюк</a> М. В. Функциональный анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Цалюк М. В."
},{
    "quote": "<div class='pi_text zoom_text'>Большинство людей проще пристрелить, чем переделать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BC%D0%B5%D1%80%D0%B4%D0%B0%D1%88%D0%B5%D0%B2'>#Темердашев</a> А. З. Методы экоаналитического контроля суперэкотоксикантов <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Темердашев А. З."
},{
    "quote": "<div class='pi_text'>С: У нас реклама алкоголя запрещена, а они все равно пиво рекламируют!<br/>П: Так они безалкогольное рекламируют. Пробовали? Вещь - во <img alt='👍' class='emoji' src='/emoji/e/f09f918d.png'/><br/><br/>Петросов Т.А. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Петросов Т.А."
},{
    "quote": "<div class='pi_text'>П: - Ну как у вас дела с утра?<br/>С: - Проснулись-улыбнулись...<br/>П: - Лучше бы не просыпались.<br/><br/> <a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы и теория литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>А теперь объясняю теорию для ЗПРовцев.<br/><br/>Кутер М.И. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>Нужна ли теория групп в жизни? Конечно, нет. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Алгебра <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text zoom_text'>Мама, роди меня обратно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А.</div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>П - Это не входит в данный вопрос.<br/>С - Ну я же пытаюсь его дальше разобрать.<br/>П - Да что его разбирать? Помянули и хватит.<br/><br/>Ювко М. А. Римское право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М. А."
},{
    "quote": "<div class='pi_text'>Ткнувшись либо в трудоустройство, либо в любовь, и несколько раз разочаровавшись в них, с молодыми людьми происходит самое печальное - они становятся циниками.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%B7%D0%B0%D0%BA%D0%BE%D0%B2'>#Лузаков</a> А. А. Управление персоналом  <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Лузаков А. А."
},{
    "quote": "<div class='pi_text'>С: Александр Львович, можно вопрос?<br/>П: Да, только не вслух.<br/><br/>Факторович А.Л. Концепция современного естествознания <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Факторович А.Л."
},{
    "quote": "<div class='pi_text'>Если привести числитель и знаменатель к общему знаменателю, то знаменатели сократятся.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D1%8B%D1%81%D0%BA%D1%83%D0%B1%D0%BE%D0%B2'>#Выскубов</a> Е. В. Основы кибернетики<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Выскубов Е. В."
},{
    "quote": "<div class='pi_text'>На перемене хихикаем, на паре отвечаем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%BA'>#Жук</a> Е.Е. Английский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Журфак_кубгу</a></div>",
    "author": "Жук Е.Е."
},{
    "quote": "<div class='pi_text'>- Что думаете, коллеги? (23 повторения за пару!)<br/><br/>Петросов Т.А. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#матфак_КубГУ</a></div>",
    "author": "Петросов Т.А."
},{
    "quote": "<div class='pi_text'>Пусть Е — банахово пространство.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Шаповаленко</a> В. В. Функциональный анализ <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Шаповаленко В. В."
},{
    "quote": "<div class='pi_text'>П: Эти статуи не были такими белыми. Они были очень яркими и разноцветными. <br/>С: А что случилось?<br/>П: Прошло 1000 лет. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%B5%D0%B4%D1%8C%D0%BA%D0%BE'>#Редько</a> Г. В. Страноведение <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Редько Г. В."
},{
    "quote": "<div class='pi_text'>*Студенты кушают леденцы*<br/>П: Я тут стою, рассказываю, а вы прям на первой парте сосёте. Ну на экзамене я вам устрою: я смогу, а вы нет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Вы знаете, как филологи читают: пачка чипсов и уже прочитано двести страниц 'Клима Самгина'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B2%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Свитенко</a> Н. В.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Свитенко Н. В."
},{
    "quote": "<div class='pi_text'>*нет аудитории, преподаватель отказывается идти в ту, которую нашли*<br/>- Теорию чисел нужно в ХРАМЕ преподавать, а не в этом.<br/><br/>Сергеев Э.А. Теория чисел <a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Матфак_кубгу</a></div>",
    "author": "Сергеев Э.А."
},{
    "quote": "<div class='pi_text'>*задаёт студенту дополнительный вопрос*<br/>Что, не помните? А если я отойду на 20 минут, вспомните?<br/><br/>Малыхин К.В. Пересдача по мат.анализу<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин К.В."
},{
    "quote": "<div class='pi_text'>*после того, как студент дорешал у доски*<br/>П: Можно я не буду поворачиваться и смотреть? То, что я увижу - принесёт мне боль и страдание.<br/>*повернулся и посмотрел*<br/>П: ...еще одна капля веры в человечество утрачена.<br/><br/>Алеников А.С. Контроллинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text'>Я не убиваю,не кусаюсь...в последнее время.<br/><br/>Петров В.И. 'История Кубани'<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text zoom_text'>Вот сразу видно, вегетативная душа берет верх над разумным.<br/><br/> Спасов С. В. Философия  <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Я говорю как-то с пафосом. Не обязательно слово в слово записывать, главное - суть уловить. <br/><br/>Соловьёв Г. М. Основы журналистской деятельности <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Соловьёв Г. М."
},{
    "quote": "<div class='pi_text'>П: Почему Владимир Святославич не принял ислам?<br/>С: Нельзя было употреблять спиртное.<br/>П: Днем нельзя, а ночью Аллах не видит?! Нет, на Руси пили медовуху. Я пробовала и добралась нормально, а то, что наши предки были алкоголиками, это миф!<br/><br/>Бородина С. Н. История Кубани <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Бородина С. Н."
},{
    "quote": "<div class='pi_text'>*пальцами делает что то вроде 'козы'*<br/>- Хельсинки, Питер, Москва... Новороссийск!<br/><br/>Кизим А.А. Логистика<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кизим А.А."
},{
    "quote": "<div class='pi_text'>*студент неправильно произносит слово*<br/>- Асьюм - это кто такой? Ходит, маленький такой, толстенький, ушастенький Асьюм?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD%D0%B0'>#Волошина</a> К.С. Иностранный язык <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Волошина К.С."
},{
    "quote": "<div class='pi_text zoom_text'>Ну, возьмём например кока-колу или ту же балтику...<br/><br/>Костецкий А.Н. Маркетинг  <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Костецкий А.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Вот вы можете представить себе жизнь романтического героя от завтрака до ужина, от завтрака до ужина... <br/><br/>Свитенко Н.В. История русской литературы <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Свитенко Н.В."
},{
    "quote": "<div class='pi_text'>Gross по-немецки серьёзно звучит. Big по-английски вообще не серьёзно. Ну что это такое? Биг, пиг. Вот Рамштайн отлично звучит. Я поклонник рамштайн.<br/><br/>Рожков А.В. Компьютерная алгебра и криптография <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Рожков А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Я не говорю вам, что вы тупые. У вас просто естественное сознание. <br/><br/>Тащиан А.А. 'Философия' <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Тащиан А.А."
},{
    "quote": "<div class='pi_text'>У вас будет время все осмыслить и почувствовать себя виноватыми.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B2%D0%B0'>#Болотова</a> Е. А. Философия религии<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Болотова Е. А."
},{
    "quote": "<div class='pi_text'>Я допустила большую педагогическую ошибку — я прихожу трезвая на ваши пары. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%B2%D0%B0'>#Пономарева</a> Д. О. Профессионально-творческий практикум <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Пономарева Д. О."
},{
    "quote": "<div class='pi_text'>Конституция, по-вашему, может просроченной быть? До 3 ноября и все? Как сырок глазированный?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BB%D1%8F%D0%BA%D0%BE%D0%B2%D0%B0'>#Полякова</a> К. Ю. Конституционное право <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Полякова К. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>...Так что, кто любит Pascal ABC -начинайте ему изменять.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F'>#Добровольская</a> Н. Ю. Основы программирования <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Добровольская Н. Ю."
},{
    "quote": "<div class='pi_text'>Купи пять чебуреков и собери кошку.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%B6%D0%B0'>#Жужа</a> М. А. Молекулярная физика <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Жужа М. А."
},{
    "quote": "<div class='pi_text'>*студентка назвала Августина Аврелия «духовным Одиссеем»*<br/><br/>П: Духовный Одиссей?! А есть духовный Циклоп?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература средних веков и эпохи Возрождения<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>Мы платим за любовь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D0%BB%D0%BE%D0%BA%D0%BE%D0%BD%D1%8C'>#Белоконь</a> Т. М. Педагогика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Белоконь Т. М."
},{
    "quote": "<div class='pi_text zoom_text'>Зачетки на стол, сами под стол. <br/><br/>Спасов С. В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>*разговор о нецензурной лексике*<br/><br/>А особенно неуместно использовать её девушкам, так как они просто не могут выполнить всего, что там обещается.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Пономаренко</a> И. Н. Современный русский язык. Лексикология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Пономаренко И. Н."
},{
    "quote": "<div class='pi_text'>В программе, как в женщине, должно быть прекрасно всё.<br/><br/>Гаркуша О.В.    <br/>Практикум по программированию <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Гаркуша О.В."
},{
    "quote": "<div class='pi_text'>Математика — всего лишь вера.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D1%80%D0%B1%D0%B0%D0%BA%D0%BE%D0%B2'>#Щербаков</a> Е. А. Математический анализ <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Щербаков Е. А."
},{
    "quote": "<div class='pi_text'>Знаете, зачем нам даны заповеди? Для того, чтобы мы поняли, что их невозможно соблюдать. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0'>#Татаринова</a> Л. Н. Литература и религия<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринова Л. Н."
},{
    "quote": "<div class='pi_text'>П: - Чем отличается редактор от корректора?<br/>С: - Редактор редактирует, а корректор корректирует.<br/>П: - Если так мне на зачёте ответите, я вам автомат поставлю.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%80%D1%8B%D0%B6%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F'>#Крыжановская</a> В. А.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Крыжановская В. А."
},{
    "quote": "<div class='pi_text'>*1я пара. Сидят 2 студента*<br/>Вы могли позвонить, прислать СМС 'Наша группа придет ко второй паре'? Неет! Нормальные двоечники и паршивые группы так и делают, а ГНУСНЫЕ отличники - ни себе, ни людям! Что это за симуляция? Полтора человека на занятии... <br/><br/>Мартиросов А. В. Проектная графика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Мартиросов А. В."
},{
    "quote": "<div class='pi_text'>Информация о том, носит ли с собой королева вкусняшки, не подтверждается и не опровергается.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Леванова</a> К. А. Культурно-религиозные традиции в международных отношениях <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Леванова К. А."
},{
    "quote": "<div class='pi_text zoom_text'>И я вас просто ЗАКЛИНАЮ, никогда не становиться любовницами. <br/><br/>Волкодав. Т. В. Иностранный язык для психологов <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Волкодав. Т. В."
},{
    "quote": "<div class='pi_text'>(О письме Татьяны к Онегину)<br/>П: Налицо все признаки невротичности. Психотерапия плачет по Татьяне!<br/><br/>Сухих С.А. Языковая личность в коммуникации <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Сухих С.А."
},{
    "quote": "<div class='pi_text zoom_text'>Поняли, что такое физика?! Три проводочка и куча двоек!<br/><br/>Коновалов А. В. Электричество <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Коновалов А. В."
},{
    "quote": "<div class='pi_text'>Любовь по Данте это не: ах, моё сердце забилось, потому что ты прошуршал рядом.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература Средних веков и эпохи Возрождения<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Мамзели, че расселись? <br/><br/>Коротков К. С.(теория электрических цепей) <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Коротков К. С."
},{
    "quote": "<div class='pi_text'>* студенты рассматривают заспиртованных кальмаров *<br/><br/>С: А почему вода такого зеленого оттенка?<br/>П: Тархуном залили.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BB%D0%B0%D0%B4%D1%83%D0%BD'>#Гладун</a> В. В. Зоология<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Гладун В. В."
},{
    "quote": "<div class='pi_text zoom_text'>- Да вас никто на работу не возьмет. Кому нужны будут такие?<br/><br/>Царева И. Н. Технологии программирования <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Царева И. Н."
},{
    "quote": "<div class='pi_text'>Основным костяком преподавательского состава КубГУ при основании были бывшие дворяне. В политехе же - красноармейцы. Когда начались репрессии, понятно кто на кого доносы писал.<br/><br/>Горожанина М.Ю. История Кубани<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Горожанина М.Ю."
},{
    "quote": "<div class='pi_text'>По-моему, вся аудитория вместе с преподавателем на грани потери сознания.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D1%83%D0%BC%D0%B0%D0%BA%D0%BE%D0%B2'>#Чумаков</a> С. Н. История мировой литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Чумаков С. Н."
},{
    "quote": "<div class='pi_text'>Эволюция — интересная штука. Сильные обезьяны вытеснили наших предков в саванны. И они стали выпрямляться, чтобы понять, что там за травой происходит. Вот вам и прямохождение... Вы смеётесь, а нашим предкам не было смешно, когда их выгнали. Но ничего, приспособились. Вон какие сидят.<br/><br/>* Показывает на студентов. *<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D1%81%D1%82%D0%BE%D0%B2'>#Кустов</a> С. Ю. Зоология <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Кустов С. Ю."
},{
    "quote": "<div class='pi_text'>* сдают лабу *<br/><br/>- Нет, этот вывод никуда не годится! Вообще, нехорошо.<br/>- Но мы в первый раз...<br/>- В первый раз всегда больно, а не нехорошо.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2'>#Половодов</a> Ю. А. <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Половодов Ю. А."
},{
    "quote": "<div class='pi_text zoom_text'>Человек если умеет языком крутить, то давай, иди в журналистику. <br/><br/>Соловьёв Г. М. Основы журналистской деятельности <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Соловьёв Г. М."
},{
    "quote": "<div class='pi_text zoom_text'>Чалый гарантирует!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D0%B0%D0%BB%D1%8B%D0%B9'>#Чалый</a> В.В. Русский язык и культура речи <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9C%D0%B8%D0%9A%D0%9D_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФМиКН_КубГУ</a></div>",
    "author": "Чалый В.В."
},{
    "quote": "<div class='pi_text'>Помните определение формулы? Я помню.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>Мы не будем решать этот дерьмизм.<br/><br/>Костенко К.И.<br/>Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>Физмат образование так просто не пропьешь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D1%81%D1%82%D0%B0%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE'>#Остапенко</a> А. А. Педагогика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Остапенко А. А."
},{
    "quote": "<div class='pi_text'>Ваши экономисты вам зададут на сессии жару, а мои пары это что? Поцелуй взасос, Иисус Христос!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В.И. История <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>Я человек эмоциональный. Импульсивный. Могу и кружку запустить.... Шутка.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Доклассическая словесность в медиа<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шутка.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н."
},{
    "quote": "<div class='pi_text'>Помните, Геракл был? Весь такой из себя брутальный мужчина, ходил, подвиги совершал?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0'>#Бородина</a> С. Н. История Кубани<br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Бородина С. Н."
},{
    "quote": "<div class='pi_text'>С: А если мы не согласны с оценкой за экзамен?<br/>П: Я вам докажу, что права... Ну или вы мне.<br/><br/>Засядко О.В. Теория вероятностей и мат.статистика <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Засядко О.В."
},{
    "quote": "<div class='pi_text'>Я кандидат наук, почти Бог.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B0%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%BA%D0%BE%D0%B2'>#Жаворонков</a> Д. В. Организационное поведение<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Бог.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B0%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%BA%D0%BE%D0%B2'>#Жаворонков</a> Д. В."
},{
    "quote": "<div class='pi_text zoom_text'>Я не думаю, что нотариус клей будет нюхать...<br/><br/>Эртель Л.А. Профессиональная этика и служебный этикет <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Эртель Л.А."
},{
    "quote": "<div class='pi_text zoom_text'>А сейчас давайте займемся чем-нибудь странным! Предложите что-нибудь странное?<br/><br/>Ермоленко С.С. Объектно-ориентированное решение задач. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Ермоленко С.С."
},{
    "quote": "<div class='pi_text'>*объясняет склонение прилагательных*                И тут начинается интерееееесноое...<br/><br/>Дьяченко И.Ю.                                                                     Практика второго иностранного языка <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Дьяченко И.Ю."
},{
    "quote": "<div class='pi_text'>Земля — это земля...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D0%BB%D0%B8%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE'>#Пилипенко</a> С. Н. Иностранный язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Пилипенко С. Н."
},{
    "quote": "<div class='pi_text'>*разговаривает со студентами* <br/>П: Это понятненько?<br/>С: Понятненько.<br/>П: А что дальше должно быть понятненько?<br/><br/>Бочаров А.В. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Бочаров А.В."
},{
    "quote": "<div class='pi_text zoom_text'>— Я тебе дам плюс... мне другая группа обосрала всё занятие этим плюсом.<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>П: У нас время есть ещё?<br/>С: Нет.<br/>П: *смотрит на часы* Да бросьте! Ещё две минуты!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Нет.<br/>П: *смотрит на часы* Да бросьте! Ещё две минуты!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В."
},{
    "quote": "<div class='pi_text'>Моряк, у которого вся задница в ракушках, скажет компАс!<br/><br/>Панаэтов О. Г.    Античная литература.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Панаэтов О. Г."
},{
    "quote": "<div class='pi_text'>С: Что такое бесформенная материя?<br/>П: Ты, например.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> философия, <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов"
},{
    "quote": "<div class='pi_text zoom_text'>-Главное коротенько, концентрат.<br/><br/>Мирошникова Н. И., Деньги. Кредит. Банки. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Мирошникова Н. И."
},{
    "quote": "<div class='pi_text'>* Студент (иностранец) и преподаватель обсуждают значение прически. *<br/><br/>П: - Что значит ваша прическа? Какой сакральный смысл она несет?<br/>С: - Что? Что это значит? Мне просто понравилось.<br/>П: - Нет! Эта прическа точно что-то значит. Вы просто не хотите нам говорить!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Леванова</a> К. А. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Леванова К. А."
},{
    "quote": "<div class='pi_text'>Что-то все меня пугают сегодня. Учишь вас, учишь, а вы как скажете ерунду, хоть стой, хоть падай. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B0%D0%B4%D0%B0%D1%8F%D0%BD%D1%87%D1%83%D0%BA'>#Задаянчук</a> Н. А. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Задаянчук Н. А."
},{
    "quote": "<div class='pi_text zoom_text'>Ну не все же журналисты проститутки!<br/><br/>Павлов Ю.М. 'Прикладная журналистика' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text zoom_text'>Уважаемый, убирайте из речи слово 'как-бы'! Вы юрист. Для вас есть только 'де-юре' и 'де-факто'!<br/><br/>Волгина А.П. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Волгина А.П."
},{
    "quote": "<div class='pi_text'>- Юноша на задней парте! Чем вы заняты?<br/>- Пытаюсь пикапить девушек.<br/>- Сейчас вы будете пикапить трасологию!<br/><br/>Бондаренко Ю.А. Криминалистика <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Бондаренко Ю.А."
},{
    "quote": "<div class='pi_text'>Логично?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г.А. Механика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>Что значит 'покупатели с низкими потребностями'... People схавает?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D0%B1%D0%B8%D1%87%D0%B5%D0%B2'>#Бабичев</a> К. Н. Стратегическое управление<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Бабичев К. Н."
},{
    "quote": "<div class='pi_text zoom_text'>— Там рядом со мной книжки лежат. Нет... Я сижу, они лежат.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B0%D0%B7%D0%B0%D1%80%D0%B5%D0%B2'>#Лазарев</a> В. А. Актуальные проблемы теории и методики преподавания математики <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Лазарев В. А."
},{
    "quote": "<div class='pi_text'>Ну, допустим, есть у нас программист Иванов Иван Иванович, должность рядовой программист. Зарплату дадим ему сто тысяч. Экономить на нем не будем, пример и так не очень.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D1%81%D1%81%D0%B0%D1%80%D0%B0%D0%B1%D0%BE%D0%B2'>#Бессарабов</a> Н. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Бессарабов Н. В."
},{
    "quote": "<div class='pi_text zoom_text'>Идея понятна? <br/><br/> Волынкин В А. Неорганика. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D1%82_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВт_кубгу</a></div>",
    "author": "Волынкин В А."
},{
    "quote": "<div class='pi_text'>*смотрит в ноутбук, рассматривает содержимое флешок студентов*<br/><br/>А почему тут человек со спущенными шта... а, неважно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Электронные средства информации<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text'>Дерево развивается хорошо в отличии от человека! Оно тянется к солнцу. А вы куда тянетесь? Даже не знаю...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>Это вам не «Окей, Гугл», здесь уже «Окей, Оксана Алексеевна».<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D0%B6%D0%BA%D0%BE'>#Перенижко</a> О.А. История региона<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Перенижко О.А."
},{
    "quote": "<div class='pi_text zoom_text'>В этом курсе будет много умных слов. Вы их запомните, а потом будете ими щеголять. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0'>#Блинова</a> М. П. Формальные модели в лингвистике <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Блинова М. П."
},{
    "quote": "<div class='pi_text'>Оборачивайтесь на соседа, чтобы убедиться в его бытии. Если обнаружите, что перемещаетесь в сторону Саратова, то звоните мне или куратору. Мы будем собирать опергруппу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>- Не знаю, может быть, это я такой дебильно-восторженный....<br/><br/>Павлов Ю.М. 'Работа в творческой студии' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text zoom_text'>Кто молодец? Я молодец.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%B0%D0%B3%D1%83%D1%80%D0%BE%D0%B2'>#Хагуров</a> Т. А. Экономика образования <a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Матфак_КубГУ</a></div>",
    "author": "Хагуров Т. А."
},{
    "quote": "<div class='pi_text zoom_text'>Это не беда, беда - когда ребенок на соседа похож.<br/><br/>Кирокосян М.А. Экономический анализ <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кирокосян М.А."
},{
    "quote": "<div class='pi_text'>С: Подождите, я запуталась!<br/>П: Ну распутывайтесь.<br/><br/>Ювко М. А. Теория государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Ювко М. А."
},{
    "quote": "<div class='pi_text zoom_text'>Если ты не знаешь, делай умный вид, что все знаешь.<br/><br/>Узлов Ю.А. Всемирная история <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text zoom_text'>Я когда подходила, у вас разговор был про колготки и квадраты. Ну а что, нам в жизни и то, и другое нужно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BF%D0%BE%D0%B2%D0%B0'>#Попова</a> Г. И. Математические пакеты <a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Матфак_КубГУ</a></div>",
    "author": "Попова Г. И."
},{
    "quote": "<div class='pi_text zoom_text'>Выразите мне соболезнование по поводу начала учебного года!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D1%80%D0%B1%D0%B0%D0%BB%D1%8C'>#Щербаль</a> С.С. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Щербаль С.С."
},{
    "quote": "<div class='pi_text zoom_text'>Я об этом сказал. Ну, в смысле ничего не сказал, поэтому ознакомьтесь с этим сами. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D1%83%D0%BC%D0%B0%D0%BA%D0%BE%D0%B2'>#Чумаков</a> С.Н. История мировой литературы. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Абсолютно правильно! Но не здесь.<br/><br/>Литвинский К.О. Микроэкономика  <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Литвинский К.О."
},{
    "quote": "<div class='pi_text'>Скупой платит дважды, а лох всю жизнь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Пономаренко</a> Т. Н. Вычислительные системы, сети и телекоммуникации<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BA%D1%82%D0%B8%D0%BF%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фктипм_кубгу</a></div>",
    "author": "Пономаренко Т. Н."
},{
    "quote": "<div class='pi_text'>*на всю доску написан интеграл*<br/>— Какие ещё варианты?<br/>— Уйти домой.<br/>— Хороший вариант.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>П: Что такое парадокс?<br/>С: Ну, 'доксия'- это мнение.<br/>П: А что такое 'пара'?! Это то, что ты получишь на экзамене.<br/><br/>Спасов С.В. Античная философия <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>* рисует криволинейную трапецию, выделяет квадратик в ней *<br/>— Вот эту дырочку выкидываем.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>С параболой работать неудобно, она слишком кривая.<br/><br/>Хаблюк В.В лекция по химии <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Хаблюк В.В"
},{
    "quote": "<div class='pi_text zoom_text'>Мне кажется, чем старше курс, тем вы тупее.<br/><br/>Балаценко Н. С. Детская литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%A4%D0%9A%D1%83%D0%B1%D0%93%D0%A3_%D0%A1%D0%BD%D0%9A'>#филфак_ФКубГУ_СнК</a>.</div>",
    "author": "Балаценко Н. С."
},{
    "quote": "<div class='pi_text'>Чтобы понять рекурсию, нужно понять рекурсию.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD'>#Волошин</a> М. А. Алгоритмизация и программирование<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Волошин М. А."
},{
    "quote": "<div class='pi_text'>П: Александр Ткачев очень любит Екатерину II<br/>С: Да, мы видим, что на каждой мусорке 'Е' написано.<br/>*начинается громкий смех*<br/>П: Ну это вензель не Екатерины, а Евланова.<br/><br/>Щеколдин Г.А. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>*преподаватель говорит об отношениях*<br/>С: А Вы про какие отношения говорите? Половые или все?<br/>П: Все! Но веселее начинать с тех, о которых вы сказали.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B8%D0%BC%D0%B1%D0%B5%D1%80%D0%B3'>#Кимберг</a> А. Н. Психология идентичности <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#фуп_КубГУ</a></div>",
    "author": "Кимберг А. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Я вас отослала на сайт. Это недалеко. Я вас недалеко послала.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D0%BE%D0%B1%D1%83%D1%86%D0%BA%D0%B0%D1%8F'>#Кособуцкая</a> Е. В. Введение в теорию параллельных алгоритмов <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Кособуцкая Е. В."
},{
    "quote": "<div class='pi_text'>* Идёт пара по информатике *<br/><br/>П: Так, у нас есть меченосцы, гомики и гуппи...<br/><br/>* Студенты смеются, преподаватель тоже *<br/><br/>П: Извините, сомики. Видите, я их просто скрестила.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BF%D0%BE%D0%B2%D0%B0'>#Попова</a> Г. И. Теория и методика обучения информатике<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Попова Г. И."
},{
    "quote": "<div class='pi_text zoom_text'>В нашей стране нельзя зарекаться от трёх вещей: от тюрьмы, от сумы, и от зачёта по основам теории языка.<br/><br/> Чалый В. В. Основы теории языка <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text'>Наше подсознание хранит все мечты, обиды и желание пережить сессию.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и Дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Прекраснее женской ножки может быть только женская ручка. <br/><br/>Сидоров В.А. Экономическая теория. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Слово 'любовь' очень затаскано. Оно означает очень многое, а значит не означает ничего.<br/><br/>Мороз О.Н. Литература 18 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Вы знаете есть девушки 90/60/90?<br/>А есть девушки 90/90/90 и это только лицо.<br/><br/>Луценко Е. В Когнитивный системный анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Луценко Е. В"
},{
    "quote": "<div class='pi_text'>От счастья до ужаса одна запятая.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D0%B0%D0%BB%D1%8B%D0%B9'>#Чалый</a> В. В. Русский язык и основы деловой коммуникации<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text'>Если яблоко — это фрукт, то что такое память компьютера?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D1%81%D0%B8%D0%BF%D1%8F%D0%BD'>#Осипян</a> В. О<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Осипян В. О"
},{
    "quote": "<div class='pi_text zoom_text'>А те тела, которые не ходят на мои лекции, будут сдавать зачёт долго. Так им и передайте.<br/><br/>Эртель Л. А. Судебная медицина <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Эртель Л. А."
},{
    "quote": "<div class='pi_text'>(перед зимней сессией)<br/>— Если вы видите, что к вам крадется что-то белое и пушистое, знайте — это писец.<br/><br/>Подколзин В. В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Где она вылезает? Она выходит. Но она не выходит - вам показалось.<br/><br/>Чалый В. В. Русский язык и культура речи. <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text'>А теперь смертельный номер!<br/>Слабонервных просим матернуться.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text zoom_text'>'На все воля Божья', это, конечно, хороший ответ, но не на экзамене.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BC%D0%B5%D1%80%D0%B4%D0%B0%D1%88%D0%B5%D0%B2'>#Темердашев</a> А. З. Современные методы хроматографии <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Темердашев А. З."
},{
    "quote": "<div class='pi_text'>С: Можно вопрос?<br/>П: Наливай!<br/><br/>Кузьменко А.Н. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Кузьменко А.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Ну это сейчас не делают,  щас же у нас этот...ну как его?...ну, в общем, жить хреново стало. Кризис, вот! <br/><br/>Бондаренко Н.А. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Бондаренко Н.А."
},{
    "quote": "<div class='pi_text zoom_text'>Вы думаете, что жизнь справедлива? Я докажу вам, что нет. <br/><br/>Тимченко А.И <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Тимченко А.И"
},{
    "quote": "<div class='pi_text'>*девушке, разговаривающей за последней партой*<br/><br/>-Что же ты так возбудилась, как электрон в трубе?<br/><br/> <a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B0%D1%86%D0%B5%D0%BF%D0%B8%D0%BD'>#Зацепин</a> М.Н. Безопасность жизнедеятельности <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Зацепин М.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Я дома потела, это решала, а здесь не решается.<br/><br/>Ярёменко Л.А. Теория функций комплексного переменного <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Ярёменко Л.А."
},{
    "quote": "<div class='pi_text'>*речь идет о родителях, работающих в органах и устраивающих туда своих детей* <br/>П: Неее, это не про него. Он один такой в семье родился. Как говорят: в семье не без юристов. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D1%8F%D0%BD'>#Даниелян</a> А.С. Теория государства и права<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Допустим, я вам сейчас скажу: 'Господа, философия — это всеобщая наука'. Лол. <br/><br/>Тащиан А.А., философия, <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Тащиан А.А."
},{
    "quote": "<div class='pi_text'>Да это замечательно! Вернее плохо!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%BB%D0%BE%D0%BF%D1%83%D0%BD%D0%BE%D0%B2%D0%B0'>#Хлопунова</a> О. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Хлопунова О. В."
},{
    "quote": "<div class='pi_text'>Все хотят лежать на пляже и попивать мохито. Даже молекулы. Никто не хочет работать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Мельников</a> С. С. Введение в термодинамику<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Мельников С. С."
},{
    "quote": "<div class='pi_text zoom_text'>Студент, убейтесь об стенку. <br/><br/>Беспалов А.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Беспалов А.В."
},{
    "quote": "<div class='pi_text'>Наденьте, пожалуйста, маски. Нет, это не потому, что у вас страшные лица. Я видел в своей жизни страшные лица. Своё, например.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Мультимедиа-технологии в профессиональной сфере<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text zoom_text'>На сегодняшный день, у нас происходит массовая дибилизация в стране.<br/><br/>Павлов Ю.М. Практическая журналистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text zoom_text'>— Сделайте себе тату на видном месте: внешние пределы — всегда константы.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Я волшебник, я маг, я чародей!<br/><br/>Чалый В. В. Русский язык и культура речи <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text'>*студент правильно отвечает на вопрос*<br/>П: Где ты спишь, как тебя не украдут?<br/><br/>Щеколдин Г.А. 'Механика' <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>- Алексей Викторович, я нашла интимную стену у Сарамаго, хотите зачитаю?<br/>- Хотим, но воздержимся!<br/><br/>Татаринов А.В. Зарубежная литература. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>*отпросившимся с пары*<br/>Давайте ваши инициативы будут угасать, и начнем слушать мои.<br/><br/>Салфетников М.А. Военное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Салфетников М.А."
},{
    "quote": "<div class='pi_text zoom_text'>Ваши светлые лица я помню, ваши светлые имена я не знаю.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Зарубежная литература <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>На 4 курсе вы подумаете 'он все время нас обманывал'. Но приятно же было.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>5% мужчин - дальтоники. Среди женщин дальтоников - 0.25%. Вот вы, девочки, наряжаетесь в цветные платья, а они всё равно не различают.<br/><br/>Тлюстен С.Р. Теория вероятностей <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С.Р."
},{
    "quote": "<div class='pi_text'>*рассказывает про журналистку*<br/>- Она молодая еще,тридцати нет,но уже за 25.<br/><br/>Факторович А.Л. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Факторович А.Л."
},{
    "quote": "<div class='pi_text zoom_text'>Я орфографический маньяк! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A3%D1%82%D0%BA%D0%BE%D0%B2'>#Утков</a> Г.Н., Практикум по редактированию <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%93%D0%A3'>#журфак_кубГУ</a></div>",
    "author": "Утков Г.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Чем реже мы с вами встречаемся, тем лучше у меня настроение. <br/><br/>Тен О.К. Дифференциальная геометрия и топология. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9C%D0%B8%D0%9A%D0%9D_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФМиКН_кубгу</a></div>",
    "author": "Тен О.К."
},{
    "quote": "<div class='pi_text'>П: Все понятно?<br/>С: Нет.<br/>П: Да!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D0%BD%D0%B3%D0%B8%D1%80'>#Тангир</a> К.М. Пед. Риторика <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#фппк_КубГУ</a></div>",
    "author": "Нет.<br/>П: Да!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D0%BD%D0%B3%D0%B8%D1%80'>#Тангир</a> К.М."
},{
    "quote": "<div class='pi_text'>П: Ты хочешь пятёрку?<br/>С: А почему бы и нет<br/>П: Давай поспорим. Ты говоришь, что ты получишь 5, а я говорю, что нет. Ну и чтобы был стимул, я ставлю свою квартиру, а ты ставишь свою. Ну что, спорнём?<br/>С: Может не надо?<br/>П: Что, кишка тонка?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Вы теперь страшные люди! Вы владеете манипуляцией и анализируете почерк человека!<br/><br/>Блинова М. П. Основы теоретической и прикладной лингвистики. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Блинова М. П."
},{
    "quote": "<div class='pi_text'>Только толстый человек выживет после ОРВИ. Девочки, задумайтесь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История России<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text zoom_text'>Вот ты! Да, да, ты, Гарри Поттер, в очках который, смотрел 'Пятьдесят оттенков серого'? Что ты молчишь? Мы тебя теперь будем звать Гарри Поттер!<br/><br/>Дорошенко В.В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Дорошенко В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Не надо меня злить, а то я вас и козами драными назвать могу. <br/><br/>Штурба В.А. История образования и педагогики <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Штурба В.А."
},{
    "quote": "<div class='pi_text'>Катулл написал возлюбленной целый цикл о любви, а звали её Лесбией. Попрошу вас не хихикать и принять это очень филологически.<br/><br/>Чумаков С.Н., Античная литература <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>П - За сколько времени вы сделали это? *говоря о работе 2-х студентов*<br/>С - С 2-х ночи до 9-ти утра.<br/>П - Лучше бы вы улучшили демографическую ситуацию в стране.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D0%BB%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F'>#Белопольская</a> Т. Н. Информатика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Белопольская Т. Н."
},{
    "quote": "<div class='pi_text'>- Какой инструмент вы используете в редактировании изображений?<br/>- Волшебную палочку.<br/>- Замечательно!!! Прекрасно! Чудесно! Восхитительно! Потрясающе! Изумительно! Отлично! Очень, очень хорошо!<br/><br/>Факторович А.Л. 'Технологии СМИ' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Факторович А.Л."
},{
    "quote": "<div class='pi_text zoom_text'>Что-то я много говорю, да? Остановите меня.<br/><br/>Павлов Ю.М. Проблематика СМИ, <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text'>Наука – насилие, но такое, чтобы человек не чувствовал, что его насилуют. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B0'>#Костина</a> Л. Ю.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Костина Л. Ю."
},{
    "quote": "<div class='pi_text'>Вот убрать скелет, что мы получим? Массив мяса.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%B9%D0%BA%D0%BE'>#Бойко</a> П.Е. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Бойко П.Е."
},{
    "quote": "<div class='pi_text'>* окинула взглядом аудиторию * <br/>— Обречённые на смерть писали... <br/>* пауза *<br/>— Пишем-пишем!<br/><br/>Афанасьева Т. Н. Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Афанасьева Т. Н."
},{
    "quote": "<div class='pi_text'>Не будем унижать себя переводом. <br/><br/>Лопатина Н.Р. Английский язык <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Лопатина Н.Р."
},{
    "quote": "<div class='pi_text zoom_text'>Почему вы назвали гусей собаками?! Да потому что они свиньи! <br/><br/>Сидоров В.А <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А"
},{
    "quote": "<div class='pi_text'>* Паук спускается по паутине во время семинара на парту. *<br/><br/>П: - Извините, а вы заочник?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Я - главная книга. Во мне все написано.<br/><br/>Кизим А.А. Логистика <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кизим А.А."
},{
    "quote": "<div class='pi_text'>Психотерапия — наука болтологическая.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BE%D0%BC%D0%B8%D0%BB%D0%BE%D0%B2'>#Томилов</a> А.Б. Психопаталогия.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Томилов А.Б."
},{
    "quote": "<div class='pi_text'>* студент редко посещал пары * <br/>— Особое приветствие для вас, сэр!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Да или нет? Нуу? Да или нет? <br/><br/>Карнаушенко Л.В<br/>История государства и права зарубежных стран.<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л.В"
},{
    "quote": "<div class='pi_text'>* перед началом пары студенты разрисовали доску *<br/><br/>П: Что это?<br/>С: Творчество.<br/>П: Это не творчество, это порча имущества.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Теория и методика творческой деятельности <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Творчество.<br/>П: Это не творчество, это порча имущества.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С."
},{
    "quote": "<div class='pi_text'>*опоздавшей*<br/>Эй! Детка! Сюда села <img alt='👇' class='emoji' src='/emoji/e/f09f9187.png'/><br/><br/>Факторович А.Л. 'Технологии СМИ' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Факторович А.Л."
},{
    "quote": "<div class='pi_text'>*внезапно погас экран компьютера* <br/>- Марк Сергеевич, у меня компьютер не работает...<br/>- Что-то у компьютера случился Мистер Глюк!<br/><br/>Николов М.С. 'Дефекты в полупроводниках' физтех_кубгу</div>",
    "author": "Николов М.С."
},{
    "quote": "<div class='pi_text'>- хмм... русский комикс? Майор Гром?... Тогда он должен быть коррумпирован и алкоголиком. И спасать мир чисто по случайности... остановил машину, чтобы срубить денег, а получилось, что предотвратил автокатастрофу.<br/><br/>Змихновский С.И. философия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С.И."
},{
    "quote": "<div class='pi_text zoom_text'>Вот когда ты соседу глазки строишь, это агитация. А агитация с латинского как переводится? Возбуждение!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D1%81%D1%82%D0%B0%D1%88%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Осташевский</a> А.В. <a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>*студентка во время ответа на вопрос*<br/><br/>- Я просто нервничаю.<br/>- А чего Вы нервничаете, я же далеко, я не смогу Вас покусать, к сожалению! <br/><br/>Ювко М.А <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Ювко М.А"
},{
    "quote": "<div class='pi_text'>* программа прошла все тесты *<br/>Нет повода не выпить!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В. Олимпиадное программирование<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text'>Почитайте 'Наука логики'. Это практически математический трактат, если выкинуть содержание.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%85%D0%BE%D0%B2%D0%B8%D1%87'>#Бухович</a> Е. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Бухович Е. В."
},{
    "quote": "<div class='pi_text'>Без нулей и единичек ваших балалаек не было бы на свете.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B8%D0%BD'>#Любин</a> В. А. Линейная алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text zoom_text'>А вопрос - то с подковырочкой! <br/><br/>Ювко М.А. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text zoom_text'>Едрид-Мадрид чи шо!<br/><br/>Петров В.И. 'История России /Кубани' <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>А вам дети зачем? У вас их и не будет. Вы бог знает что едите. Американские жвачки, добились америкосы падения демографии с России. Вы заведете себе собачек, кошечек, будете их взасос целовать и спать с ними.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История России <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text zoom_text'>— Все сидящие тела — не тела вращения.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Факты, приведенные выше, свидетельствуют о политической проституции Вознесенского. <br/><br/>Павлов Ю. М. Медиакритика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю. М."
},{
    "quote": "<div class='pi_text'>П: Составьте мне предложение с подлежащим и сказуемым!<br/>С: Я бегу.<br/>П: Ну и беги!<br/><br/>Спасов С.В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>С: ...а экзистенциальный пример — денег нет.<br/>П: Но вы держитесь, да?<br/><br/>Гарин С. В. Логика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Явления комплексного анализа даны нам самой природой. Можно даже сказать Богом.<br/><br/>Левицкий Б.Е. теория функций комплексного переменного <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Левицкий Б.Е."
},{
    "quote": "<div class='pi_text zoom_text'>Проблемы племени вождя не волнуют. <br/><br/>Даниелян А. С. Теория государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text'>Компилятор - он, в отличие от вас, умный, он разряды считает.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F'>#Добровольская</a> Н.Ю. Основы программирования<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Добровольская Н.Ю."
},{
    "quote": "<div class='pi_text'>И какая же тогда из тебя филологиня, если ты даже в словарь заглянуть не можешь?!<br/><br/>Элмасян А.В. Практика языка <br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Элмасян А.В."
},{
    "quote": "<div class='pi_text'>Математика — место, где можно найти спасение от софистов.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text'>Красота девушки определяется тем, вышла ли она замуж за кого хотела или нет.<br/><br/>Кимберг А.Н. Психология идентичности<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Кимберг А.Н."
},{
    "quote": "<div class='pi_text'>Да, алкаши вместо этилового используют изобутиловый спирт, так как от него хмельнеют в 7 раз быстрее. НО у него есть недостаток. В организме человека он распадается с выделением ацетона, отсюда ацетоновое дыхание и ацетоновые выхлопы<img alt='😂' class='emoji' src='/emoji/e/f09f9882.png'/><img alt='😂' class='emoji' src='/emoji/e/f09f9882.png'/><img alt='😂' class='emoji' src='/emoji/e/f09f9882.png'/><br/><br/>Стрелков В.Д. органическая химия <a data-link='/feed?section=search&amp;q=%23%D1%85%D0%B8%D0%BC%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#химфак_кубгу</a></div>",
    "author": "Стрелков В.Д."
},{
    "quote": "<div class='pi_text'>Смотрите, вот куда я показываю своим шаловливым пальчиком.<br/><br/>Бокарев А.П. <br/>Рисунок <a data-link='/feed?section=search&amp;q=%23%D1%85%D1%83%D0%B4%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#худграф_кубгу</a></div>",
    "author": "Бокарев А.П."
},{
    "quote": "<div class='pi_text'>- Вот сидит студент на экзамене и думает: 'Ох, какой я крутой, сейчас такое забабахаю, препод упадет!'. А мне это потом проверять. И вот сижу я и думаю, как же мне противно. Такая жииирная пятерка у него получается. Жирнючая. На две строки в зачетке расползется.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BA%D0%B0%D1%80%D0%B5%D0%B2'>#Бокарев</a> А. П. Основы начертательной геометрии<br/><a data-link='/feed?section=search&amp;q=%23%D1%85%D1%83%D0%B4%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#худграф_кубгу</a></div>",
    "author": "Бокарев А. П."
},{
    "quote": "<div class='pi_text'>П: - Что из Гоголя читали?<br/>С: - 'Мёртвые души'.<br/>П: - Сколько книг 'Мёртвых душ' Вы читали?<br/>С: - Тома 3-4.<br/>П: - Фантастика!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2'>#Павлов</a> Ю. М. Русская классика и современный медиадискурс<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю. М."
},{
    "quote": "<div class='pi_text'>Именно мааааленькие козявочные производители составляли основу всего хозяйства.<br/><br/>Сидоров В.А. Общая экономическая теория<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text'>Ребята, вы шумите, мы теряем людей. <br/><br/>Ювко М.А. Римское право<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>* Речь про категорию одушевлённости/неодушевленности. *<br/><br/>Снеговик. Он неживой. Люди, которые верят в Деда Мороза, закройте уши.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B8%D0%BC'>#Ким</a> Д. А. Практикум по русскому языку<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Ким Д. А."
},{
    "quote": "<div class='pi_text zoom_text'>- Какой сегодня день? День неподготовки к английскому! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D0%B7%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%B0'>#Безрукова</a> П. А. Иностранный язык <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Безрукова П. А."
},{
    "quote": "<div class='pi_text'>Добрый день товарищи , рад вас видеть .<br/>-Девочки похорошели, мальчики возмужали.<br/>-присаживайтесь..<br/><br/>Алеников А.С<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Алеников А.С"
},{
    "quote": "<div class='pi_text'>В административном праве нет ОПГ.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%BF%D0%B0%D1%80%D0%B5%D0%B2'>#Лупарев</a> Е. Б. Административное право<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Лупарев Е. Б."
},{
    "quote": "<div class='pi_text'>2+2 может быть 2, потому что, если мы соединим двух волков и двух баранов, то волки сожрут баранов. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B0%D0%BB%D0%B0%D0%B9%D0%B4%D0%B8%D0%BD'>#Калайдин</a> Е. Н. Теория игр и исследование операций <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Калайдин Е. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Помните рекламу Йодомарина? Счастливая мама, счастливые дети. Мама купила сыну Йодомарин - ребенок резко поумнел... Ну, конечно, это всё фигня! <br/><br/>Зозуля Л. В. Биология человека. <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#биофак_КубГУ</a></div>",
    "author": "Зозуля Л. В."
},{
    "quote": "<div class='pi_text'>Спасибо всем, кто ходил на мои лекции...<br/>Знаете, время можно провести, а можно прожить. Чувствуете, да?<br/><br/>Костенко К.И. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>*ситуация, когда учебника нет в библиотеке, студентка жалуется, что неудобно читать с компьютера*<br/>П: Ну ты же порнуху с компьютера смотришь?<br/>С: Ну да.<br/>П: Ну так и математику смотри!<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>*преподаватель задаёт вопрос, в ответ гробовое молчание*<br/><br/>Боже мой! Что за паралич?<br/><br/>Чумаков С.Н. 'Античная литература'<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>П: А вот вы знаете кто в древнем Риме считался богатым? Нет, не знаете? Так, а замужние у нас имеются?<br/>*встает студентка*<br/>П: Вот ты считалась бы богатой, потому что у тебя есть хотя бы один раб.<br/><br/>Кутер М.И. Бухгалтерский учет <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>Она его ждёт. Ну, как ждёт. Она, конечно, что-то делает.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>* Преподаватель возвращается после перерыва на удалёнке. *<br/><br/>Вас стало больше — это хорошо. Я вернулся — ещё лучше.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Пространства знаний<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>Прометей как бы смотрел в будущее, 'мыслящий наперёд' так сказать. Был ещё Эпиметей, какой-то его родственник. Так вот этот самый Эпиметей 'мыслил задним умом'. Нет, ну а что такого?<br/><br/>Мороз О.Н. 'История античной литературы' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Речь идет о 'Хождении за 3 моря' и описании жизни в Индии.<br/>П: Они ели рис, травы, не ели никакого мяса.<br/>С: Они просто веганы.<br/>П: Они просто бедные.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8B%D0%BD%D0%BE%D0%B2%D0%B0'>#Лынова</a> Е.П. История литературы Древней Руси и эпохи Просвещения<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Индии.<br/>П: Они ели рис, травы, не ели никакого мяса.<br/>С: Они просто веганы.<br/>П: Они просто бедные.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8B%D0%BD%D0%BE%D0%B2%D0%B0'>#Лынова</a> Е.П."
},{
    "quote": "<div class='pi_text'>Этот класс не может иметь потомков. Чайлдфри класс.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A3%D0%B2%D0%B0%D1%80%D0%BE%D0%B2%D0%B0'>#Уварова</a> А. В. Объектно-ориентированное программирование<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Уварова А. В."
},{
    "quote": "<div class='pi_text'>*задаёт вопрос*<br/>*в ответ полная тишина*<br/><br/>- Правильно подсказываете, ....<br/><br/>Исаев В.А. Методы выращивания кристаллов <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Исаев В.А."
},{
    "quote": "<div class='pi_text'>Человек - ленивая скотина. Главный закон: лучше не работать, чем работать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D0%B5%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>#Малевинский</a> С.О. Старославянский язык.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Малевинский С.О."
},{
    "quote": "<div class='pi_text'>Поражение это не всегда поражение военное, первое поражение это признание себя человеком второго сорта. <br/><br/>Карнаушенко Л. В. История Государства и Права Зарубежных Стран. <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л. В."
},{
    "quote": "<div class='pi_text'>Сознание входит в кабинет и говорит: 'Доска белая'. И тут начинаются проблемы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Посмотрите на улицу. Видите, люди идут? Они все умрут. И мы с вами когда то умрем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D1%85%D0%B1%D0%B0%D0%B7%D1%8F%D0%BD'>#Шахбазян</a> М.А. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шахбазян М.А."
},{
    "quote": "<div class='pi_text'>С: Извините, а можно выйти?<br/>П: Да пожалуйста. Остановите, дайте Вите выйти.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D0%A3%D0%91%D0%93%D0%A3'>#эконом_КУБГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>Что вы думаете, земля круглая? Посмотрите в окно!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text zoom_text'>Ну какая тут самостоятельность, когда ты вступаешь в отношения с мужчиной.<br/><br/>Мороз О.Н. История зарубежной литературы 17-18 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Любое заболевание будет смертельным, если хорошо погуглить.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D1%80%D0%B5%D1%88%D0%B8%D0%BD%D0%B0'>#Терешина</a> М. В. Экономические основы работы с молодежью<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Терешина М. В."
},{
    "quote": "<div class='pi_text'>(Первая пара физкультуры. Беговые дорожки покрыты льдом и девочки стараются пройти через них на поле)<br/><br/>- Девушки на лабутэнах, аккуратней!<br/><br/>Виталий Викторович Дорошенко</div>",
    "author": "Дорошенко В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Так, будем писать слева....нет, лево это плохое.<br/><br/>Спасов С. В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Ну не волнуйтесь, у всех вас водятся бесы.<br/><br/>Мороз О.Н. 'Социология чтения' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>* Студент пытается дать определение. *<br/><br/>То, что Вы сейчас сказали, звучит как: машинка — это когда сел и такой вжух-вжух.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%BA'>#Жук</a> А. С. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Жук А. С."
},{
    "quote": "<div class='pi_text zoom_text'>Я только что тебя похвалил, ты  прости... И такое бывает.<br/><br/>Ажгихин С.Г., Проектирование. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Ажгихин С.Г."
},{
    "quote": "<div class='pi_text'>* студент сидит злой *<br/>— Ярик, не хмурься, а то придётся ботокс колоть! Ты в курсе как ботокс подорожал? 250 рублей за единицу!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B2%D0%B5%D0%BB%D1%8C%D0%B5%D0%B2%D0%B0'>#Савельева</a> О. Г. Английский язык <a data-link='/feed?section=search&amp;q=%23%D1%85%D1%83%D0%B4%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#худграф_кубгу</a></div>",
    "author": "Савельева О. Г."
},{
    "quote": "<div class='pi_text zoom_text'>Лучшая жена для брака - это женщина с юрфака.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BD%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Бондаренко</a> Ю. А. Профессиональная этика <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Бондаренко Ю. А."
},{
    "quote": "<div class='pi_text'>Контролируемая самостоятельная работа... Вы мало того, что должны работать, но еще и контролировать себя, то есть раздваиваться на объект и субъект.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text'>-Я вроде шучу, но не очень.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В История зарубежной литературы <br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Татаринов А.В"
},{
    "quote": "<div class='pi_text'>*на завершающей пересдаче по композиции*<br/>С: Ураураура, мы сдали! *студенты швыряют друг друга в небо*<br/>П: А че вы радуетесь? Это ж гамно.<br/><br/>Мартиросов А.В <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Мартиросов А.В"
},{
    "quote": "<div class='pi_text'>*Студент решает пример у доски*<br/>П: Ну что?<br/>С: Я лучше сдохну...<br/>*Смех, небольшая пауза*<br/>П: Ну я выйду на пару минут, постарайтесь все остаться живы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>П: Либо я попаду в дурдом, либо я уже там.<br/>С: Лучше туда не попадать.<br/>П: Вы так говорите,будто бы уже там были!<br/>С: А это уже секрет.<br/>.....<br/>П: Ну, потенциально можно сказать, что Вы уже там были<br/><br/>Тен О.К. Топология <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О.К."
},{
    "quote": "<div class='pi_text'>С: Вы этого не говорили.<br/>П: Вообще-то говорил,но не в этой аудитории.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D0%BD%D1%87%D0%B0%D1%80%D0%BE%D0%B2'>#Гончаров</a> Ю.В. История зарубежной литературы 17-18 века<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Гончаров Ю.В."
},{
    "quote": "<div class='pi_text zoom_text'>А сейчас я запишу какую-то формулу<img alt='🤔' class='emoji' src='/emoji/e/f09fa494.png'/><br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B6%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Кожевников</a> В.В. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кожевников В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Я за вас уже все подумала и решила!<br/><br/>Шершнева Н.Б. Лингвострановедение английского языка <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Шершнева Н.Б."
},{
    "quote": "<div class='pi_text zoom_text'>Вам бы только на панель идти,да вы там конкуренции не выдержите.<br/><br/>Штурба В.А. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Штурба В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Давайте не делать вид, что вы умнее других, давайте просто разговаривать.<br/><br/>Мороз О. Н. Современный литературный процесс <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Если человек хочет испугаться, то он и в банке горошка может найти дьявола. <br/><br/>Татаринов А.В. Литература стран изучаемых языков, <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>* Лекция. * <br/><br/>Мне все равно: 48 вас или 52. Вы всё равно со мной встретитесь и мимо меня не пройдете. Я как Цербер на пути к вашей сессии! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%BE%D0%BC%D1%83%D1%85%D0%B8%D0%BD%D0%B0'>#Хомухина</a> Е. И.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Хомухина Е. И."
},{
    "quote": "<div class='pi_text'>Понятно или не понятно?<br/>*подробно объясняет*<br/>Усекли теперь мысль?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%BF%D0%B0%D1%80%D0%B5%D0%B2'>#Лупарев</a> Е.Б. Административное право <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Лупарев Е.Б."
},{
    "quote": "<div class='pi_text'>П: Как строится график этой функции?<br/>С: Просто. <br/>П: Нет, ничего 'просто' в этой жизни не строится. <br/> <br/>Нгуен Н.З. Вычислительные методы <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Нгуен Н.З."
},{
    "quote": "<div class='pi_text zoom_text'>Нет, ну я конечно утрирую, но...<br/><br/>Костецкий А.Н. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Костецкий А.Н."
},{
    "quote": "<div class='pi_text'>В каждой шутке доля шутки.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D0%BB%D0%B8%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE'>#Пилипенко</a> С. Н. Иностранный язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Пилипенко С. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Если что-то не работает, поступаем по-латиноамерикански: взрываем к чертовой бабушке!<br/><br/>Кузьменко А.Н. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Кузьменко А.Н."
},{
    "quote": "<div class='pi_text'>Главное — знать плохие качества человека. Это теория, ряд Лорана так говорит.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Теория функций комплексного переменного<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Также существует известная вам теория вероятности. Её я называю: О Боже!!!<br/><br/>Князева Е.В. Математика и информатика, <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Князева Е.В."
},{
    "quote": "<div class='pi_text'>*студент отвечает на вопрос*<br/>- В твоих словах есть правильное направление и неправильное всё остальное...<br/><br/>Мороз О.Н. русская литература 18 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Вы же четвёртая власть! Делайте, что хотите.<br/><br/>Алещенко В.В. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Алещенко В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Не ИГПЗС, а Стивен Кинг какой-то.<br/><br/>Ювко М.А <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Не ИГ"
},{
    "quote": "<div class='pi_text zoom_text'>Как инопланетянину объяснить, что такое 'трезвый'? Покажите ему пьяного-приведите контр-пример!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Целые функции <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>— В споре рождается истина.<br/><br/>Каспарьянц Н.М. Бухгалтерский учет <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3_%D0%90%D1%80%D0%BC%D0%B0%D0%B2%D0%B8%D1%80'>#эконом_КубГУ_Армавир</a></div>",
    "author": "Каспарьянц Н.М."
},{
    "quote": "<div class='pi_text'>Котята, котята, забивайте голову морфологией.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8C%D1%86%D0%B5%D0%B2%D0%B0'>#Мальцева</a> Р. И. Современный русский язык <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мальцева Р. И."
},{
    "quote": "<div class='pi_text'>*опрашивает студентов*<br/> А вот ей я плюс поставлю - она против меня попёрла!<br/><br/>Натура А.И. Криминалистика <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Натура А.И."
},{
    "quote": "<div class='pi_text'>Галерка, потише там.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Палка падает, так и просится на грех.<br/><br/>Савченко В.Ф. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Савченко В.Ф."
},{
    "quote": "<div class='pi_text'>Иногда обмануть — это морально.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D1%81%D0%B8%D0%BF%D1%8F%D0%BD'>#Осипян</a> В. О. Информационные технологии <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Осипян В. О."
},{
    "quote": "<div class='pi_text'>* из коридора послышалась речь на английском *<br/><br/>Это английский? Я, пожалуй, дверь закрою.... Хорошо что не немецкий, а то бы нас уже захватили.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С. Н. Социология<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шаповалов С. Н."
},{
    "quote": "<div class='pi_text'>*препод смотрит на работу оценивающим взглядом* <br/>Оно настолько сраное и плохое, что добавить сюда крафт и текстуры и получится шедевр современного искусства!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%BE%D1%81%D0%BE%D0%B2'>#Мартиросов</a> А. В. Проектная графика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#фад_КубГу</a></div>",
    "author": "Мартиросов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Прекратите думать, что вы — Гарри Поттер.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%B5%D0%B7%D0%B5%D0%BF%D0%BE%D0%B2%D0%B0'>#Резепова</a> В. К. Практика языка <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Поттер.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%B5%D0%B7%D0%B5%D0%BF%D0%BE%D0%B2%D0%B0'>#Резепова</a> В. К."
},{
    "quote": "<div class='pi_text'>Носить своё дитя под сердцем, ждать его, а потом рожать - это самое настоящее счастье.  Вот как дадут вам вашего ребёнка в роддоме, мужа чмокните и скажете 'Права была Миненкова!'.<br/><br/>Миненкова В. В.  Демография <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Миненкова В. В."
},{
    "quote": "<div class='pi_text'>* Задаёт вопрос *<br/>* Все молчат *<br/>- Правильно подсказываете!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%98%D1%81%D0%B0%D0%B5%D0%B2'>#Исаев</a> В. А. Электричество<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Исаев В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Не пытайтесь казаться Пуффендуйцами, вы всегда должны предполагать худшее. Вы Слизеринцы!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2'>#Половодов</a> Ю. А. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Половодов Ю. А."
},{
    "quote": "<div class='pi_text'>* Пара заканчивается. *<br/><br/>П: - У нас время ещё есть? <br/>С: - Нет.<br/>П: - А что вы молчите?<br/>С: - Так интересно же. <br/>П: - А мне из-за вас теперь голодным бегать! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%B2'>#Бараков</a> В. Н. Русская классика и современный медиадискурс <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Нет.<br/>П: - А что вы молчите?<br/>С: - Так интересно же. <br/>П: - А мне из-за вас теперь голодным бегать! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%B2'>#Бараков</a> В. Н."
},{
    "quote": "<div class='pi_text'>– Как это называется? <br/>– Воронка продаж! <br/>– Утопись в ней.<br/>– ...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B5%D1%80%D0%B3%D0%B8%D0%B5%D0%BD%D0%BA%D0%BE'>#Сергиенко</a> В.А. <a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Журфак_кубгу</a></div>",
    "author": "Сергиенко В.А."
},{
    "quote": "<div class='pi_text'>С: Вы на меня так смотрите, как будто я несу чушь.<br/>П: Да нет, я просто глупо выгляжу.<br/><br/>Немец Г.Н. ОИК <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Немец Г.Н."
},{
    "quote": "<div class='pi_text'>С: Я с Вами не согласна...<br/>П: Спорь со мной!<br/><br/>Кулишов В.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Кулишов В.В."
},{
    "quote": "<div class='pi_text'>П: Кто такие Кассандра и Флориза?<br/>С: Никто!<br/>П: Это вы никто.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. История русской литературы 18 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>Да кто такой адвокат в этом процессе? <br/>Да он сюнька, он никто! <br/><br/>Волгина А.П. История государства и права России <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Волгина А.П."
},{
    "quote": "<div class='pi_text zoom_text'>- Я за рулём в кожаных перчатках. Не отвлекайте меня! <br/><br/>Шувалов С. С. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text'>С: Это же нигде не написано.<br/>П: В голове моей написано.<br/><br/>Даниелян А.С. 'Римское право' <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text zoom_text'>С какого ты колхоза, красавчик?<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text zoom_text'>На Руси беззубый мужчина считался идеальным женихом: мало ест.<br/><br/>Касьянов В.В. История России. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Ливония+Польша=Речь Посполитая=Любовь <img alt='😍' class='emoji' src='/emoji/e/f09f988d.png'/><br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В.И. История Кубани <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>* пара подходит к концу *<br/><br/>У нас ещё есть 15 минут и вы вообще молодцы! Это я себе.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>-Знаете, вся ваша жизнь состоит из трудностей. Моя же задача - их создавать!<br/><br/>Зеленов В.И. Химическая технология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Зеленов В.И."
},{
    "quote": "<div class='pi_text'>* Преподаватель спрашивает задание из практической. Группа молчит. *<br/><br/>Долго я буду ждать того, кто рискнёт своей жизнью? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BA%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Ткаченко</a> М. С. Латинский язык<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Ткаченко М. С."
},{
    "quote": "<div class='pi_text'>*Смотрит на часы*<br/>-Так, до конца пары еще 37 минут, а это означает, что я буду говорить еще медленнее.<br/><br/>Лежнев В.В. Вычислительная физика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Лежнев В.В."
},{
    "quote": "<div class='pi_text'>Если ты упал лицом в грязь, не нужно делать вид, что это перфоманс.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D1%81%D1%82%D0%B0%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE'>#Остапенко</a> А. А. Педагогика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Остапенко А. А."
},{
    "quote": "<div class='pi_text zoom_text'>В шершавости — жизнь, в гладкости — смерть, ну и в керамо-граните.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%B7%D1%8C%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE'>#Кузьменко</a> А. Н. Архитектурное проектирование <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Кузьменко А. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Поговорим о генеалогических героях. Да нет же, не гинекологических. Что вы смеетесь? Да, я знаю слово гинекология! <br/><br/>Мороз О.Н. Античная литература <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Ну, вы были почти правы. Если правильный ответ - 10 баллов, то вы попали в 4. <br/><br/>Богатов Н.М. Физика полупроводников.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Богатов Н.М."
},{
    "quote": "<div class='pi_text'>*о романе У. Эко 'Имя розы'*<br/>А концовка меня вообще бесит!<br/><br/>Татаринова Л.Н.  'Современная зарубежная литература' <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринова Л.Н."
},{
    "quote": "<div class='pi_text'>*студентка сдаёт переведённый текст и задания*<br/>П: Так, ладно, ваша работа с пивом пойдёт, давайте зачётку!<br/><br/>Писаренков А.А. Иностранный язык <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Писаренков А.А."
},{
    "quote": "<div class='pi_text'>Приходит чужак, мы ему интелегентно объясняем: <br/>'Пошёл вон отсюда , иначе с тобой будет тоже самое, что и с твоей машиной!' <br/>Мы дали ему свободу , но не свободу выбора. <br/><br/>Шпаков А.Э. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Шпаков А.Э."
},{
    "quote": "<div class='pi_text'>Когда читаешь черно-белую книгу, любовные сцены воспринимаешь индивидуально. <br/><br/>Молчанова М. М. 'Онлайн журналистика'<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Молчанова М. М."
},{
    "quote": "<div class='pi_text'>* О проблеме сквернословия *<br/><br/>Ходит поверье: если русский человек день без матюков проживет, то он умрет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2'>#Шпаков</a> А.Э. Педагогическая риторика<br/><a data-link='/feed?section=search&amp;q=%23%D1%85%D1%83%D0%B4%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#худграф_кубгу</a></div>",
    "author": "Шпаков А.Э."
},{
    "quote": "<div class='pi_text zoom_text'>Сейчас я вам расскажу одну историю...<br/><br/>Хачиянц А.И. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Хачиянц А.И."
},{
    "quote": "<div class='pi_text'>Самоубийством животные стараются не заниматься. Это противоречит их базовому инстинкту. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D1%81%D1%82%D0%BE%D0%B2'>#Кустов</a> С. Ю. Зоология <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Кустов С. Ю."
},{
    "quote": "<div class='pi_text'>Видеть несколько десятков поэтов, жующих бутерброды — нелёгкое испытание.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Доклассическая словесность в медиа<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>Филолог и политика - страшные вещи.<br/>Филолог-девушка и политика - вообще несовместимые!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Зарубежная литература <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>Цоканье как стиль жизни.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%BB%D1%8C%D0%B2%D0%B0%D1%88%D0%BE%D0%B2'>#Вальвашов</a> А. Н. Основы экономической теории<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Вальвашов А. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Пойдете в Московский университет — это будет здорово.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Задача. Сын отца профессора беседует с отцом сына профессора. Кто с кем говорит, если профессор в разговоре не участвует?<br/><br/>Лазарев В.А. Экстремальные задачи теории функций <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Лазарев В.А."
},{
    "quote": "<div class='pi_text'>Обычно мы понимаем о чем говорится в передаче... Если это, конечно, не 'умники и умницы'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С. Н. Социология<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шаповалов С. Н."
},{
    "quote": "<div class='pi_text'>Лучше бы так математикой занимались! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE'>#Яременко</a> Л. А. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Яременко Л. А."
},{
    "quote": "<div class='pi_text zoom_text'>Загугли, загугли ты уже...<br/><br/>Кимберг А.Н. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Кимберг А.Н."
},{
    "quote": "<div class='pi_text'>Западная Европа относилась к психически нездоровым людям менее мягко. К ним применялись такие лечебные методы, как, например, сжигание на костре.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BE%D0%BC%D0%B8%D0%BB%D0%BE%D0%B2'>#Томилов</a> А. Б. Психопатология<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Томилов А. Б."
},{
    "quote": "<div class='pi_text'>*рассказ о Сиренах*<br/>П: Ничего смешного нет!<br/>С: Так, Вы сами смеетесь!<br/>П: Я не смеюсь, я улыбаюсь.<br/><br/>Мороз О.Н. История античной литературы  <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>На комиссии будет 4 человека, так что учите. Я буду максимально вас поддерживать, то есть молчать.<br/><br/>Арутюнов Э. К. 'История государства и права зарубежных стран' <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Арутюнов Э. К."
},{
    "quote": "<div class='pi_text'>* Преподаватель неудачно рисует фигуру на доске и начинает спрашивать студентов о ее свойствах *<br/><br/>П: Так, ну и что же здесь мы видим?<br/>С: Ничего же непонятно, что Вы нарисовали.<br/>П: Не стреляйте в пианиста. Он играет как умеет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D1%80%D0%B1%D0%B0%D0%BA%D0%BE%D0%B2'>#Щербаков</a> М. Е. Аналитическая геометрия<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Щербаков М. Е."
},{
    "quote": "<div class='pi_text zoom_text'>Ты лошаааааара.<br/><br/>Кравченко Г.Г. Академическая живопись <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Кравченко Г.Г."
},{
    "quote": "<div class='pi_text'>За три дня до сдачи курсовой у студентов начинается рытьё окопов в полный рост.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%BE%D0%B1%D1%81%D0%BA%D0%B8%D0%B9'>#Робский</a> В. В. Педагогика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Робский В. В."
},{
    "quote": "<div class='pi_text'>* два студента-магистра пытаются настроить проектор, но никак не удаётся разобраться с кабелем питания *<br/><br/>Ну что вы там копаетесь? Два взрослых мужика, а вставлять так и не научились.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text'>П: Ну, как у тебя дела?<br/>С: Всё нормально.<br/>П: Какой ты оптимист, у тебя ведь всё плохо :) <br/><br/>Кузьменко А.Н. Проектирование. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Кузьменко А.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Уснул на лекции - не восхрапи. Ибо восхрапев, нарушишь сон ближнего своего.<br/><br/>Байбаков С.Е. <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Байбаков С.Е."
},{
    "quote": "<div class='pi_text zoom_text'>Крон, значит, своих детей сожрал, а циклоп спутников Одиссея скушал?! Какие разные натуры!<br/><br/>Чумаков С. Н. Античная литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Чумаков С. Н."
},{
    "quote": "<div class='pi_text'>* преподаватель сформулировал теорему *<br/>П: - Так, теорему записали. Доказательство. Что теперь мы говорим?'<br/>С: - Очевидно.<br/>П: - Ну хорошо, сейчас пишем очевидно, а на зачёте докажете сами.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D1%87%D0%B0%D1%80%D0%BE%D0%B2'>#Бочаров</a> А. В. Функциональный анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Очевидно.<br/>П: - Ну хорошо, сейчас пишем очевидно, а на зачёте докажете сами.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D1%87%D0%B0%D1%80%D0%BE%D0%B2'>#Бочаров</a> А. В."
},{
    "quote": "<div class='pi_text zoom_text'>— Мы геометрию в седьмом классе учить начали, так что мы инвалиды немножко.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B8%D1%82%D0%BE%D0%B2'>#Титов</a> Г. Н. Избранные разделы геометрии <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Титов Г. Н."
},{
    "quote": "<div class='pi_text'>* тишина, лекция; громкий хлопок: окно и дверь синхронно захлопываются * <br/>— Контрольный в печень!<br/><br/>Афанасьева Т. Н. Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Афанасьева Т. Н."
},{
    "quote": "<div class='pi_text'>Будете себя хорошо вести, я и это расскажу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Фундаментальные дискретные модели<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>* студент просит открыть окно пошире *<br/>П: Ну у меня где-то были запасные почки.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D1%8B%D1%81%D0%BA%D1%83%D0%B1%D0%BE%D0%B2'>#Выскубов</a> Е. В. Программные платформы управления процессами<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Выскубов Е. В."
},{
    "quote": "<div class='pi_text zoom_text'>Раз Христос мог быть женщиной, почему он не мог быть украинцем.<br/><br/>Мороз О.Н. литература 18 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Будешь картошку по биному чистить!<br/><br/>Барсукова В.Ю. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Барсукова В.Ю."
},{
    "quote": "<div class='pi_text'>*идёт проверка перевода*<br/>П. Нет, тут больше подходит слово бормотать - murmur.<br/>С. А можете проспилинговать?<br/>П. m,u,r. m,u,r<br/>C. Что?<br/>П. Мур-мур, говорю.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%BB%D1%8C%D0%B6%D0%B5%D0%BD%D0%BA%D0%BE'>#Шульженко</a> М. Ю. Теория и практика перевода, <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Шульженко М. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Друзья мои, вы очень счастливые люди! У вас кредитов нет.<br/><br/>Богдашев И. В. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Богдашев И. В."
},{
    "quote": "<div class='pi_text zoom_text'>Если я не знаю, я иду в словарь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B8%D1%82%D1%83%D1%81'>#Литус</a> Е.В. Актуальные проблемы изучения грамматики <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Литус Е.В."
},{
    "quote": "<div class='pi_text zoom_text'>-Вы кто?<br/><br/>Дедюхин А.А. английский язык <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Дедюхин А.А."
},{
    "quote": "<div class='pi_text'>П: - Что там у вас?<br/>С: - У меня ручка не пишет. Можно мне другую ручку?<br/>П: - Вам правую или левую?<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В. Математическая теория языков <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text zoom_text'>По мановению волшебной палочки - ВЖУХ И ТЫ ОТЧИСЛЕН <img alt='✋🏻' class='emoji' src='/emoji/e/e29c8bf09f8fbb.png'/><br/><br/>Бондаренко Ю.А. Профессиональная этика <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Бондаренко Ю.А."
},{
    "quote": "<div class='pi_text'>Вергилия друзья дразнили «Виргилием» от латинского «virgo» — «девушка», потому что он был скромным и застенчивым, как девушка. Да. Но это про древнеримских девушек — не про современных. Не про вас.<br/><br/>Чумаков С.Н. Античная литература<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>Есть задачи не для задач, а для нас с вами, для будущих задач.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE'>#Яременко</a> Л. А. Комплексный анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Яременко Л. А."
},{
    "quote": "<div class='pi_text'>П: - Я тоже на первых курсах плохо учился.<br/>С: - На первых четырех курсах?<br/>П: - Да, и поэтому стал преподавателем.<br/><br/>* Смех. *<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BD'>#Володин</a> В. С. Электричество и магнетизм<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Володин В. С."
},{
    "quote": "<div class='pi_text'>СССР — единственная страна, в которой законы физики не нарушаются.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2'>#Половодов</a> Ю. А. Физика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Половодов Ю. А."
},{
    "quote": "<div class='pi_text'>Есть люди святые-святые, у них полно благодати. А есть грешники-грешники, у них проблемы.<br/><br/>Шахбазян М.А. Литература Средневековья и эпохи Возрождения.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шахбазян М.А."
},{
    "quote": "<div class='pi_text'>*пара закончилась*<br/> На сегодня всё. Катитесь.<br/><br/>Тлюстен С.Р. Теория вероятностей <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С.Р."
},{
    "quote": "<div class='pi_text'>- Всем понятно, что произошло на доске?<br/>- *недоуменные, непонимающие взгляды*<br/>- Ну и ладно.<br/><br/>Костенко К.И. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>*у студента звонит телефон*<br/>П: У вас в штанах какой-то мужик орет.<br/><br/>Подколзин В.В., Дискретная математика, <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В.В."
},{
    "quote": "<div class='pi_text'>Смех без причины- признак... Римского права.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D1%8F%D0%BD'>#Даниелян</a> А.С. Римское право<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Если девушка говорит 'нет', то это значит 'да', но позже.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B1%D0%B5%D0%B4%D0%B5%D0%B2%D0%B0'>#Лебедева</a> А.П. Математическая логика и дискретная математика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Лебедева А.П."
},{
    "quote": "<div class='pi_text'>Александр решил быстрее всех задачу, потому что он, как Сталин, красным карандашом может чертить линии и говорить :'Польша принадлежит нам!'.<br/><br/>Молочников Н. Р. 'Макроэкономика'<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Молочников Н. Р."
},{
    "quote": "<div class='pi_text zoom_text'>То, о чем экономисты не любят упоминать, психологи часто подсовывают.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%B7%D0%B0%D0%BA%D0%BE%D0%B2'>#Лузаков</a> А.А. Управление персоналом организации <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Лузаков А.А."
},{
    "quote": "<div class='pi_text'>Я хочу, чтобы вы были моими учениками, а не мучениками! <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%8E%D0%B3%D0%B0'>#Косюга</a> А. И. Скульптура <br/><a data-link='/feed?section=search&amp;q=%23%D1%85%D1%83%D0%B4%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#худграф_кубгу</a></div>",
    "author": "Косюга А. И."
},{
    "quote": "<div class='pi_text'>Чем отличается зачёт и экзамен на этом курсе? Правильно! Ничем! <br/><br/>Шершнева Н. Б. Лингвострановедение английского языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Шершнева Н. Б."
},{
    "quote": "<div class='pi_text'>*контрольная по истории, студентка гуглит ответы на вопрос*<br/>Аааагааа, списываешь, пиши на полях  'Минус бал, Владимир Иваныч задолбал'.<br/><br/>Петров В. И. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>Для русского человека ненормативная лексика - это не отсутствие культуры, а  экспрессия!<br/><br/>Хазова С.А.<br/>Псих.-пед. взаимодействие участников образовательного процесса <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Хазова С.А."
},{
    "quote": "<div class='pi_text'>Чего уж пить боржоми, если печень отвалилась.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D0%B9%D0%B4%D0%B5%D0%BD%D0%BA%D0%BE'>#Гайденко</a> С. В. Основные разделы элементарной математики<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Гайденко С. В."
},{
    "quote": "<div class='pi_text zoom_text'>— Садитесь, удовлетворительно... хотя я не удовлетворен.<br/><br/>Ювко М. А. История отечественного государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М. А."
},{
    "quote": "<div class='pi_text'>*рассказывая о ЕГЭ*<br/>Поехали за орехами, приехали с бобами.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B8%D0%BD%D0%B0'>#Любина</a> Г. С. Практический курс русского языка: пунктуация<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Любина Г. С."
},{
    "quote": "<div class='pi_text'>Чалый В.В. 'Русский язык и культура речи'<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Чалый В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Будьте готовы к тому, что вы не выбираете спутников жизни. Спутники выбирают вас.<br/><br/>Ломинина З.И. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Ломинина З.И."
},{
    "quote": "<div class='pi_text'>На РГФе два типа парней: мальчики-волки и мальчики, как девочки. <br/><br/>Нюхтилин.П.В., Веб-дизайн<br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "На РГ"
},{
    "quote": "<div class='pi_text'>Я не думала, что вы такие гуманитарии.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D0%B2%D1%87%D0%B0%D1%80%D0%BE%D0%B2%D0%B0'>#Овчарова</a> К. В. Основы теоретической и прикладной лингвистики<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Овчарова К. В."
},{
    "quote": "<div class='pi_text'>Посмотрите на картинку, которую я стёр.<br/><br/>Мавроди Н.Н. Комплексный анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Матфак_кубгу</a></div>",
    "author": "Мавроди Н.Н."
},{
    "quote": "<div class='pi_text'>Если вы видите музыку человека ВКонтакте, то я не понимаю, почему вы все ещё не замужем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B2%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Свитенко</a> Н.В. История русской литературы 19 века.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Свитенко Н.В."
},{
    "quote": "<div class='pi_text zoom_text'>Напиши, но эта формула для поросятов, ясно?<br/><br/>Коновалов А.В. Семинары по физике на <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%85%D0%B8%D0%B2%D1%82_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фхивт_кубгу</a></div>",
    "author": "Коновалов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Меня зовут Александр Александрович. Если кто забудет, можно просто - 'моя лапочка'. <br/><br/>Худокормов А.А. Спецпрактикум по микробиологии.  <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Худокормов А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Дебил — это гениальный идиот.<br/><br/>Рожков А. В. Компьютерная алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Рожков А. В."
},{
    "quote": "<div class='pi_text'>Что мы ищем? То, что мы ищем, наверно, это неизвестное.<br/><br/>Ойнас И.Л. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Ойнас И.Л."
},{
    "quote": "<div class='pi_text'>- Мы Вас не слышим.<br/>- Да пофиг.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%BF%D0%BC%D0%B0%D0%BD'>#Купман</a> В. А.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Купман В. А."
},{
    "quote": "<div class='pi_text'>С: Холопами могли бы нас назвать уже.<br/>П: В следующий раз.<br/><br/>Маркосян Г. А. Информационные технологии в юридической деятельности <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Маркосян Г. А."
},{
    "quote": "<div class='pi_text'>Преподаватель студенту:<br/>-Вот смотри, купила я вечером курицу, решила приготовить. Курица сначала стала зеленой, потом синей, потом серой и рассыпалась в порошок. И я поняла, что я приготовила кило-двести героина...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D1%80%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0'>#Аронова</a> Е. Ю. Педагогика <a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Матфак_КубГУ</a></div>",
    "author": "Аронова Е. Ю."
},{
    "quote": "<div class='pi_text'>-Извините это моя ошибка. <br/>-Плохая девочка.<br/><br/>Даниелян А.С. ТГП <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Ааагонь! <br/><br/>Даниелян А. С. Теория государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text'>Земля плоская? Как это нет? Посмотрите в окно!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text zoom_text'>Вы меня не понимаете? Становитесь в очередь!<br/><br/>Шувалов С.С. , <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С.С."
},{
    "quote": "<div class='pi_text'>- Вот я червяк (откидывается на спинке стула, вытягивает руки и ноги, выпучивает глаза). Лежу на Восточно-Европейской Платформе. Чего я жду?<br/>*неловкое молчание затупивших студентов*<br/>- Я ЖДУ, КОГДА НАЧНЁТСЯ КАЙНОЗОЙСКАЯ СЕДИМЕНТАЦИЯ!!!<br/><br/>Бондаренко Н.А. 'Региональная геология' <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Бондаренко Н.А."
},{
    "quote": "<div class='pi_text'>Регулярное чтение литературы делает тебя немного литератором,<br/>при условии, что литература качественная!<br/><br/>Жирма В.В. , физ.география России и ближнего Зарубежья<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text'>И вообще, в вашем деле перспектив никаких нет! *пауза* Поэтому, самое время бросить универ и начать заниматься приличным делом!! *пауза* ТОРГОВЛЕЙ ЦИТРУСОВЫМИИИ!!! или хотя бы открыть шашлычную! <br/><br/>Нагорный С.В. 'Алгебра и геометрия' <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Нагорный С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Кто победил, тот и красавчик!<br/><br/>Чорномидз Ю.Н. История государства и права зарубежных стран <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Чорномидз Ю.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Дети с двух лет по три языка знают... Вот меня интересует — откуда ко мне тогда такие идиоты приходят?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D0%BB%D1%8C'>#Пиль</a> Л. И. Теория и практика химического анализа <a data-link='/feed?section=search&amp;q=%23%D1%85%D0%B8%D0%BC%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#химфак_кубгу</a></div>",
    "author": "Пиль Л. И."
},{
    "quote": "<div class='pi_text'>П: Кто такой Хайдегер?<br/>С: Метафизик.<br/>П: Сам ты метафизик! Выкиньте его в окно! Он лишний на этом празднике жизни.<br/><br/>Спасов С. В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>Победю, дерзю. <br/>Ну, не звучит же. Говоришь 'дю' и 'зю' и ты уже никакой не дерзкий, никакой не победитель. <br/><br/>Шемелева Т.В., Русский язык: словообразование и морфология. <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Шемелева Т.В."
},{
    "quote": "<div class='pi_text'>*на экзамене*<br/>У тебя под этой юбкой наверняка куча шпор. Хотел бы я на них посмотреть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Я вас щас сфоткаю и выложу на стену, будете лайкать. <br/><br/>Узлов Ю.А. История. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>*группа пишет контрольную* <br/>С: А сколько у нас времени?<br/>П: 50 минут.<br/>С: Прям по-царски.<br/>П: Да я тоже так подумал.<br/><br/>Шаповалов С.Н. История<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Шаповалов С.Н."
},{
    "quote": "<div class='pi_text'>Я оцениваю это высоко — нулём баллов. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B2%D0%B8%D0%BD'>#Савин</a> В. Н. Аналитическая геометрия<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Савин В. Н."
},{
    "quote": "<div class='pi_text'>Вам шезлонг не нужен? Приносите с собой, я разрешаю!<br/><br/>Авджян Г. Д. Теория управления.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Авджян Г. Д."
},{
    "quote": "<div class='pi_text'>С: - Чем эти книги были особенными? <br/>П: - Эти книги были особенно непонятны.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%8F%D0%BD%D0%BE%D0%B2%D0%B0'>#Буянова</a> А. А.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Буянова А. А."
},{
    "quote": "<div class='pi_text'>Вот, действительно, чёрный чай был в Японии. А сейчас что? Набульбенил себе кружку, а он всего лишь коричневый...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Леванова</a> К. А. История (Всеобщая история)<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Леванова К. А."
},{
    "quote": "<div class='pi_text'>Жизнь, она как правило логарифмическая.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К.И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФКТиПМ_КубГу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>* преподаватель диктует очень медленно, чтобы все успели записать *<br/><br/>П: Я медленно диктую?<br/>С: А можно ещё медленней?<br/>П: Если я буду диктовать ещё медленней, то я буду ощущать себя в классе коррекции.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text'>* стирает длинное предложение с доски *<br/><br/>Я всегда стираю концы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%BE%D0%B2%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0'>#Новикова</a> К. А. Практический курс немецкого языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Новикова К. А."
},{
    "quote": "<div class='pi_text'>Вот приносите вы на экзамене преподавателю программу. Он вам говорит: 'Неправильно!'. А вы ему отвечаете: 'Докажи!'<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И.  Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>*идет самостоятельная*<br/><br/>Подглядываешь? Бери пиши себе на полях З-звездочку. Задолбал.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D0%A3%D0%91%D0%93%D0%A3'>#эконом_КУБГУ</a></div>",
    "author": "Задолбал.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И."
},{
    "quote": "<div class='pi_text zoom_text'>Доброе утро, мы в эфире.<br/><br/>Ювко М.А. Теория Государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>*студент читает доклад на тему быт и повседневность*<br/>П: Производство человека в быту? Что это вообще такое?<br/>С: Ну это когда без романтики!<br/><br/>Усова Л. В. Социология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Усова Л. В."
},{
    "quote": "<div class='pi_text'>Все функции вычислимы. Это так же верно, как и то, что я сейчас ухожу от вас.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>— Не пугайся, это музыка…<br/><br/>Казаков Г. А. Правоведение <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Казаков Г. А."
},{
    "quote": "<div class='pi_text'>— Что Вы сейчас нервничаете? Нервничать надо, когда будете замуж выходить. Там главное не прогадать, а то потом делёжка имущества, детей, но они в большинстве случаев нам достаются.<br/><br/>Мамий Е.А. Теория финансов <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Мамий Е.А."
},{
    "quote": "<div class='pi_text'>*монотонно*<br/><br/>- Сейчас я вам скажу шутливую фразу, выражение незатейливое. Политологи могут записать: Политология - наука современности.<br/><br/>Савва Е.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Савва Е.В."
},{
    "quote": "<div class='pi_text'>С: Владимир Владимирович, а Вы верите в хиромантию?<br/>П: Верю, а что? Педагогика же существует как наука, а хиромантия не может?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%BE%D0%B1%D1%81%D0%BA%D0%B8%D0%B9'>#Робский</a> В. В. Социальная психология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Робский В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Жизнь продолжается, даже если не сдал экзамен, жизненный уровень только снижается.<br/><br/>Сидоров В.А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Интеллектуальное напряжение всегда рождает боль.<br/><br/>Белоус. В. Ф. Основы социальной работы <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Белоус. В. Ф."
},{
    "quote": "<div class='pi_text'>С: Это усеченный конус получается<br/>П: Нууу, не совсем. Это больше на вулкан похоже... или на фонтанчик.<br/><br/>Черных Н.М. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Черных Н.М."
},{
    "quote": "<div class='pi_text'>Дело - разрешать, уродов - сажать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Малиновский</a> О.Н. Международное право <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Малиновский О.Н."
},{
    "quote": "<div class='pi_text'>Вот смотрите, вам нужно отправить палку колбасы своему соседу в конвертах. Вы берёте, нарезаете колбасу на кружочки, раскладываете по конвертам, и отправляете ему, приложив номера кружочков и их количество, что бы можно было собрать колбасу снова.<br/>Примерно так работает протокол TCP/IP.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D1%8B%D0%BD%D0%BA%D0%B8%D0%BD'>#Волынкин</a> В.А. Информатика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Волынкин В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Сессия - это мой праздник, и я его себе устрою.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B5%D1%86%D0%BA%D0%B8%D0%B9'>#Любецкий</a> А.И. История государственного управления <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Любецкий А.И."
},{
    "quote": "<div class='pi_text'>*о том, что каждый должен любить свою работу*<br/><br/>Ну вот представьте, врач детский сидит и думает: «Блин, опять ко мне эти уроды пришли».<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%B0%D0%B3%D1%83%D1%80%D0%BE%D0%B2'>#Хагуров</a> Т. А. Экономика образования <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Хагуров Т. А."
},{
    "quote": "<div class='pi_text zoom_text'>Внимание! Сейчас я нанесу вам увечья средней тяжести.<br/><br/>Гарин С.В. 'Логика' <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Гарин С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Вот, вы кого предпочитаете: блондинов/ брюнетов?.. С пикантной кривизной ног или со стройными? <br/><br/>Осташевский А.В. 'Правовые основы журналистики' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>Зимой ты на балу светская львица, сидишь с каменным лицом, а летом ты в деревне ловишь бабочек и нюхаешь цветочки.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Тенденции развития современной периодики <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>- У тебя тут вот всё натянуто на эту точку, и поэтому весь график идет в пи! (имеется в виду греческая буква, разумеется, но...как звучало! :D)<br/><br/>Афанасьева Т.Н., Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#матфак_КубГУ</a></div>",
    "author": "Афанасьева Т.Н."
},{
    "quote": "<div class='pi_text'>*хлюпает кофе* <br/><br/>Ну и что у нас хорошего сегодня? Мда... Не видите вы хорошего.<br/><br/>Мороз О.Н. на всех парах <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>-Фуу, это признак плохого тона.<br/><br/>Кирокосян М. А., Статистика финансов <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кирокосян М. А."
},{
    "quote": "<div class='pi_text zoom_text'>Любовь — это не отношение эквивалентности.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я. В. Математика и статистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я. В."
},{
    "quote": "<div class='pi_text zoom_text'>Не мыслите числами! Мыслите векторами.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%BE%D1%80%D0%BE%D1%88%D0%B5%D0%BD%D0%BA%D0%BE'>#Дорошенко</a> О. В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Дорошенко О. В."
},{
    "quote": "<div class='pi_text'>Когда оказываете первую медицинскую помощь, не надо срывать с него одежду и говорить какой ты красавец.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BC%D0%BE%D0%BD%D0%BE%D0%B2'>#Комонов</a> С. В. Безопасность жизнедеятельности<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Комонов С. В."
},{
    "quote": "<div class='pi_text'>С: Почему вы отрицаете существование Атлантиды?<br/>П: Знаете, на этот счет у меня есть американская пословица. Она не совсем подходит, но четко отражает мое отношение к данному вопросу.  'Если что-то выглядит как говно, пахнет как говно и на ощупь тоже как говно, то, скорее всего, это 'что-то' и есть говно.' Ваша Атлантида - говно. <br/><br/>Штурба Е.В.Социология.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Штурба Е.В."
},{
    "quote": "<div class='pi_text'>Иван Грозный имел традицию родниться с многими государствами: жены там приобретались - дочки отдавались.<br/><br/>Захарова М.В. Техника и технология печатных СМИ.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Захарова М.В."
},{
    "quote": "<div class='pi_text'>Гуманно, но не этично - это как каннибал вегетарианец. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BD%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Бондаренко</a> Ю.А. Профессиональная этика и служебный этикет <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Бондаренко Ю.А."
},{
    "quote": "<div class='pi_text'>Как бы назвали эту женщину? Я думаю, на букву 'Б', но отнюдь не барышней.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D1%8B%D0%BA'>#Петрык</a> Я. Ю. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Петрык Я. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Созвездие радиожанров, подобно кровеносной системе человека...<br/><br/>Факторович А.Л. Современные информационные технологии <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Факторович А.Л."
},{
    "quote": "<div class='pi_text zoom_text'>Так что, когда вы прочтете нормативы, придет осознание :'I'm лох!'   <br/><br/>Кузьменко А.Н. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Кузьменко А.Н."
},{
    "quote": "<div class='pi_text'>Я люблю математику, когда получаю зарплату и трачу деньги. А вы историю любите, когда получаете зачет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D1%85%D1%83%D1%82%D0%BB%D1%8C'>#Яхутль</a> Ю. А. История<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Яхутль Ю. А."
},{
    "quote": "<div class='pi_text zoom_text'>Мои магистранты преподают в школе сейчас. Им нравится, но это пройдет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B2%D0%B0'>#Большова</a> А. Ю. Стилистика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Большова А. Ю."
},{
    "quote": "<div class='pi_text'>* Пара по словообразованию. *<br/><br/> В чем разница между певец и певун? Если вы говорите, что не умеете петь, но иногда любите попеть, то вы певун.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B5%D0%BC%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0'>#Шемелева</a> Т. В.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Шемелева Т. В."
},{
    "quote": "<div class='pi_text'>С: Марк Александрович, Вам нравится преподавать?<br/>П: Если бы мы с вами встретились вне университета, то я бы вам ответил на этот вопрос, а так, у нас нет предмета марковедение.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AE%D0%B2%D0%BA%D0%BE'>#Ювко</a> М.А. Теория государства и права. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>*рисует на доске график функции, обозначает её как зависимость привлекательности девушки от расстояния, применяет несколько теорем*<br/>— ... на границах отрезка функция стремится в ноль, а значит от девушек нужно держаться на расстоянии.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Чтобы оставить комментарий, тебе нужно зарегистрироваться, залогиниться, замогилиться…<br/><br/> Утков Г. Н. про соцсети <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г. Н."
},{
    "quote": "<div class='pi_text'>Показатель степени сильнее, чем основание, потому что он выше. Как правило, кто выше, тот и главный.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Теория функций комплексного переменного<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Так, это не пишем, просто внимательно слушаем! А теперь с красной строки!<br/><br/>Ярёменко Л.А. Мат. анализ <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Ярёменко Л.А."
},{
    "quote": "<div class='pi_text'>Так чем же отличается западная культура от нашей? Вот, например, чем отличается судьба св. Себастьяна и св. Георгия? Жизненный путь одинаковый же, только закончили они по-разному, так почему у нас почитается Георгий, а не Себастьян? <br/>Ответ прост: он воскрес. Да, просто воскрес. Вот взял и воскрес...<br/>Так что вы знаете, что делать, чтобы прославиться.<br/><br/>Свитенко Н.В. Основы отечественной художественной культуры.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D0%A4%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФилФак_КубГу</a></div>",
    "author": "Свитенко Н.В."
},{
    "quote": "<div class='pi_text zoom_text'>Женская логика, как беременность — либо она есть, либо ее нет. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%BB%D0%B8%D1%88%D0%BE%D0%B2'>#Кулишов</a> В. В. Основы менеджмента профилактики и коррекции девиантного поведения <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_Кубгу</a></div>",
    "author": "Кулишов В. В."
},{
    "quote": "<div class='pi_text'>Я, когда хожу по улице, встречаю людей, понимаю, что в университете хорошо — здесь такая концентрация магов.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В. Античная логика и риторика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Ничего не существует, а если и существует, то оно непостижимо, а если и постижимо, то необъяснимо и невыразимо.<br/><br/>Петрык.Я Ю. Филосия. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Петрык Я. Ю."
},{
    "quote": "<div class='pi_text'>П: Так, что мы делаем?<br/>С: Вы нас смешите.<br/>П: Чем я вас смешу?<br/>С: Формулами!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D0%B0%D0%BF%D0%BB%D1%8F'>#Чапля</a> В.В. Экономика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Чапля В.В."
},{
    "quote": "<div class='pi_text'>П: Откуда в Краснодаре вода?<br/>С: Из Кубани.<br/>П: Нет в России столько хлора, чтобы очистить воду из Кубани!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8B%D1%81%D0%B5%D0%BD%D0%BA%D0%BE'>#Лысенко</a> В.Е. Основы ядерной физики. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кубани.<br/>П: Нет в России столько хлора, чтобы очистить воду из Кубани!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8B%D1%81%D0%B5%D0%BD%D0%BA%D0%BE'>#Лысенко</a> В.Е."
},{
    "quote": "<div class='pi_text'>Я как бог. Как скажу, так и будет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D1%81%D1%81%D0%B0%D1%80%D0%B0%D0%B1%D0%BE%D0%B2'>#Бессарабов</a> В.Н. Базы данных <br/> <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПм_КубГУ</a></div>",
    "author": "Бессарабов В.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Или вы полюбите ИГПЗС, или ИГПЗС полюбит вас.<br/><br/>Ювко М.А. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>Если вас это не особенно колышет, то меня колышет.<br/><br/>Гончаров Ю.В. Литература изучаемых стран <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#РГФ_КубГу</a></div>",
    "author": "Гончаров Ю.В."
},{
    "quote": "<div class='pi_text'>Товарищи, вы олени. <br/><br/>Карнаушенко Л. В. <br/>История государства и права зарубежных стран  <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л. В."
},{
    "quote": "<div class='pi_text'>(студенты переспрашивают 2-3 раза формулировки теорем)<br/>П: Сегодня лыжи не едут... Не едут!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D1%80%D1%81%D1%83%D0%BA%D0%BE%D0%B2%D0%B0'>#Барсукова</a> В. Ю. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#матфак_КубГУ</a></div>",
    "author": "Барсукова В. Ю."
},{
    "quote": "<div class='pi_text'>*после того, как студент спешно ответил*<br/><br/>- Что ты, как голый в бане?!<br/><br/>Узлов Ю.А. История <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>*Попытался закрыть жалюзи, не получилось. Смирился, растерянный взгляд на аудиторию*<br/>Как настоящий филологический мужчина, я проиграл жалюзи.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Античная литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>Вы староста? Это хорошо. Вам это в будущем пригодится. Как мне сейчас — умение врать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Деловое общение<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text zoom_text'>Математика стоит на двух ногах: топология и алгебра. Всё остальное между ног болтается. <br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>Не будет буковок, не будет текста.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B5%D0%BC%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0'>#Шемелева</a> Т. В. Морфология<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Шемелева Т. В."
},{
    "quote": "<div class='pi_text'>П: Так, записываем, билборд - это рекламный щит 6*3 или 4*8. Размер имеет значение!<br/>*хихиканье девочек* <br/>П: Я не об этом, девочки!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B9'>#Май</a> В.А. 'Теория радиожурналистики' <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Май В.А."
},{
    "quote": "<div class='pi_text'>...допустим, эксперт. Хотя нормальный человек не будет экспертом. <br/><br/>Лучинский Ю.В. Технологии управления общественным мнением<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Лучинский Ю.В."
},{
    "quote": "<div class='pi_text'>Введем функции Φ(τ,ξ,η), Ψ(τ,ξ,η), .... Какие еще буквы? Давайте Φ1, Φ2, Φ3, а то у меня кризис с греческими буквами.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D1%80%D1%81%D1%83%D0%BA%D0%BE%D0%B2%D0%B0'>#Барсукова</a> В. Ю. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Барсукова В. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Он был по национальности - газетчик.<br/><br/>Факторович А.Л. Логика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Факторович А.Л."
},{
    "quote": "<div class='pi_text'>С: *читает доклад* Долгое время человечество размышляло над понятием философии...<br/>П: У человечества других забот что ли нет?<br/><br/>Спасов С. В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>Очень грустно от того,что запретили розги. Я бы вас выпорола!<br/><br/>Добро Л.Ф. Оптика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Добро Л.Ф."
},{
    "quote": "<div class='pi_text'>Давайте поиграем в учителей. Такая своеобразная ролевуха. Главное - не забыть стоп-слово, иначе по инерции завтра в школы пойдете.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%BE'>#Головко</a> В.А. Информационные ресурсы в практике педагога-словесника <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Головко В.А."
},{
    "quote": "<div class='pi_text zoom_text'>В меня сегодня точно кто-то вселился... Какой-то писатель из Одессы!<br/><br/>Павлов Ю.М. История русской литературы 20 в. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text'>Если вы не хотите решать задачи,то...<br/>То вы все равно захотите!<br/><br/>Николов М.С. Электричество и магнетизм<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Николов М.С."
},{
    "quote": "<div class='pi_text'>Меня обзывают: 'Ты не препод, ты гастарбайтер!'<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text zoom_text'>О мире,дружбе,колбасе.<br/><br/>Карнаушенко Л. В. История государства и права зарубежных стран <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л. В."
},{
    "quote": "<div class='pi_text zoom_text'>Порадуйте папу добротным ответом.<br/><br/>Жуков Е.Н. Гражданское Право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Жуков Е.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Люди, шо мы пишем? Русская орфография- шизофрения.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D0%B5%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>#Малевинский</a> С.О. Старославянский язык <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Малевинский С.О."
},{
    "quote": "<div class='pi_text zoom_text'>— Сначала забиваются сосуды, потом склероз и наконец маразм!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D1%80%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0'>#Аронова</a> Е. Ю. Педагогика <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Аронова Е. Ю."
},{
    "quote": "<div class='pi_text'>Из-за вашего телефона появятся хронически отстающие... <br/><br/>Стороженко Т. П 'Кристаллография'<br/><a data-link='/feed?section=search&amp;q=%23%D1%85%D0%B8%D0%BC%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#химфак_кубгу</a></div>",
    "author": "Стороженко Т. П"
},{
    "quote": "<div class='pi_text'>*нарисовала график на доске<br/>- Вот эта ерунда и есть полигон!<br/><br/>Полякова Е.А. Математика и статистика. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Полякова Е.А."
},{
    "quote": "<div class='pi_text'>Что объединяет старшее поколение и младшее? Они не отличают Яндекс от бендикса. Старшее не знает, что такое Яндекс, а младшее — бендикс! <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D0%BD%D0%B8%D1%89%D1%83%D0%BA'>#Онищук</a> С.А. Физика <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Онищук С.А."
},{
    "quote": "<div class='pi_text zoom_text'>Дети в школу собирались: мылись, брились, похмелялись.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В.И. История России <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>Востоковед — это не профессия, это состояние души.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BC%D0%B5%D1%80%D1%82%D0%B8%D0%BD'>#Смертин</a> Ю. Г. История стран Азии и Африки.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Смертин Ю. Г."
},{
    "quote": "<div class='pi_text'>У студента рабские соображения.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text zoom_text'>Мир-тварь, человек-тварь и все остальное тоже тварь.<br/><br/>Спасов С. В., философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>Понятно, да?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B6%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Кожевников</a> В. В. Математический анализ <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кожевников В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Мы в Кембридже, только на Комсомольском.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D1%80%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2'>#Арламов</a> А. А. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Комсомольском.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D1%80%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2'>#Арламов</a> А. А."
},{
    "quote": "<div class='pi_text'>Дотошные учёные, наши филологические предки, выяснили, что Гомер — это союз нескольких маленьких Гомеров. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. История зарубежной литературы Средних веков и эпохи Возрождения <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>*речь идет о различных толкованиях Библии*<br/><br/>П: Ваша интеллектуальная невинность достигает космических масштабов!<br/>А я чувствую себя как Христос,<br/>проповедующий рыбакам и проституткам.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. История античной литературы <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>*студент отпросился выйти*<br/>П: Идите,только ненадолго и с возвратом тела.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D1%80%D0%B0%D0%BD%D0%BE%D0%B2'>#Баранов</a> А.В. Политическая история России<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Баранов А.В."
},{
    "quote": "<div class='pi_text'>*о разнице между ортологией и риторикой*<br/><br/>Вот если бы я зашел в аудиторию и сказал: 'Пасть порву, моргалы выколю!', - это было бы эффективно. Но вряд ли литературно.<br/> <br/>Малевинский С. О. <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Малевинский С. О."
},{
    "quote": "<div class='pi_text zoom_text'>У мужчин с многозадачностью проблемы!<br/><br/>Змихновский С.И Философия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Змихновский С.И"
},{
    "quote": "<div class='pi_text'>С богами надо хитрить!<br/><br/>Кожевников С.Б. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Кожевников С.Б."
},{
    "quote": "<div class='pi_text'>Какой семинар по литературе без элемента базара?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Возбудить возбудили, а что дальше делать не знают.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BD%D1%8F%D0%B7%D1%8C%D0%BA%D0%B8%D0%BD%D0%B0'>#Князькина</a> А. К. Международное Уголовное Право. <a data-link='/feed?section=search&amp;q=%23%D0%AE%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Юрфак_кубгу</a></div>",
    "author": "Князькина А. К."
},{
    "quote": "<div class='pi_text'>Науке, что называется science, нужно... Как это по-русски... Ну agreement в establishment'е.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text'>*говорит больной студентке*<br/>Ты чего в маске?! Не побрилась что-ли?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD%D0%BE%D0%B2'>#Логинов</a> В.В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Логинов В.В."
},{
    "quote": "<div class='pi_text'>В наши дни трое детей - уже многодетная семья. Сто лет назад женщина рожала троих детей... и это она ещё только разминалась!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D1%8B%D0%B1%D0%B0%D0%BA'>#Рыбак</a> А. З. Криминология <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Рыбак А. З."
},{
    "quote": "<div class='pi_text'>*про выбор студента в библиотеке*<br/>Какая книга потолще - несите обратно!<br/><br/>Болтуц О.А. Зарубежная литература 19 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Болтуц О.А."
},{
    "quote": "<div class='pi_text'>*студент зевает*<br/>-Кто тут зевает на моей паре? Пейте кофе, бегайте вокруг университета!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD%D0%B0'>#Волошина</a> К.С. Иностранный язык <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Волошина К.С."
},{
    "quote": "<div class='pi_text'>В жизни все мелочи. У вас есть только 5 лет после школы, 5 лет после университета, свадьба, армия и смерть. Остальное - мелочи.<br/><br/>Натура А.И. <br/>Криминалистика <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Натура А.И."
},{
    "quote": "<div class='pi_text zoom_text'>Вы почти правильно сказали, но неправильно.<br/><br/>Малыхин К.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин К.В."
},{
    "quote": "<div class='pi_text'>Человек, читая и пиша... Или пися? Пишет он или что делает? <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>Математика — это ведь не про числа...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я. В. Математика и статистика<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я. В."
},{
    "quote": "<div class='pi_text'>- Знаете, как надо варить борщ? Воду с мяса надо сливать два раза! А то современные хозяйки кричат *страдальческим голосом*: 'Ой, витаминчики мои! Витаминчики убежали!'<br/> *обводит аудиторию взглядом*<br/> -Та! Дебилы они... <br/><br/>Узлов Ю. А. История <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#биофак_КубГУ</a></div>",
    "author": "Узлов Ю. А."
},{
    "quote": "<div class='pi_text zoom_text'>Провел расследование, докладываю! <br/><br/>Чалый В.В. Русский язык и культура речи <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Чалый В.В."
},{
    "quote": "<div class='pi_text'>Я говорил вам? В следующем году хотят ввести реформу,заменить один год службы на 3. Поэтому ребят,валите с универа пока не поздно!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История <br/><a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text zoom_text'>Данная кривулька задает функцию.<br/><br/>Малыхин К. В. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Малыхин К. В."
},{
    "quote": "<div class='pi_text zoom_text'>Вот у меня нет проблем. Прям совсем. Знаете почему? А потому что я одну мысль два раза не думаю.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD%D0%BE%D0%B2'>#Логинов</a> В. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Логинов В. В."
},{
    "quote": "<div class='pi_text'>Математика — это не роман.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F'>#Макаровская</a> Т. Г. Математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Макаровская Т. Г."
},{
    "quote": "<div class='pi_text'>* преподаватель дает длинную формулу для доказательства * <br/>Формула интересная, простая и чудесная. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B2%D0%B8%D0%BD'>#Савин</a> В. Н. Алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Савин В. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Девочки, надо приседать по 200 раз в день. Чтобы быть подтянутыми. Вы же не только для себя живёте, ещё для общества — для мужчин.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B5%D1%80%D1%8F%D0%B1%D0%B8%D0%BD'>#Дерябин</a> В.Ю. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Дерябин В.Ю."
},{
    "quote": "<div class='pi_text'>* Дистанционная пара. Подключаемся к собранию. Приветствие преподавателя. *<br/><br/>Ваша староста создала ложное впечатление, что эта пара вам нужна. Готов удовлетворить эту потребность.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B5%D1%86%D0%BA%D0%B8%D0%B9'>#Любецкий</a> А. И. Административные практики <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Любецкий А. И."
},{
    "quote": "<div class='pi_text zoom_text'>Мне сейчас придется что-нибудь стереть. Эта формула пусть еще пока поживет!<br/><br/>Письменский А.В. Дифференциальные и разностные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Письменский А.В."
},{
    "quote": "<div class='pi_text zoom_text'>С чего начинается Родина: дебет 75 кредит 80<br/><br/>Кутер М.И. Бух. Учёт <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>Вкусна только овсяная каша, без сахара и без соли. А ромовая баба вам не нужна!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Пономаренко</a> И. Н. Лексикология<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Пономаренко И. Н."
},{
    "quote": "<div class='pi_text'>Вот до последней секунды удерживался, но всё-таки приведу этот пример. На Кубани кто-то с больной головой решил публиковать журнал 'Клубничка'. Он просуществовал два дня. Кому это могло понравиться? Только извращенцам, маньякам. Если вы вдруг видели, что творят немцы... Немцы отдыхают. <br/><br/>Соловьёв Г. М. Основы журналистской деятельности <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Соловьёв Г. М."
},{
    "quote": "<div class='pi_text zoom_text'>— Ты художник от слова 'худо'.<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>* щелчок пальцами *<br/><br/>Логика понятна? :)<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%BA'>#Жук</a> А.С. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Жук А.С."
},{
    "quote": "<div class='pi_text'>П: А вы знаете,что случилось с сыном Ивана Грозного, Дмитрием? <br/>С: Ну, он умер, играя в ножички... <br/>П: А как так можно было играть в ножички, чтобы так порезаться? Вот вы умеете с ножичками играть? <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B5%D1%86%D0%BA%D0%B8%D0%B9'>#Любецкий</a> А.И. <br/>История государственного управления <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Любецкий А.И."
},{
    "quote": "<div class='pi_text'>Мы здесь собрались не чтобы критиковать наши порядки,<br/>а чтобы критиковать американские.<br/> <br/>Дзидзоев Р. М. Конституционное право зарубежных стран <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Дзидзоев Р. М."
},{
    "quote": "<div class='pi_text zoom_text'>Об этом нельзя говорить на паре. Вот если мы с вами встретимся в Любо, вы будете пить кофе, а я буду пить... тоже кофе.<br/><br/>Чебанная Е.И. История мировой (зарубежной) литературы <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Чебанная Е.И."
},{
    "quote": "<div class='pi_text'>Математика - продажная девка естествознания. <br/><br/>Щеколдин Г.А. Доп.главы по физике.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>— Критерий такой тяжёлый, лучше его не вспоминать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>*идет перекличка*<br/>- Настя, Настя здесь? Где Настя? Вы почему не подаете признаков жизни?<br/><br/>Гукасова Э. М. Языковые ареалы и типология языков. ФПЛ <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Гукасова Э. М."
},{
    "quote": "<div class='pi_text'>ЕГЭ — зло. Забудьте всё, что вы к нему учили!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F'>#Добровольская</a> Н. Ю.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Добровольская Н. Ю."
},{
    "quote": "<div class='pi_text'>*семинар по философии*<br/>П: Будете отвечать?<br/>С: Буду.<br/>П: Вы мне сейчас ответите за Аристотеля!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С.В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Буду.<br/>П: Вы мне сейчас ответите за Аристотеля!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Если мужчина влюблен в идею, но не в девушку по имени Идея, то он может свернуть горы!<br/><br/>Щеколдин Г.А. Доп. главы по физике. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>Через наши головы, а главное через голову Гегеля, Бог познает себя.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D0%B2%D0%B4%D0%B8%D0%B5%D0%BD%D0%BA%D0%BE'>#Овдиенко</a> В.И. Философия <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Овдиенко В.И."
},{
    "quote": "<div class='pi_text'>Это определение ещё Аристотеля. А вот определение современных учёных — бог с ними с именами: не такие они крутые, как Аристотель! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B9%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Сайченко</a> В.В. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Сайченко В.В."
},{
    "quote": "<div class='pi_text'>У вас предки есть? Или вы из <br/>пробирки?<br/><br/>Узлов Ю.А. История Кубани <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>* студенты печатают на скорость диктант *<br/><br/>У нас есть множество предметов: КПЗС, гражданское право, криминалистика... Но нашим любимым является информатика... <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BD%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Бондаренко</a> Ю. А. Информатика и информационные технологии в профессиональной деятельности<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Бондаренко Ю. А."
},{
    "quote": "<div class='pi_text'>Извините, что я вас задержал. Я специально.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BB%D0%BE%D1%82%D0%B8%D0%B9'>#Колотий</a> А. Д. Дифференциальные уравнения<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Колотий А. Д."
},{
    "quote": "<div class='pi_text zoom_text'>Чё вы все спите? Кофе не успеваете выпить с утра? Я вот пью, а вы спите. Ну ладно, вы конечно спите, но я просто думаю, что очень нудно читаю.<br/><br/>Донцова М.В.  <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Донцова М.В."
},{
    "quote": "<div class='pi_text'>С: И его посадили?<br/>П: Нет, он умер, слава Богу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B5%D0%B4%D1%8B%D1%85'>#Седых</a> Б. Р. Информатика <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Богу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B5%D0%B4%D1%8B%D1%85'>#Седых</a> Б. Р."
},{
    "quote": "<div class='pi_text'>Спонсоры есть только в кино и у проституток! <br/><br/>Кутер М.И. Бухгалтерский учёт <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>*на паре преподаватель показывает презентацию, стоя около интерактивной доски. Студенты достают смартфоны, чтобы сфоткать слайды, т. к. переписывать долго*<br/><br/>Вы хоть меня предупреждайте, когда фоткаете. Я ТОГДА УЛЫБАТЬСЯ БУДУ.<br/><br/>Волченко Н. Н. Биофизика. <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Волченко Н. Н."
},{
    "quote": "<div class='pi_text'>С: - Можно не уходить в Perfect?<br/>П: - Поздно, мы уже ушли в него.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BD%D0%B0%D0%BA%D0%B8%D0%BD%D0%B0'>#Манакина</a> В. М. Теория и практика перевода<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Манакина В. М."
},{
    "quote": "<div class='pi_text'>Таким образом из глобуса можно сделать нормальный полноценный кирпич.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Малыхин К. В."
},{
    "quote": "<div class='pi_text'>Тройка в зачетке - неплохая оценка, на самом деле. Да и вообще, три - отличное число. Например: 3 основных положения термодинамики, 3 закона Ньютона, Святая Троица.<br/><br/>Рубцов С.Е. <br/>Физика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Рубцов С.Е."
},{
    "quote": "<div class='pi_text'>*Разговор о ЕГЭ и коррупции*<br/>П: я был из того субъекта, где 300 баллов покупаешь, 301 в подарок.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D1%8F%D0%BD'>#Даниелян</a> А.С. Теория государства и права <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text'>Постарайтесь писать более игрековее.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B5%D0%B8%D0%B4%D0%BE%D0%B2%D0%B0'>#Сеидова</a> Н. М. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Сеидова Н. М."
},{
    "quote": "<div class='pi_text zoom_text'>Прочитав Данте, вы теперь скажете:' О, теперь я знаю, почему поеду не в Анапу, а во Флоренцию'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Зарубежная литература <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Последние парты, как отдалённые регионы России: у нас - день, у них - ночь.<br/><br/>Гарин С.В. Логика <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Гарин С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Мусульмане, ракеты - это все ерунда. Главная проблема мира - ЗАТКНУТЬ БОЛЬШОЙ АЗИАТСКИЙ РОТ. <br/><br/>Желтоносов В.М. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Желтоносов В.М."
},{
    "quote": "<div class='pi_text zoom_text'>Хотел сказать:'Поднимайте руки, чтобы я вас запомнил!'. Потом вспомнил, зачем запоминать, если я больше вас не увижу?<br/><br/>Петров В.И. Истрия Кубани <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>П: Вам 2 вопроса!<br/>С: Можно 1? <br/>П: Вам 2 вопроса!<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D1%83%D1%85%D0%B0%D1%80%D0%B5%D0%B2%D0%B0'>#Пухарева</a> Т.С. Основы психологии <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Пухарева Т.С."
},{
    "quote": "<div class='pi_text'>Вы же уповаете на высшие силы? Например: 'Господи, помоги мне сдать этот экзамен'. Ну вы не осознанно это делаете. Хорошо, хоть наши студенты куклы Вуду не изготавливают. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D0%B2%D1%87%D0%B0%D1%80%D0%BE%D0%B2%D0%B0'>#Овчарова</a> К. В. Письменный перевод <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Овчарова К. В."
},{
    "quote": "<div class='pi_text'>Ум — это хорошо, но глупость — тоже неплохо. Понятно, да?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B6%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Кожевников</a> В. В. Математический анализ <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кожевников В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Ты почему без карандаша? Приличные тётки с карандашом ходят!<br/><br/>Ажгихин С.Г. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Ажгихин С.Г."
},{
    "quote": "<div class='pi_text'>...и по Фрейду это фаллический символ, на котором нас всех совершенно не символически вращают.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%BB%D0%BE%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Флоровский</a> С.Ю Психология управления<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Флоровский С.Ю"
},{
    "quote": "<div class='pi_text'>*студент пытается запустить написанную им программу*<br/>С: - У меня программа не запускается.<br/>П: - А почему не запускается?<br/>С: - Компьютер дурак.<br/>П: - Компьютер не может быть дураком. Компьютер лишь делает то, что ты ему скажешь. А если компьютер не может это делать, значит не он дурак. Возможно, ты дурак?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B8%D1%82%D0%BE%D0%B2'>#Титов</a> Н. Г. Основы программирования <a data-link='/feed?section=search&amp;q=%23%D0%98%D0%9D%D0%A1%D0%9F%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ИНСПО_кубгу</a></div>",
    "author": "Титов Н. Г."
},{
    "quote": "<div class='pi_text'>Не может быть так, чтобы Бог забыл о каком-либо народе. Он не страдает склерозом. Сирые мы, убогие, потерянные, ненужные, забытые. Сироты мы такие, духовно-исторические.<br/><br/>Бойко П.Е. История социологии <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Бойко П.Е."
},{
    "quote": "<div class='pi_text'>П: Кто пойдет к доске? Что, никто не хочет?<br/>С: Можно я пойду?<br/>П: Аа, хорошо, Александр Матросов идет к доске!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Дополнительные главы физики <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>Лучше пялиться полтора часа в стену, чем заниматься английским.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D0%BE%D0%B2%D0%B0'>#Жандарова</a> А. В. Английский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Жандарова А. В."
},{
    "quote": "<div class='pi_text'>К барьеру!<br/><br/>Узлов Ю. А. История России <br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Узлов Ю. А."
},{
    "quote": "<div class='pi_text'>* Речь идёт о писателях-декабристах. * <br/><br/>Вообще они были нищебродами по большому счёту.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B9%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Сайченко</a> В. В. История литературной критики<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Сайченко В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Человек ценится как личность, а не как обладатель зачётной книжки.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AE%D1%80%D1%8C%D0%B5%D0%B2%D0%B0'>#Юрьева</a> М. В. Древнерусская литература <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Юрьева М. В."
},{
    "quote": "<div class='pi_text'>Термины - это всего лишь оболочки науки.<br/><br/>Жирма В.В. , физ.география России и ближнего Зарубежья<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Я не Цербер — ходить проверять.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BB%D1%8E%D1%81%D1%82%D0%B5%D0%BD'>#Тлюстен</a> С. Р. Математическая статистика <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С. Р."
},{
    "quote": "<div class='pi_text zoom_text'>Мне не интересно твое мнение. Я тут главный!<br/><br/>Мороз О.Н. 'Зарубежная литература 17-18 в' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Это как раз когда происходили события романов Дюма, так что, кто не читал трёх мушкетеров, самое время... не читать. Зачем?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%BC%D0%BF%D0%B0%D0%BD'>#Кумпан</a> В. А. История международных отношений <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Кумпан В. А."
},{
    "quote": "<div class='pi_text'>Я хочу вас съесть. Я вас съем!<br/><br/>Тащиан А.А. 'Философия' <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Тащиан А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Ваше авторитетное мнение?<br/><br/>Суятин Б.Д. Электрорадиотехника <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Суятин Б.Д."
},{
    "quote": "<div class='pi_text'>- Кто ответит нервную систему? <br/>- Ну, в учебнике по ней тоже чуть-чуть.<br/>- А я хочу много! <br/><br/>Гладун В.В. Зоология.<br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Биофак_кубгу</a></div>",
    "author": "Гладун В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Итак, достаньте свои манускрипты. Если они у вас есть. <br/><br/>Спасов С.В. Философия, <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>Теперь у нас с вами начинаются семинарские занятия. До этого я вам рассказывал, а вы делали вид, что слушаете. Теперь будет наоборот.<br/><br/>Спасов С.В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text zoom_text'>В ПТУ надо было идти.<br/><br/>Тагиева Н. И. Английский язык <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Тагиева Н. И."
},{
    "quote": "<div class='pi_text'>С: ... то есть, получается, что Бог есть всё: огонь и вода, небо и земля, война и мир...<br/>П: *перебивает её* Лев и Толстой, да?<br/><br/>Спасов С. В. Античная философия <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>* преподаватель задумался на лекции *<br/>С: А может...<br/>П: Тихо-тихо-тихо!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Почему это не объясняется? Я вам даже скажу! Потому что это на самом деле сложная вещь! Сам Флойд не дал ответ на этот вопрос.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%BA%D0%BE%D0%B2'>#Жуков</a> С. А. Верификация программных систем<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Жуков С. А."
},{
    "quote": "<div class='pi_text zoom_text'>Предохраняйтесь от лишней информации... [драматическая пауза]<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D0%B2%D1%87%D0%B0%D1%80%D0%BE%D0%B2%D0%B0'>#Овчарова</a> К. В. Письменный перевод <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Овчарова К. В."
},{
    "quote": "<div class='pi_text'>С: На ноль делить нельзя.<br/>П: МОЖНО! Это ваша жизнь, делайте, что хотите.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я. В. Математика и статистика<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я. В."
},{
    "quote": "<div class='pi_text'>П: Я бы назвал, но вы всё равно не прочтёте.<br/>С: А если прочтём?<br/>П: Не надо.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>П: - Так, вопросики есть? <br/><br/>* Гробовое молчание. *<br/><br/>П: - Хорошо. Значит, ничего не понятно. Этого мы и добиваемся.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Мельников</a> С. С. Введение в термодинамику<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Мельников С. С."
},{
    "quote": "<div class='pi_text'>- А как жить, если не даёт «верхушка»?<br/>- Подстригись.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D1%85%D1%83%D1%82%D0%BB%D1%8C'>#Яхутль</a> Ю. А. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Подстригись.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D1%85%D1%83%D1%82%D0%BB%D1%8C'>#Яхутль</a> Ю. А."
},{
    "quote": "<div class='pi_text zoom_text'>Когда эта конструкция появляется, то человек сразу начинает строить ее образ и achtung! Синий помидор.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Фундаментальные дискретные модели <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФКТиПМ_КубГу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Видели собаку когда нибудь?<br/><br/>Спасов С. В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>*идет лекция*<br/>— Ворд же тоже люди делали. Он мне там зелененьким подчеркивает, видите ли ему не нравится, как я фразу построила, ещё учить меня будет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B8%D1%81%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0'>#Киселева</a> Н. В. <a data-link='/feed?section=search&amp;q=%23%D1%85%D0%B8%D0%BC%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#химфак_кубгу</a></div>",
    "author": "Киселева Н. В."
},{
    "quote": "<div class='pi_text zoom_text'>Не педалируй мной! Ты напоминаешь мне мою тёщу.<br/><br/>Щеколдин Г.А. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>...А еще есть целый класс - это полупроводники. Типа Ивана Сусанина.<br/><br/>Жужа Е.Н. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Жужа Е.Н."
},{
    "quote": "<div class='pi_text'>— А что было до звезды?<br/>— Не звезда.<br/><br/>Маркосян Г. А. Информационные технологии в юридической деятельности <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Маркосян Г. А."
},{
    "quote": "<div class='pi_text'>П: Чем ограничена Земля была у Гомера?<br/>С: Бесконечными водами?<br/>П: Бесконечные воды - это твоя речь, которая никак не кончится!<br/><br/>Спасов С. В. Античная философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text zoom_text'>У каждого супергероя есть уязвимое место. У меня это сквозняки.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%95%D0%B2%D1%82%D1%83%D1%88%D0%B5%D0%BD%D0%BA%D0%BE'>#Евтушенко</a> А. С. Язык и национальная картина мира <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Евтушенко А. С."
},{
    "quote": "<div class='pi_text'>Ваше сознание — это помойка. Вам решать, какой мусор туда кинуть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>С Вашей интонацией мне кажется, что один из нас сумасшедший.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BB%D0%BC%D0%B0%D1%81%D1%8F%D0%BD'>#Элмасян</a> А. В. Иностранный язык <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Элмасян А. В."
},{
    "quote": "<div class='pi_text'>Я вас просила подготовить небольшое эссе. Так, а какой объём? Всего 600 страниц? Une blague.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0%D0%B5%D0%B2%D0%B0'>#Погодаева</a> С. А. Практикум по межкультурной коммуникации <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Погодаева С. А."
},{
    "quote": "<div class='pi_text'>Чтобы внутреннее слово в тебе заговорило, тебе недостаточно себя самого.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BE%D1%82%D0%BE%D0%B2%D0%B0'>#Зотова</a> И. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Зотова И. В."
},{
    "quote": "<div class='pi_text'>- Вы читали статьи конфедерации? <br/>- Не читал, но я знаю, что в них содержится.<br/>- Это как интернет-знакомство, в лицо не видел, но вроде ниче такая.<br/><br/>Ювко М.А. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text zoom_text'>Найдём мы тебе Ашота.<br/><br/>Авджян Г. Д. теория управления <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Авджян Г. Д."
},{
    "quote": "<div class='pi_text zoom_text'>Поэтому я и называю нашу кафедру - 'кафедрой общей и неограниченной химии', у нас связи, как раковые метастазы.<br/><br/>Буков Н.Н Зав. каф. Общей и Неорганической Химии. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D1%82_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВт_кубгу</a></div>",
    "author": "Буков Н.Н"
},{
    "quote": "<div class='pi_text'>*компьютер долго загружается*<br/>-Ну, подождем Билла Гейтса!<br/><br/>Значко В.Н. Информатика. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Значко В.Н."
},{
    "quote": "<div class='pi_text'>Что вы такая грустная? Ничего непонятно? Ну ничего, дальше будет только хуже.<br/><br/>Костенко К.И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>- Поделитесь со мной вашим разговором.<br/>* все молчат *<br/>- Отказ от разговора — признак проявления враждебности.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>Кто-то пошутил, что людей с нетрадиционной сексуальной ориентацией 13%. Это вы ещё за руль не садились.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D1%83%D1%85%D0%B8%D1%85'>#Сухих</a> С.А. Основы психологии<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Сухих С.А."
},{
    "quote": "<div class='pi_text zoom_text'>Если у вас нет паранойи, это не значит, что за вами не следят.<br/><br/>Коваленко А.В. Информационная безопасность <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Коваленко А.В."
},{
    "quote": "<div class='pi_text zoom_text'>И чтоб к концу пары ни у кого психики не осталось! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я. В. Математика и статистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я. В."
},{
    "quote": "<div class='pi_text zoom_text'>Я давно предлагаю кипятить больных студентов перед входом в аудиторию.<br/><br/>Алеников А.С. Контроллинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Как женщина вынашивает ребёнка, так и вы должны вынашивать материал. Преждевременные роды это плохо, особенно в журналистике.<br/><br/>Павлов Ю. М. 'Практическая журналистика' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю. М."
},{
    "quote": "<div class='pi_text zoom_text'>СЫ-ТИ-НА - от слова сытая. Поэтому, диеты это не моё.<br/><br/>Сытина А.В. Судебное красноречие. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Сытина А.В."
},{
    "quote": "<div class='pi_text'>Что-то получите. Не удовольствие, так диплом.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Электронные средства информации<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text'>С кем надо поспорим. Кому надо докажем.<br/><br/>Хорева Л. Н. Основы редактирования.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Хорева Л. Н."
},{
    "quote": "<div class='pi_text'>С: Можно выйти?<br/>П: Ты уже вышла!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%98%D1%83%D1%81'>#Иус</a> Д. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Иус Д. В."
},{
    "quote": "<div class='pi_text zoom_text'>Земля далеко находится от центра вселенной, поэтому тут так много нечистей из ада. <br/><br/>Костенко К.И. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>* студентка показывает решение задачи одногруппнику * <br/> <br/>Не надо, красавица, а то потом эти красавцы на шею сядут. Обстирывать, еду готовить, все им надо будет. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B8%D0%BD'>#Любин</a> В. А. Алгебра <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>*студент*<br/>-Время уже поджимает.<br/>*преподаватель*<br/>-В каком месте оно Вас поджимает?<br/><br/>Ювко М.А. Теория государства и права.<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ювко М.А."
},{
    "quote": "<div class='pi_text'>П: Знаете, как доставляли камни к пирамидам?<br/>С: По наклонной плоскости?<br/>П: Да ничего подобного! Была дорога, мощеная плиткой, а камни на шнурах тащили. И, чтобы лучше камень двигался, подкладывали под них рабов. Рабам это, конечно, не очень нравилось. Во всяком случае, когда их зовут на материаловедение, идут они неохотно...<br/>С: А может бревна?<br/>П: Ну... у всех свои недостатки...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D0%BD%D0%B8%D1%89%D1%83%D0%BA'>#Онищук</a> С. А. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Онищук С. А."
},{
    "quote": "<div class='pi_text zoom_text'>Вокруг меня козявочная, а я - центр всего этого.<br/><br/>Сидоров В.А. Общая экономическая теория. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text'>- Скажите вашим прогульщикам, что они не получат зачет.<br/>- Вы их не удивите.<br/>- А разве я сказал, что собираюсь их удивлять? <br/><br/>Салфетников М.А. Военное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Салфетников М.А."
},{
    "quote": "<div class='pi_text'>С: А нужно сдавать анализ УМК?<br/>П: Что, простите? Анализ кулька? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D1%80%D0%B8%D0%BC%D0%B0'>#Прима</a> А.М. Методика преподавания английского языка. <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Прима А.М."
},{
    "quote": "<div class='pi_text'>* Для поздравления преподавателя на паре резко встаёт вся группа... И молчит. *<br/><br/>П: - О боже, вы что в секте? <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D1%83%D0%B5%D0%B2%D0%B0'>#Чуева</a> А.С. Бюджетное право<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Чуева А.С."
},{
    "quote": "<div class='pi_text'>Без речки не будет мостика, без овечки не будет хвостика.<br/>Так и с ООН...<br/><br/>Малиновский О.Н. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Малиновский О.Н."
},{
    "quote": "<div class='pi_text'>Человек - это тварь! Нет, это не ругательство, а определение. Его же кто-то сотворил...<br/><br/>Спасов С. В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Афигенными буквами, красной пастой - пишем!<br/><br/>Петров В.И. История Кубани <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>Вы же никогда не сможете разучиться читать, да? Ну, я не беру патологические случаи, когда сильно дали подзатыльник и мозжечёк отпал...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B2'>#Большов</a> В. Б. Социология<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Большов В. Б."
},{
    "quote": "<div class='pi_text zoom_text'>Я вижу, что вы все будущие дипломаты. Ну, хотя бы работники международных организаций. Ну, тиктокеры-миллионеры точно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D0%B2%D0%B0%D0%BD%D0%B5%D1%81%D1%8F%D0%BD'>#Аванесян</a> А. А.</div>",
    "author": "Аванесян А. А."
},{
    "quote": "<div class='pi_text zoom_text'>Чтобы не запутаться, нужно знать правило де Моргана. А если не знаете, то запутаетесь, расплачетесь и пойдёте экономистами какими-нибудь работать.<br/><br/>Костенко К.И.  Дискретная математика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text zoom_text'>Такая ситуация называется надувательством. Но вам на экзамене нельзя так говорить. Это только для меня.<br/><br/>Сидоров В.А. Экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text'>*на паре*<br/>Уже социализнулся!... В гробу!<br/><br/>Арламов А.А. социальная педагогика, <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Арламов А.А."
},{
    "quote": "<div class='pi_text zoom_text'>— Нельзя одновременно говорить на адыгейском и на английском!<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Если женщине нечего сказать, она начинает раздеваться.<br/><br/>Мороз О.Н. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>С: Мною была рассмотрена допустимость пар ВС....<br/>П: А как были рассмотрены? Через бинокль? <br/><br/>Цалюк М.В. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Цалюк М.В."
},{
    "quote": "<div class='pi_text'>*долго и пристально смотрит на тебя улыбаясь*<br/>*улыбаешься в ответ*<br/><br/>- Тебе тоже минус поставить? <br/><br/>Литвинов С.А. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Литвинов С.А."
},{
    "quote": "<div class='pi_text'>- Если моя подпись стоит у вас в зачётке , это ещё ничего не значит. Тот, кто учил - молодец, а кто нет - вам с этим жить , вам с этим умирать. Вы дураки и идиоты.<br/><br/>Мороз О.Н. 'Античная литература'<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Из университета вы должны выйти с чувством гнева к современной системе образования.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Система СМИ<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>-Так, что у вас?<br/>- Я сегодня табель не принес...<br/>- Отказ.<br/><br/>Дедюхин А.А. Английский <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Дедюхин А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Сейчас я подниму вас на вертолете, чтобы сверху вы лучше увидели сегодняшний материал.<br/><br/>Сидорова Л.И история осн.ин.языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ргф_КубГУ</a></div>",
    "author": "Сидорова Л.И"
},{
    "quote": "<div class='pi_text zoom_text'>В этом кабинете пить, курить и говорить можно только мне.<br/><br/>Белопольская Т.Н. Информатика. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Белопольская Т.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Чтобы что-то понять, нужно что-то понимать, это понятно?<br/><br/>Спасов С. В. Философия. ФПЛ <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Студенты — это странная субстанция.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2'>#Петросов</a> Т. А. Философия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Петросов Т. А."
},{
    "quote": "<div class='pi_text'>Я сейчас вам кое-что скажу, вы не напрягайтесь. Но я бы напрягся.<br/><br/>Костенко К.И. Дискретная математика.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text zoom_text'>Я всегда знал что ты гений!<br/><br/>Май.В.А. Технологии видеосъемки и видеомонтажа <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Май В.А."
},{
    "quote": "<div class='pi_text zoom_text'>— Ну а теперь остался последний финт ушами!<br/><br/>Афанасьева Т. Н. Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Афанасьева Т. Н."
},{
    "quote": "<div class='pi_text'>* Преподаватель уговаривает выйти студентов к доске. *<br/><br/>П: - Ну давайте, лёгкая же тема. Поэтому, если выйдете и не решите, будет двойной позор.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>#Письменский</a> А. В. Дифференциальные уравнения<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Письменский А. В."
},{
    "quote": "<div class='pi_text'>Знаете, чем отличается искусство от современного искусства? Современное искусство о том, как сделать больно. Это единственный способ задеть современного человека. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B8%D1%80%D1%83%D0%BC%D1%8F%D0%BD'>#Мирумян</a> А. Г. Фотодело <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мирумян А. Г."
},{
    "quote": "<div class='pi_text'>Итак, кто помнит, на кого же разгневался Ахил, тот же Брэд Питт?<br/><br/>Лучинский Ю. В., История литературы античности и средних веков<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Лучинский Ю. В."
},{
    "quote": "<div class='pi_text zoom_text'>Вы что думаете, что прилетят инопланетяне и будут рассказывать о геометрической прогрессии?! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE'>#Яременко</a> Л. А. Теория функции комплексного переменного <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Яременко Л. А."
},{
    "quote": "<div class='pi_text'>*пишет формулу*<br/>Если мы не стремимся развить мозги, как вы это обычно делаете, то мы доказывать это не будем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D0%B8%D0%BD'>#Никитин</a> Ю.Г. Численные методы и математическое моделирование<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A2%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФТФ_КубГУ</a></div>",
    "author": "Никитин Ю.Г."
},{
    "quote": "<div class='pi_text'>-И правильно я ударение поставил? (в фамилии)<br/>-Да.<br/>-Ммм, старался.<br/><br/>Голиков В. И. Концепции современного естествознания. <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Голиков В. И."
},{
    "quote": "<div class='pi_text'>Я — представитель наглой профессии.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BE%D0%BF%D0%BA%D0%B8%D0%BD'>#Сопкин</a> П. Т. Основы теории журналистики<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Сопкин П. Т."
},{
    "quote": "<div class='pi_text'>- Скажите, как стать великим?<br/>- Иметь резиновую попу!<br/><br/>Сопкин П.Т. 'Основы журналистской деятельности'. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Сопкин П.Т."
},{
    "quote": "<div class='pi_text zoom_text'>Это оксимир... оксюморон, как же сложно теперь выражаться... <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%8B%D1%87%D0%BA%D0%BE%D0%B2'>#Бычков</a> С.С Практический курс немецкого языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Бычков С.С"
},{
    "quote": "<div class='pi_text'>* Преподаватель рассказывает о погребальных обрядах в древнегреческой религии *<br/><br/>Если нас правильно похоронили, мы находимся в правильных грустных местах.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. История религии и зарубежная словесность<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>У нас разброс — строят или корабли, или кастрюли, а посередине — ничего.<br/><br/>Эртель Л.А. Профессиональная этика и служебный этикет <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Эртель Л.А."
},{
    "quote": "<div class='pi_text'>С: Одна политическая голова, а две лучше.<br/>П: Так и появился змей Горыныч!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B7%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B8%D1%87'>#Сазантович</a> А. Б. Политология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Сазантович А. Б."
},{
    "quote": "<div class='pi_text zoom_text'>Покуль настигнет вас в любом случае!<br/><br/>Покуль В.О. Методы принятия управленческих решений <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Покуль В.О."
},{
    "quote": "<div class='pi_text zoom_text'>Давайте не будем, а если будем, тогда давайте.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD%D0%BE%D0%B2'>#Логинов</a> В. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Логинов В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Все, девочки, сидите, отдыхайте и думайте о Дале!<br/><br/>Тарасенко Т.П., Основы Теории Коммуникации. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Тарасенко Т.П."
},{
    "quote": "<div class='pi_text'>Неужели у вас такая короткая память? Я понимаю, что все мы где-то рыбы, но не настолько же.<br/><br/>Жандарова А. В. Иностранный язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_Кубгу</a></div>",
    "author": "Жандарова А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Итак, вам выдают эти хрустящие купюры по пятьсот евро, и вы вот прям шуршите ими. Вы - шведский пенсионер.<br/><br/>Богдашев И.В. Общая экономическая теория. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Богдашев И.В."
},{
    "quote": "<div class='pi_text'>Что? Где? Когда? Куда? Кто? Почему? Чего? Кого? Откуда? Да?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D0%BB%D1%83%D1%86%D0%BA%D0%B8%D0%B9'>#Галуцкий</a> В. В. Электротехника и электроника<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Галуцкий В. В."
},{
    "quote": "<div class='pi_text'>Я вам там что-то рассказал, так сказать, а вы там что-то поняли. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B6%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Кожевников</a> В. В. Теория вероятностей <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кожевников В. В."
},{
    "quote": "<div class='pi_text'>* рассказывает про историю комбинаторики *<br/>С: А почему шахматам несколько тысяч лет, а вспомнили про них только в 16 веке?<br/>П: В Европе раньше были другим заняты — ведьм сжигали, например.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D1%83%D1%85%D0%B0%D0%BD'>#Сухан</a> И. В. Дискретная математика и математическая логика <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сухан И. В."
},{
    "quote": "<div class='pi_text'>П: Федона знаете?<br/>С: *молчание*<br/>П: Ну, он весь такой федонистый.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С. В. Античная философия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>Что не происходит, то тоже происходит. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Доклассическая словесность в медиа<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Боже, ещё полчаса с вами сидеть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD%D0%B0'>#Волошина</a> К. С. Иностранный язык <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Волошина К. С."
},{
    "quote": "<div class='pi_text zoom_text'>Физик, чи шо?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>*обсуждаем 'Старик и море' Хэмингуэя* <br/><br/>Сантьяго гонится за своей рыбой, а в результате ее съедают акулы. Магистратура - тоже рыба, за которой гонятся студенты...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Дидактика художественного текста <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>Ведь, как мы знаем, после плотного обеда по закону Архимеда... Нужно поспать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BC%D0%BE%D0%BD%D0%BE%D0%B2'>#Комонов</a> С. В. Безопасность жизнедеятельности<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Комонов С. В."
},{
    "quote": "<div class='pi_text'>Студент:<br/>- Спросить можно?<br/>Преподаватель:<br/>- Зачем?<br/><br/>Щеколдин Г.А. Доп. главы по физике. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>* Студент стоит у доски и молчит. Преподаватель подсказывает. *<br/><br/>Получился угол 150 градусов.<br/><br/>* Начинает смеяться. *<br/><br/>Тоже тупой.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>* у студента на парте лежит кубик Рубика 2х2*<br/>Преподаватель проходит мимо, берет его и говорит:<br/>- А почему такой легкий? Почему только 2х2?<br/>- Надо начинать с малого.<br/>- А почему тогда не 1х1?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>С: Фёдор Александрович, вам привет передали.<br/>П: * в замешательстве * Не, не, не... Спасибо, не надо... * уходит *<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2'>#Колоколов</a> Ф. А. Неорганическая химия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Колоколов Ф. А."
},{
    "quote": "<div class='pi_text zoom_text'>Что вы тут делаете? Биткойны майните? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С. Н. История Кубани <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шаповалов С. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Здесь вам не судоку , не кроссворд. Отвечайте нормально , вы в учебном заведении.<br/><br/>Даниелян А.С. ТГП <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Соломон шёл на поводу у женских сердец. В форме тела, конечно. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Зарубежная литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>Греки были настолько помешаны на красоте языка, что не могли себе позволить 2 одинаковые буквы в одном слове. Англичане этого не знают, они спят спокойно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Постараюсь привести вам пример. Вы, не дай Бог, конечно, тьфу тьфу тьфу, станете экономистами...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D0%A3%D0%91%D0%93%D0%A3'>#эконом_КУБГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>Друзья мои, друзей не существует!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D1%8B%D0%BA'>#Петрык</a> Я. Ю. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Петрык Я. Ю."
},{
    "quote": "<div class='pi_text'>* Проходит контрольная работа * <br/> <br/>П: Чем вы там занимаетесь? <br/>С: Ничем, думаю.<br/>П: Решайте, не надо думать.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Алгебра <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>П: - Так записываем тему: 'Работа с файлами'.<br/>С: - Ура, мы наконец-то поймем, как работать с файлами!<br/>П: -Может быть...<br/><br/>Куликова Н.В. Информатика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Куликова Н.В."
},{
    "quote": "<div class='pi_text'>Будем с вами изучать , как золотой дождь спустился.<br/><br/>Бережнова Д.Б. МХК<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Бережнова Д.Б."
},{
    "quote": "<div class='pi_text zoom_text'>Если скажут пойти вагоны грузить, скажите 'МАМА, ДАЙ МНЕ СЕССИЮ СДАТЬ'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AF%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE'>#Яременко</a> Л.А. Мат. Анализ <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A2%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФТФ_КубГУ</a></div>",
    "author": "Яременко Л.А."
},{
    "quote": "<div class='pi_text'>П: ...Пифия дышала ядовитыми парами и прорицала. В общем, наркоманка была.<br/><br/>Чумаков С.Н. Античная литература <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text zoom_text'>То, что сейчас продаётся, - это не конфеты, это нецензурное слово.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Пономаренко</a> И. Н. Лексикология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Пономаренко И. Н."
},{
    "quote": "<div class='pi_text'>На экзамене преподаватель рассказывает анекдот: 'Идет девушка, ей навстречу мужчина, спрашивает, откуда она. Та отвечает, что из салона красоты. Он ей: наверное, закрыт был...' <br/>Через минуту заходит студентка. Реплика преподавателя: 'О, вы из салона красоты, небось?'. <br/><br/>Сопкин П. Т., Основы теории журналистики <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Сопкин П. Т."
},{
    "quote": "<div class='pi_text'>П: Я знаю, вы приличная девушка, а вот Боккаччо - неприличная.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература Средних веков и эпохи Возрождения<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>Не помнишь?...Этот способ настолько древний, что древнее мамонтова помета.<br/><br/>Остапенко А.А. Геология (практика)<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#геолог_КубГУ</a></div>",
    "author": "Остапенко А.А."
},{
    "quote": "<div class='pi_text zoom_text'>На пары не опаздывать! Сломался, там, у тебя трамвай - купи себе новый.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%BE%D0%B3%D0%B8%D0%BD%D0%BE%D0%B2'>#Логинов</a> В. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Логинов В. В."
},{
    "quote": "<div class='pi_text'>*обсуждалось Евангелие от Матфея* <br/>После семинара с вами священник веру потеряет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Зарубежная литература средних веков и эпохи Возрождения <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>*обсуждение платоновской прозы*<br/><br/>П: Какая бывает беременность?<br/>С: *тихо* Желательная и нежелательная.<br/>П: Закройте дверь, пожалуйста, а то подумают, что Татаринов совсем с ума сошёл... <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Античная литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Россия была, есть и будет. Никуда она не денется!<br/><br/>Подхомутникова М.В. История <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Подхомутникова М.В."
},{
    "quote": "<div class='pi_text zoom_text'>Все, что мы имеем сейчас, благодаря СССР. Не Обаме и прочим, а СССР! Поэтому у нас на заборах пишут: 'Обама - лох!'.<br/><br/>Петров В.И. Истрия России <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>П: Флешка есть?<br/>С: Нет.<br/>П: Эх, я ж вас учил, в одном кармане флешка, в другом кармане пистолет!<br/><br/>Кармазин В.Н. Дискретное программирование <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Кармазин В.Н."
},{
    "quote": "<div class='pi_text'>Студент:<br/>- Георгий Аркадьевич, куда вы меня хотели послать?<br/>Преподаватель:<br/>- Далеко и надолго!<br/><br/>Щеколдин Г.А. Доп. главы по физике. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>Чувствуем?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text'>* студент читает слово в тексте *<br/>С: Putting on.<br/>П: Практически как Путин получилось!<br/><br/>Лопатина Н. Р. Английский язык <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Лопатина Н. Р."
},{
    "quote": "<div class='pi_text zoom_text'>Бояре хотят более подробного ответа. <br/><br/>Даниелян А.С. ТГП <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text zoom_text'>П: *с подозрением* Так, вас почему-то стало больше. Признавайтесь, кто из вас лишний на этом празднике жизни?!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С.В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Грохнуть острова баллистическими ракетами? Да без проблем вообще.<br/><br/>Карнаушенко Л.В. ИГПЗС <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л.В."
},{
    "quote": "<div class='pi_text zoom_text'>Мой номер в списке экстренных. Если что мне позвонят.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D1%82%D0%B0%D1%86%D0%B5%D0%BD%D0%BA%D0%BE'>#Стаценко</a> О. В. Английский язык. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Стаценко О. В."
},{
    "quote": "<div class='pi_text zoom_text'>У кого есть вопросы, подойдите спросите. У кого нет - свободны, до свидания.<br/><br/>Макаровская Т.Г. Математика, <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Макаровская Т.Г."
},{
    "quote": "<div class='pi_text'>Человек всегда тянется к свободе! Поэтому, очень важно, чтобы иногда он <br/>мог видеть простор, который ничем <br/>не ограничен!<br/><br/>Жирма В.В. , физ.география России и ближнего Зарубежья<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text'>* Студентка в шутку неправильно прочитала слово, играя роль ученика. *<br/><br/>Это вы так пошутили, да? Не совсем удачно...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B5%D0%BC%D1%81%D0%BA%D0%BE%D0%B2%D0%B0'>#Земскова</a> Н. А. Методика преподавания английского языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Земскова Н. А."
},{
    "quote": "<div class='pi_text'>Что-то меня давно в цитатнике не было, аж читать неинтересно стало.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8B%D1%81%D0%B5%D0%BD%D0%BA%D0%BE'>#Лысенко</a> В. Е. Алгоритмизация и программирование<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Лысенко В. Е."
},{
    "quote": "<div class='pi_text zoom_text'>Математики должны управлять страной!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2'>#Сергеев</a> Э. А. Алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сергеев Э. А."
},{
    "quote": "<div class='pi_text'>Детки жесть мутят.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B8%D0%B2%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BE%D0%B2'>#Живодробов</a> В.В. Правоведение <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Живодробов В.В."
},{
    "quote": "<div class='pi_text zoom_text'>В аудитории пахнет коньяком. Спрячьте все под парты — ещё рано.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D1%83%D1%81%D0%B5%D0%B2'>#Гусев</a> А. А. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Гусев А. А."
},{
    "quote": "<div class='pi_text zoom_text'>Проклятая буржуистская совесть, которой, кстати, нет. <br/><br/>Сидоров В.А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text'>Желаю вам, чтобы в 2019 году вы все стали мамами. Это ваш долг, как управленцев — нарожать работников!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%95%D1%80%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Ермоленко</a> В. В. Основы теории управления<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Ермоленко В. В."
},{
    "quote": "<div class='pi_text zoom_text'>...и вариантов для перебора получается немного много. Но нормально!<br/><br/>Костенко К.И. Дискретная математика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>Вы не подумайте, что я иронизирую.. Но я иронизирую. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Античная литература <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>*препод задает какой-то вопрос, студент молчит*<br/>П: Сказать почему?<br/>С: Да, скажите.<br/>П: Не скажу, вдруг ты ИГИЛовец.<br/><br/>Узлов Ю.А. История России. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>*речь о больных СПИД, ВИЧ, туберкулёзом и тд*<br/>- Тут у нас есть медицина, всякие санатории/профилактории для таких больных. А в местах лишения что? Там только досрочное освобождение для них есть.<br/><br/>Эртель Л.А. - Специальная подготовка <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Эртель Л.А."
},{
    "quote": "<div class='pi_text'>Ты же обещала нормальный цвет, как ты выкрасила желтый? Это не выкраска, это порнуха какая-то!<br/><br/>Мартиросов А.В. Пропедевтика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Мартиросов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Чтобы муху метко бить - Кока-Колу надо пить.<br/><br/>Желтоносов В.М. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Желтоносов В.М."
},{
    "quote": "<div class='pi_text'>*поздравили с днём рождения*<br/>Я всегда хотел скрыть свои очередные 16 ...и все равно узнали! <br/><br/>Май В.А <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Май В.А"
},{
    "quote": "<div class='pi_text zoom_text'>— Так... закроем дверь, а то ещё подслушают, узнают такие вещи — не дай бог.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Да какая у Данте с Беатриче любовь?! Ни встреч, ни поцелуев, ни детей, ни разводов!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература Средних веков и эпохи Возрождения<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text'>И нет предела совершенству!<br/><br/>Жирма В.В. , физ.география России и ближнего Зарубежья<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text'>*пишет на доске, резко разворачивается на студентку* <br/>— Что не пишем?<br/>— Я пишу!<br/>— Так быстро? Я ещё не написал, а ты уже. Надо научиться.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Мы - то, что мы едим. Происходит гамбургеризация Америки! У них уже фаст-фудное мышление!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%B0%D1%87%D0%B8%D1%8F%D0%BD%D1%86'>#Хачиянц</a> А.И. Возрастная анатомия и физиология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Хачиянц А.И."
},{
    "quote": "<div class='pi_text'>С: Зевс явился к Леде в образе лебедя, и у них родилось двое детей.<br/>П: Да. Не играйте с лебедями.<br/><br/>Чумаков С.Н. Античная литература<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>* типология советских телезрителей *<br/><br/>Замечательная типология. Можно, когда очень грустно, почитать:<br/><br/>1. Умеренные <br/>2. Увлечённые<br/><br/>И последняя, моя любимая категория:<br/><br/>3. Сильно увлечённые<br/><br/>Хотелось бы видеть вас такими на зачетной неделе.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С. Н. Социология массовых коммуникаций <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Увлечённые<br/><br/>И последняя, моя любимая категория:<br/><br/>3. Сильно увлечённые<br/><br/>Хотелось бы видеть вас такими на зачетной неделе.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С. Н."
},{
    "quote": "<div class='pi_text'>Сегодня будет жарко!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BE%D0%BF%D0%BA%D0%B8%D0%BD'>#Сопкин</a> П. Т. Система СМИ<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Сопкин П. Т."
},{
    "quote": "<div class='pi_text'>И так мы оказываемся в n-ом месте чуть ниже спины.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D0%B8%D0%BA'>#Болик</a> А. В. Экономика<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Болик А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Приезжают, думают - прынцессы, и на панель! Знаешь сколько таких?!<br/><br/>Желтоносов В.М. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Желтоносов В.М."
},{
    "quote": "<div class='pi_text'>В те времена пластических операций не было. Просто головы отрубали и всё.<br/><br/>Спасов С. В. Античная философия <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text zoom_text'>У  государства была монополия на спички. Хлеб,мыло,нефть.<br/><br/>Карнаушенко Л. В. История государства и права зарубежных стран <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л. В."
},{
    "quote": "<div class='pi_text'>Кто достанет эту книжку, тому респект! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%BE%D1%80%D0%B5%D0%B2%D0%B0'>#Хорева</a> Л. Н. Стилистика и литературное редактирование <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Хорева Л. Н."
},{
    "quote": "<div class='pi_text zoom_text'>На пересдачу заходите по одной. Я уже старенький - двух не потяну.<br/><br/>Кизим А.А. Логистика. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кизим А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Вот почему у нас нет машин, а японцы на тойотах ездят? Потому что они стараются, учатся и думают.<br/><br/>Сергеев Э.А. Алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сергеев Э.А."
},{
    "quote": "<div class='pi_text zoom_text'>Если ты вообще не знаешь языка, то это полный крах. <br/><br/>Тарасенко Т. П. Основы теории коммуникации <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Тарасенко Т. П."
},{
    "quote": "<div class='pi_text zoom_text'>Мы живем выдуманными понятиями.<br/><br/>Чумаков С.Н. Античная литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>*пишет на доске что то, похожее на древне-эльфийский*<br/>-А что это за кракозябра, вы узнаете в следующий раз.<br/><br/>Колоколов Ф.А. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Колоколов Ф.А."
},{
    "quote": "<div class='pi_text'>Да, дочь Платонова умерла не так давно. Мне удалось её видеть и даже с ней разговаривать... Ну как... Я сказал: 'Здравствуйте!' <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D1%81%D1%82%D1%83%D1%88%D0%B5%D0%BD%D0%BA%D0%BE'>#Пастушенко</a> Ю. Г. Литературоведческий анализ художественного произведения<br/> <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Пастушенко Ю. Г."
},{
    "quote": "<div class='pi_text'>*студент закончил доклад* <br/>П: Всё? А где аплодисменты? <br/>*студенты начинают аплодировать* <br/>П: Всё, тихо! А то люди подумают, что здесь что-то интересное, и сбегутся. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С.И. Философия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Змихновский С.И."
},{
    "quote": "<div class='pi_text'>П - Вы спрашиваете у меня или сами отвечаете? <br/>С - Я просто у себя спрашиваю, так легче ответить <br/>П - И откуда оно ответило? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BA%D0%BE'>#Терещенко</a> Н.Д. Конституционное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Терещенко Н.Д."
},{
    "quote": "<div class='pi_text zoom_text'>Напоминаю! Правильного решения этой задачи - нет!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8E%D1%82%D0%B8%D0%BD'>#Малютин</a> М.П. Теория доказывания <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Малютин М.П."
},{
    "quote": "<div class='pi_text zoom_text'>Атлеты уже тогда были тупые. В общем, не стоит их в этом обвинять. <br/><br/>Мороз О. Н. История античной литературы <a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Знания по праву будут сопровождать вас всю жизнь. Даже после смерти.<br/><br/>Ефименко Л.А. 'Конституционное право' <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ефименко Л.А."
},{
    "quote": "<div class='pi_text'>П: - Дайте мне определение базиса.<br/>С: * Читает с тетради. *<br/>П: - А кто у вас лекции ведёт?<br/>С: * Называет имя преподавателя. *<br/>П: - Ой, так я же его учил... Но такой галиматье я его не учил!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B8%D0%BD'>#Любин</a> В. А. Аналитическая геометрия.<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Журналистика - как китайские вещи. Мы ими пользуемся, а они рвутся и ломаются. Вот и журналистика такая. Как ширпотреб. <br/><br/>Мороз О.Н. Философские основы науки и современного журнализма. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Вся тайна в среднем роде. Это гендерный нейтралитет. Если бы не было артикля среднего рода, у нас бы не было сущего и не было бы бытия. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В. Античная логика и риторика.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Мало того, что мы люди, мы ещё и филологи - это особая форма жизни.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Зарубежная литература средних веков и эпохи Возрождения <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>*разговор о том, когда было лучше: тогда или в наше время*<br/>С: Сейчас 50 000 детей пропадают каждый год.<br/>П: Да подумаешь! Пфф. Нарожают ещё, процесс-то приятный.<br/><br/>Утков Г.Н. Современный русский язык <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Это ваша личная драма!<br/><br/>Элмасян А. В. Практика английского языка <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Элмасян А. В."
},{
    "quote": "<div class='pi_text'>П: Нам осталось написать доказательство *оно обычно не меньше листа, это в самом хорошем случае *<br/>С: Александр Дмитриевич, мы не успеем.<br/>П: А сколько времени ещё осталось?<br/>С: 2 минуты.<br/>П: Ох, так у нас ещё целых 2 минуты! Успеем!<br/><br/>Колотий А.Д. /Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФКТиПМ_КубГу</a> <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФПМ_КубГу</a></div>",
    "author": "Колотий А.Д."
},{
    "quote": "<div class='pi_text zoom_text'>Вы хотите по отношению к алгебре быть порядочной? Порядочной надо быть! Я же Вас в любители алгебры записал.<br/><br/>Сергеев Э.А. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сергеев Э.А."
},{
    "quote": "<div class='pi_text'>Сегодня поговорим так, о том, о сём, о жизни, о молекулах.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%B6%D0%B0'>#Жужа</a> М. А. Молекулярная физика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Жужа М. А."
},{
    "quote": "<div class='pi_text'>*комментирует стихотворение А.С.Пушкина 'Деревня'*<br/>— Да какие девы?! Девки деревенские! <br/><br/>Малевинский С.О. История русского литературного языка <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Малевинский С.О."
},{
    "quote": "<div class='pi_text zoom_text'>Лицемерие - это смазка человеческих взаимоотношений.<br/><br/>Осташевский А.В. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Подставим, и фирма гарантирует, что у нас интеграл рационального выражения.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>-Вы можете посчитать количество?<br/>*спустя полминуты*<br/>-Ваш правильный ответ: 'Да запросто'<br/><br/>Гаркуша О.В. Основы информатики <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Гаркуша О.В."
},{
    "quote": "<div class='pi_text zoom_text'>Поэтому я изобрел универсальную фразу. Как вы сейчас говорите? Мэсседж? Курящая девушка - вонючка.<br/><br/>Касьянов В.В. История России <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text'>*разговаривают на паре студент и студентка*<br/>С: да у тебя колготки во всех местах порванные! <br/>П: Нет, ну ладно вы заметили, что порванные, но откуда вы знаете, что во всех местах?! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Информационные войны <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text'>П: *с блеском в глазах* А давайте посмотрим, как проходят роды!!!<br/>С: нуууу неееет, пожалустааа.....<br/>П: ДА ЭТО МУЛЬТИК!!!!<br/><br/>Зозуля Л.В. Возрастная анатомия, физиология и гигиена, <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Зозуля Л.В."
},{
    "quote": "<div class='pi_text'>* Студентка рассказала доклад об идеях Платона. Вернулась на место, сильно краснея. *<br/><br/>П: Процессор перегрелся?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text zoom_text'>У тебя вчера что-то было? <br/><br/>Авджян Г.Д.Теория управления <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Авджян Г.Д."
},{
    "quote": "<div class='pi_text'>П: Есть вопросы?<br/>С: Нет<br/>П: Что, совсем ничего непонятно?<br/><br/>Спасов С.В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>*о 'воде' в тексте*<br/>...в ней есть драгоценный ребёнок, которого нельзя выплёскивать.<br/><br/>Факторович А. Л. Логика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Факторович А. Л."
},{
    "quote": "<div class='pi_text'>* Софья про Чацкого: «Не человек, змея» («Горе от ума»)*<br/>Запятая, в отличие от тире, признак равнодушия. Бесит он её и всё! Это не чувства.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B9%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Сайченко</a> В. В. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Сайченко В. В."
},{
    "quote": "<div class='pi_text'>П: В чем измеряется частота?<br/>* молчание в аудитории в ответ *<br/>П: Вы что, совсем одичали?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D0%BE%D1%82%D0%B8%D0%BD'>#Болотин</a> С. Н. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Болотин С. Н."
},{
    "quote": "<div class='pi_text'>* Студент совершает многократные попытки выразить свои мысли на английском, но путается в словах. *<br/><br/>П: - По-русски мне скажите, что Вы пытаетесь изречь! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BB%D0%BC%D0%B0%D1%81%D1%8F%D0%BD'>#Элмасян</a> А. В. Грамматика иностранного языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Элмасян А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Хороший метод. Покажем как он работает — это ужасно!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Комплексный анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>*рассказывает про ситуацию на экзамене*<br/>С: Виктория Викторовна, вы знаете Схему Горнера?<br/>П: Да.<br/>С: Ну тогда я вам её рассказывать не буду.<br/><br/>Гортинская В.В. Алгебра и аналитическая геометрия <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Гортинская В.В."
},{
    "quote": "<div class='pi_text'>Не надо путать божий дар с яичницей.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Коваленко</a> С. П. Арбитражный процесс<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Коваленко С. П."
},{
    "quote": "<div class='pi_text'>Сложно работать с интеллектуалами, приходится испытывать ментальное напряжение.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text'>* С1 отсутствует *<br/>C: Её нет — ногу подвернула.<br/>П: Ну не ногой же думает, могла бы доползти.<br/><br/>* С2 отсутствует * <br/>С: Температура у неё.<br/>П: Невовремя... В аудитории прохладно, она могла бы помочь. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Мне уже страшно. Не такие вы какие-то. Так можно и до фригидности доиграться.<br/><br/>Даниелян А.С. Теория государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text'>Даже если теорема очевидна, ее нужно доказывать. В математике мамой не клянутся.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В. Фундаментальные дискретные модели <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text'>П: Главный вопрос, который я задаю перед каждой парой. Кто?<br/>*тишина*<br/>П: Ну, мы же каждый раз это выясняем!<br/>*тишина*<br/>П: Эхх. Все ясно. Склерозники.<br/>С: *робко* Кто включит проектор?<br/>П: Именно!<br/><br/>Алеников А.С. Контроллинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text'>Конъюнкция делает бессмысленной вашу жизнь. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>Случайностей не бывает, все по звёздам...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Ваш ответ на экзамене должен быть не только информативным, но и патриотичным.<br/><br/>Тарасенко Т.П. 'Основы теории коммуникации' <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Тарасенко Т.П."
},{
    "quote": "<div class='pi_text'>Когда Сталин умер, люди же плакали не потому, что такая няшка откинулась!<br/><br/>Жаворонков Д. В. Основы функционирования систем сервиса<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жаворонков Д. В."
},{
    "quote": "<div class='pi_text zoom_text'>Чтоб уже, как говорится, и чтец, и жрец, и на дуде игрец!<br/><br/>Евтушенко А.С. Всеобщая история  <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Евтушенко А.С."
},{
    "quote": "<div class='pi_text'>П: Староста здесь?<br/>С: Нет.<br/>П: Зам. старосты?<br/>С: Тоже нет.<br/>П: *смешок* какая забавная группа.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В. Комплексный анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Нет.<br/>П: Зам. старосты?<br/>С: Тоже нет.<br/>П: *смешок* какая забавная группа.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В."
},{
    "quote": "<div class='pi_text zoom_text'>Сойти с ума - это то, к чему мы должны всегда стремиться. <br/><br/>Мороз О. Н. Античная литература <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Мы изучаем прошлое, чтобы понять настоящее и прогнозировать будущее. <br/><br/>Узлов Ю.А. История <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>Какие вы умные, аж противно! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Коваленко</a> А. В. Моделирование и прогнозирование экономических процессов <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Коваленко А. В."
},{
    "quote": "<div class='pi_text'>На очном обучении мы, конечно же, полностью изучаем эту статью, но, так как вы заочники, вы её хотя бы прочтите. Хотя бы в кратком содержании. Хотя бы частично. Ну, хоть в руках подержите...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0'>#Борисова</a> О. Г. Современный русский язык. Лексикология.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Борисова О. Г."
},{
    "quote": "<div class='pi_text zoom_text'>Вы что думали, четвертая пара - это не занятие, а кафе 'У Аркадьича'?!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г.А. Дополнительные главы физики и математики <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A2%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФТФ_КубГУ</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>Каждый кто со мной пил за 70 лет думает, что может мне позвонить, и я сынку-дебилу всё поставлю.<br/><br/>Кутер М.И. Бухгалтерский учет <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>Нужен муж любой. Пусть даже пьяненький. Чё вы ржёте? Там так и написано.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>С: Почему вы так быстро диктуете? <br/>П: Скорость - моя стихия. <br/><br/>Петросов Т.А. Основы производственных процессов <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Петросов Т.А."
},{
    "quote": "<div class='pi_text'>Если вы думаете, что попали в сказку, то филфак в другом крыле.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2'>#Половодов</a> Ю. А. механика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%B3%D1%83'>#физтех_Кубгу</a></div>",
    "author": "Половодов Ю. А."
},{
    "quote": "<div class='pi_text'>*Всю пару разбирают политическую власть*<br/><br/>П: - Дополнения? Вопросы? <br/>С: - У меня уже голова болит!<br/>П: - Наконец-то! Я своего добился.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B5%D1%86%D0%BA%D0%B8%D0%B9'>#Любецкий</a> А. И. Основы парламентской культуры<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Любецкий А. И."
},{
    "quote": "<div class='pi_text'>Хотите злодея? Получайте! Лужин.  Синтонный негодяй, психологический извращенец. Он хочет жениться... Ну, во-первых, он хочет жениться.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B2%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Свитенко</a> Н.В.  Основы отечественной художественной культуры<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Свитенко Н.В."
},{
    "quote": "<div class='pi_text'>Какой познавательный процесс в чистке картошки?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%85%D0%BE%D0%B2%D0%B8%D1%87'>#Бухович</a> Е. В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Бухович Е. В."
},{
    "quote": "<div class='pi_text'>Казалось бы, этого не может быть, но это может быть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D1%8B%D0%BD%D0%BA%D0%B8%D0%BD'>#Волынкин</a> В. А. Информатика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Волынкин В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Миром правят нефть и доллар!<br/><br/>Дорош В.С. Оптоэлектроника <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%B7%D0%A2%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФизТех_КубГУ</a></div>",
    "author": "Дорош В.С."
},{
    "quote": "<div class='pi_text'>П: что для тебя вкусности?<br/>С: что-то вкусное, сладкое <br/>П: вкусно это мясо, а сладкое это другое<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D0%BD%D0%B3%D0%B8%D1%80'>#Тангир</a> К.М. Практикум по орфографии и пунктуации <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Тангир К.М."
},{
    "quote": "<div class='pi_text'>Ваша запятая всё разрезала, в мясо, на щепки! Вы понимаете? У нас труп.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D0%B0%D0%BB%D1%8B%D0%B9'>#Чалый</a> В. В. Русский язык и культура речи <br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text'>* идет контрольная *<br/>Никто никому не мешает, каждый умирает в одиночку!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D0%BB%D0%B8%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE'>#Пелипенко</a> Н. И. Практический курс немецкого языка <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Пелипенко Н. И."
},{
    "quote": "<div class='pi_text'>*когда задается большой объём заданий,и номенклатуры, следует коронная фраза*<br/><br/>- Здорово я придумал?))<br/><br/>Жирма В.В. , физ.география России и ближнего Зарубежья<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Я бы посоветовал Вам добавить в свое исследование боди-арт.<br/><br/>Кимберг А.Н. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Кимберг А.Н."
},{
    "quote": "<div class='pi_text'>П: На что похожа это тело... в регби никто не играет?<br/>С: О! Мяч!<br/>П: Что? Не понял.<br/>С: Мяч!<br/>П: Мяч? Какой мяч? Я спросил играет кто в регби, а вы мне 'мяч' — интересный ответ на вопрос преподавателя.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>П: Все это подкреплено формулами. Хотите их видеть?<br/>С: Нет!<br/>П: Я тоже.<br/><br/>Лысенко В.Е. 'Астрофизика'. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Лысенко В.Е."
},{
    "quote": "<div class='pi_text'>Вы можете представить инстаграм Сергея Радонежского? Это невозможно пиарить!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B2%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Свитенко</a> Н. В. История русской литературы XIX века<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Свитенко Н. В."
},{
    "quote": "<div class='pi_text'>*после неудачного ответа студента*<br/><br/>- Ладно, поставлю вам три с минусом до самого дома.<br/>- До дома?<br/>- Да, до дома, где вы живёте.<br/><br/>Гладун В.В. Зоология<br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Биофак_кубгу</a></div>",
    "author": "Гладун В.В."
},{
    "quote": "<div class='pi_text'>*студенты нещадно тупят*<br/>-Нет! Труба! В такой ситуации приличный преподаватель стреляться должен! А мне пока не хочется...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D1%87%D0%B8%D0%BD%D0%BE%D0%BA'>#Починок</a> Т. Б. Аналитическая химия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Починок Т. Б."
},{
    "quote": "<div class='pi_text'>Нарисовали? А, или современное поколение рисовать не умеет? Всё ждёте, что программа за вас нарисует? Ну, вы это, учитесь, а то вдруг свет отключат, спутники попадают.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К.В. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Малыхин К.В."
},{
    "quote": "<div class='pi_text zoom_text'>Объяснить это очень трудно — пишите.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8C%D1%86%D0%B5%D0%B2%D0%B0'>#Мальцева</a> Р. И. Основы теории коммуникации <a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Журфак_КубГУ</a></div>",
    "author": "Мальцева Р. И."
},{
    "quote": "<div class='pi_text'>-Вы знаете, как это называется? <br/>-Нет. <br/>-Вот вы черти мои! <br/><br/>Осипян В.О. Информатика. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Осипян В.О."
},{
    "quote": "<div class='pi_text'>* студент рассказывает алфавит * <br/>— ... ха, це, ча<br/>* препод резко встаёт и пишет на доске свою фамилию * <br/>— Это буква ЧЕ! Не от ЧАлый!<br/><br/>Чалый В. В. Русский язык и культура речи <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text'>Да у них там свои прибабахи были в средневековья.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D0%BD%D1%82%D0%B8%D0%BF%D1%86%D0%B5%D0%B2%D0%B0'>#Антипцева</a> Ю. А. Картография <br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Антипцева Ю. А."
},{
    "quote": "<div class='pi_text zoom_text'>И что такого, что парень в армии? В век современных технологий живем! Купи себе механического друга.<br/><br/>Кравченко Г.Г. Живопись <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Кравченко Г.Г."
},{
    "quote": "<div class='pi_text'>С документами всё должно быть по фэншую.<br/><br/>Егупов А. В. Основы делопроизводства и документооборота<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Егупов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Учиться ради знаний, а не ради оценок. <br/><br/>Касьянов В.В. Культурология <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Я уже ничему не удивлюсь, у нас же яйценоиды в правительстве. <br/><br/>Павлов Ю. М. Практическая журналистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю. М."
},{
    "quote": "<div class='pi_text zoom_text'>Сколько человека гречкой ни корми, а филологом он не станет.<br/><br/>Тащиан А. А. Философия, <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>*задерживает на 2 минуты на паре*<br/>Пошло нарушение ПЧ, до свидания!<br/><br/>Малиновский О.Н. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Малиновский О.Н."
},{
    "quote": "<div class='pi_text'>На сессии, конечно, выживут не все. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B8%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0'>#Миненкова</a> В.В.<br/>Теория организации гостиничной деятельности. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Миненкова В.В."
},{
    "quote": "<div class='pi_text zoom_text'>— А вот Ленина читали? Нет? Так вот все сочинения — это страшная галиматья, вот открываешь книгу и бооооже, ниииичего не понятно.<br/><br/>Литвин А. В. Основы психологии и педагогики <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Литвин А. В."
},{
    "quote": "<div class='pi_text'>*разговор о священниках*<br/>У них машины лучше, чем у нас? Да. Дома лучше, чем у нас? Да. Ну и чё?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. Зарубежная литература <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Я шесть раз перечитывал свой любимый роман 'Мастер и Маргарита'...зачем? Я что, похож на идиота?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B2'>#Большов</a> В. Б. Основы социального моделирования <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Большов В. Б."
},{
    "quote": "<div class='pi_text'>* студент неправильно оформил титульный лист *<br/><br/>- Почему моя фамилия выше, чем ваша? <br/>- Ну вы же преподаватель. Это как уважение. <br/>- Давайте сотрём эти грани! Мы все одинаковы, только вы студент, а я профессор.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D1%81%D0%B8%D0%BF%D1%8F%D0%BD'>#Осипян</a> В. О. Информатика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Осипян В. О."
},{
    "quote": "<div class='pi_text'>Вы разве рождаетесь потому, что сами этого хотите? Так вот когда начнёте рождаться по собственному желанию, тогда и распоряжайтесь своей жизнью!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D0%BB%D0%B0%D0%BD'>#Белан</a> Е. А. Философия <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Белан Е. А."
},{
    "quote": "<div class='pi_text zoom_text'>Учебник - это путь в безнадежность № 1<br/><br/>Костенко К.И. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>*на просьбу отпустить раньше или задавать меньше*<br/>Как говорят в евросоюзе: «АРБАЙТЕН, ШНЕЛЛЕ, ШНЕЛЛЕ! АРБАЙТЕН».<br/><br/>Алеников А.С. Контроллинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text'>П: - А может быть такая ситуация?<br/>С: - Ну, потенциально да.<br/>П: - А кинетически?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D1%81%D1%81%D0%B0%D1%80%D0%B0%D0%B1%D0%BE%D0%B2'>#Бессарабов</a> Н. В. Базы данных и СУБД<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Бессарабов Н. В."
},{
    "quote": "<div class='pi_text zoom_text'>Спасибо мозгу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B5%D0%BD%D0%B8%D1%81%D0%BE%D0%B2'>#Денисов</a> В. Л. Аналитическая журналистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Денисов В. Л."
},{
    "quote": "<div class='pi_text zoom_text'>-Вы заразны?<br/><br/>Дедюхин А.А. английский <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Дедюхин А.А."
},{
    "quote": "<div class='pi_text'>П: Сейчас пойду и посмотрю, сокращаешь ты там или нет.<br/>С: Нет.<br/>П: Ну всё, ты труп!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%B2%D0%B0'>#Толстова</a> А. З. Мировая экономика и МЭО <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Нет.<br/>П: Ну всё, ты труп!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%B2%D0%B0'>#Толстова</a> А. З."
},{
    "quote": "<div class='pi_text'>* речь идёт о сотрудниках МВД, об их ненормированном рабочем дне *<br/><br/>П: И днём, и ночью могут вызвать. С кофе часто видите их? Так вот это не от легкой жизни. А граждане у нас что? Видят с кофе, да? Значит есть деньги. А раз есть деньги, значит, что? Правильно! Взяточник!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BD%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Бондаренко</a> Ю. А. Профессиональная этика и служебный этикет<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Бондаренко Ю. А."
},{
    "quote": "<div class='pi_text'>*после того, как студент не ответил на вопрос*<br/>- Ты что, из ИГИЛа?<br/><br/>Узлов Ю.А. История <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>*про воспитание детей 5-7 лет*<br/>А некоторые учат детей читать в этом возрасте. Зачем, правда, это детям - не понятно...<br/><br/>Хозяинова Т.К. Диагностика и коррекция дезадаптаций в дошкольном и школьном возрасте <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Хозяинова Т.К."
},{
    "quote": "<div class='pi_text'>Вы можете пропускать занятия только в двух случаях: если вы на свадьбе (желательно на вашей) или на похоронах (желательно не ваших).<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0'>#Андронникова</a> О. В. Современный русский и родной язык <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Андронникова О. В."
},{
    "quote": "<div class='pi_text'>Полином Жегалкина. Прославился человек, но непонятно чем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Вы сразу судьями не станете. А может и вообще никем не станете.<br/><br/>Даниелян А. С. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text'>-Можно спросить?<br/>-Спросить можно. Ответ получить нельзя.<br/><br/>Май В.А. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Май В.А."
},{
    "quote": "<div class='pi_text'>Военные, доллары, крокодилы. Что их объединяет? Зеленый. Сами не додумались бы. Фантазия нужна. Чувствуете, да?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К.И. Модели интеллектуальных систем<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>П: Это как в той шутке. Через 50 лет в мире останется 4 государства - Россия, Бразилия, Китай и 'Али-баба'.<br/>С: А США?<br/>П (быстро и тихо): Не, не останется.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A3%D1%80%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2'>#Урманов</a> Д.В. Теория управления<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Урманов Д.В."
},{
    "quote": "<div class='pi_text zoom_text'>Неужели этой информации нет в ваших ковырялках?! (о смартфонах)<br/><br/>Сидоров В. А. Экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>* открывающаяся дверь кафедры задела студента *<br/><br/>Извините, что вышел без стука.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0'>#Гаркуша</a> О. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Гаркуша О. В."
},{
    "quote": "<div class='pi_text'>Математика сушит сердце. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К.И. Математическая логика и дискретная математика. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>*обращаясь к студентке* <br/><br/>Вы, как Яровая, делаете умный вид, будто знаете, о чем говорите. <br/><br/>Осташевский А.В. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>С: Мы тупые.<br/>П: Давайте к доске, кто самый тупой.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Комплексный анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>И тут началось ТАКОООООООЕ.<br/><br/>Борисов С.А. Социология<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Борисов С.А."
},{
    "quote": "<div class='pi_text'>С: Сколько задач будет на контрольной?<br/>П: m+1, где m - количество задач, которые можно сделать за пару.<br/><br/>Колотий А.Д. Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Колотий А.Д."
},{
    "quote": "<div class='pi_text'>П: Вы от фонаря сказали? <br/>С: Это не я сказал.<br/>П: Ну, подумал.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D0%B2%D1%80%D0%B8%D0%BB%D1%8E%D0%BA'>#Гаврилюк</a> М. Н. Комплексный анализ <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Гаврилюк М. Н."
},{
    "quote": "<div class='pi_text'>- Вы пропадаете, Валерий Валерьевич! <br/><br/>- Ну не знаю, пропадаю я или нет. Я просто говорю.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%BE%D0%BB%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D0%BD'>#Холстинин</a> В. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Холстинин В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Никогда не трогай то, что трогать не нужно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D1%80%D0%BE%D1%85%D0%BE%D1%80%D0%BE%D0%B2%D0%B0'>#Прохорова</a> М.Л. Уголовное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Прохорова М.Л."
},{
    "quote": "<div class='pi_text'>П: На третьей картинке вы видите пример типичных наркоманов.<br/>*Показывает фото Гуфа и Центра*<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B5%D0%BD%D0%BA%D0%BE'>#Тарасенко</a> Т.П. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Тарасенко Т.П."
},{
    "quote": "<div class='pi_text zoom_text'>...чтобы готовиться к смерти, нужно знать, как жить.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Онтология и теория познания <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>*рисует на доске график, немного не получается... Отходит от доски, осматривает его*<br/>— Ну что? Похоже на гиперболу?... Ну чего вы молчите?! Похвалите меня!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B8%D1%82%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>#Литвинский</a> К. О. Микроэкономика <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Литвинский К. О."
},{
    "quote": "<div class='pi_text'>Преподаватель - студентке:<br/>П: Warum bist du so traurig? (Почему такая грустная?)<br/>С: Я не traurig!<br/>П: Ну так скажи по-немецки, что ты не traurig!<br/><br/>Бычков С.С. Немецкий язык <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Бычков С.С."
},{
    "quote": "<div class='pi_text'>Преподаватель подводит к выводу о современном обществе:<br/>- Ну и что тогда хорошего в браке? <br/>* Зависает на полсекунды. *<br/>- Ой, в смысле в разводе.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Доклассическая словесность в медиа<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>Студентка отвечает на надоедливые вопросы соседу по парте: 'да-Да-ДА!!!'<br/><br/>Преподаватель удивленно: 'Что-что, а от девушек мне непривычно такое на лекциях слышать'<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Вот вы все уедете за границу... дааа не говорите, что не уедете, а страну итак некому поднимать!<br/><br/>Письменная Н.Я. Латинский язык. <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Письменная Н.Я."
},{
    "quote": "<div class='pi_text'>Я не говорю, что эта девочка страшная, нет, она просто хороший человек.<br/><br/>Даниелян А. С. Теория государства и права <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text'>* Студентка отвечает на вопрос. *<br/><br/>Я надеюсь, что Вы правильно сказали, а то я не слышала.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B2%D1%82%D1%83%D0%BD'>#Ковтун</a> О. А. Конституционное право<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Ковтун О. А."
},{
    "quote": "<div class='pi_text'>*про поэму Некрасова 'Мороз, Красный Нос'*<br/><br/>Отличная поэма. Я действительно горд, что там есть моё имя. Вашу фамилию не упомянут.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Чтобы стать людьми, у вас есть только семестр!<br/><br/>Титов Г.Н. Основы элементарной математики <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Титов Г.Н."
},{
    "quote": "<div class='pi_text'>Я из тех людей, кто у Санты на Рождество просит в подарок список плохих девочек.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B7%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B8%D1%87'>#Сазантович</a> А. Б. Политология<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Сазантович А. Б."
},{
    "quote": "<div class='pi_text'>Шутки шутками, но могут быть и дети.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D1%87%D0%B0%D0%B9'>#Нечай</a> Ю. С. Практический курс немецкого языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Нечай Ю. С."
},{
    "quote": "<div class='pi_text'>Если есть деньги, нет проблем, есть цена вопроса.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%B2%D0%B0'>#Толстова</a> А. З. Мировая экономика и МЭО<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Толстова А. З."
},{
    "quote": "<div class='pi_text zoom_text'>Лучше гибиск и кроватка, чем под камнем и оградка! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2'>#Николов</a> М.С. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Николов М.С."
},{
    "quote": "<div class='pi_text'>С: В них нет той заумной терминологии, к которой Ибсен обращался на ранних сроках... <br/>П: ...беременности! <br/>С: ...эм...своего творчества.<br/><br/>Татаринова Л.Н. История зарубежной литературы рубежа XIX-XX вв. <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринова Л.Н."
},{
    "quote": "<div class='pi_text'>— Кто из вас сдавал ЕГЭ? <br/>— Все ... <br/>— Кошмар.... Все Еганутые! <br/><br/>Арламов А. А Виктимология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Арламов А. А"
},{
    "quote": "<div class='pi_text'>* студенты кидают влажные салфетки через всю аудиторию *<br/>- Не убейте кого-нибудь влажными салфетками. Это будет влажная смерть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B8%D1%80%D0%B8%D1%88%D0%B5%D0%B2'>#Биришев</a> С. А. Экономическая безопасность<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Биришев С. А."
},{
    "quote": "<div class='pi_text'>Если что-то ломается, не обращайте внимания. Может быть так было задумано.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Онлайновые СМИ<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text'>Если вы хотите разочароваться в предмете и покинуть аудиторию, то сейчас самое время это сделать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B8%D1%89%D0%B5%D0%BD%D0%BA%D0%BE'>#Мищенко</a> С. А. Технология создания рекламных и ПР-текстов <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мищенко С. А."
},{
    "quote": "<div class='pi_text zoom_text'>Вас же пока фейсом об тейбл не стукнешь, вы ничего не поймете.<br/><br/>Элмасян А.В. Практика Языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Элмасян А.В."
},{
    "quote": "<div class='pi_text'>С: *ошибся*<br/>П: А вот тут ты пошутил. Скажи: ' Я пошутииил, я больше так не буууду.'<br/><br/>Спасов С. В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>Ну, это никуда не годится... <br/><br/>Тен О.К. Алгебра и геометрия <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Тен О.К."
},{
    "quote": "<div class='pi_text zoom_text'>Я всегда знал, что пребывать в безумии - прекрасно.<br/><br/>Мороз О.Н. Русская литература 18го века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>* окна и двери подпёрты стульями * <br/>— Век нанотехнологий!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D1%84%D0%B0%D0%BD%D0%B0%D1%81%D1%8C%D0%B5%D0%B2%D0%B0'>#Афанасьева</a> Т. Н. Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Афанасьева Т. Н."
},{
    "quote": "<div class='pi_text'>А теперь опошлим это уравнение. <br/><br/>Гайденко С.В. Основные разделы элементарной математики.<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Гайденко С.В."
},{
    "quote": "<div class='pi_text'>*студентка рассказывает о гостеприимстве адыгов*<br/>С:...проявляли гостеприимство даже к врагам.<br/>П: Сначала накорми, спать уложи, а потом уже и убивать можно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%82%D0%B2%D0%B5%D0%B5%D0%B2'>#Матвеев</a> О.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Матвеев О.В."
},{
    "quote": "<div class='pi_text'>От кого Вы услышали этот бред?! Плюньте ему в лицо!!<br/><br/>Кодрле С.В. Английский язык<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кодрле С.В."
},{
    "quote": "<div class='pi_text'>С: Как же лень считать частные производные...<br/>П: Хотите лёгкой жизни? Надо было поступать на юрфак.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В. Математический анализ II<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин К. В."
},{
    "quote": "<div class='pi_text'>П: Ну? Где вопросы?<br/>С: Может ли логос уничтожить своего обладателя?<br/>П: Ты кто такая?<br/><br/>Спасов С. В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text zoom_text'>— ...можно внедрять рисунки: Иванов — его рожица.<br/><br/>Сокол Д. Г. Технологии программирования и работы на ЭВМ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сокол Д. Г."
},{
    "quote": "<div class='pi_text'>Для того, чтобы работать для души, нужно несколько лет проработать для туловища. <br/><br/>Немец Г.Н. Основы менеджмента<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Немец Г.Н."
},{
    "quote": "<div class='pi_text'>Нужно иметь свое мнение, иначе вами будут управлять. Нужно кусаться и гавкать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D1%82%D0%B5%D1%80'>#Кутер</a> М. И. Бухгалтерский учёт<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М. И."
},{
    "quote": "<div class='pi_text'>* подарили конфеты на 8-е марта *<br/>— Я смотрю, вы мои формы обожаете. Злые вы!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BB%D1%8E%D1%81%D1%82%D0%B5%D0%BD'>#Тлюстен</a> С. Р. Математическая статистика <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С. Р."
},{
    "quote": "<div class='pi_text'>'Выхода нет' - это что за фраза такая? <br/>Выход есть всегда! В этом меня убеждает уголовно-процессуальный кодекс.<br/><br/>Гладышева О.В. Уголовный процесс <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Гладышева О.В."
},{
    "quote": "<div class='pi_text'>П: Как там они называются? Ну эти, которые передвигаются.<br/>С: Туристы?<br/>П: Да, точно, туристы.<br/><br/>Павлов Ю.М. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text'>Где-то должно быть удовольствие. Если мы от всего отказываемся, то для чего мы живём?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B5%D1%82%D0%BC%D0%B0%D0%BD'>#Гетман</a> Ю. П.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Гетман Ю. П."
},{
    "quote": "<div class='pi_text zoom_text'>Давайте в знаменателе приведём к общему знаменателю и опустим знаменатель в знаменатель.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F'>#Макаровская</a> Т. Г. Математика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Макаровская Т. Г."
},{
    "quote": "<div class='pi_text'>Есть ли жизнь на Марсе я не знаю, но если она там есть, то там точно есть вишни, яблони, вареники со сметаной.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К.И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФКТиПМ_КубГу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text zoom_text'>Вернемся к нашим любимым педофилам... <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Петровский</a> А. В. Предупреждение преступлений <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Петровский А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Вот на этой фотографии мы видим типичную девушку без головы.<br/><br/>Чистилин А. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Чистилин А."
},{
    "quote": "<div class='pi_text'>Вы меня отвлекли. Или я себя отвлёк. Кто-то из нас неправ. 1:1.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>Чувствуется новогреческий переводчик. Я уже все его трещинки знаю, как Земфира пела.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В. Античная логика и риторика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Так что, друзья мои, когда будете отдыхать на яхте, меня не забудьте позвать, я с удовольствием приму ваше приглашение.<br/><br/>Богдашев И.В. Общая экономическая теория. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Богдашев И.В."
},{
    "quote": "<div class='pi_text'>Горизонтальное вертикальную форму не имеет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B2%D0%B8%D0%BD'>#Савин</a> В.Н. Дифференциальные уравнения<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Савин В.Н."
},{
    "quote": "<div class='pi_text'>П: Вот вы кто?<br/>С: * странные смешки *<br/>П: Вы знаете, это не смешно. Вы не можете ответит кто вы. Вы никто, вас не существует, вы биороботы. <br/>С: Мы формирующиеся личности. <br/>П: Не факт. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Доклассическая словесность в медиа<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>Существует расстояние, на котором девушка смотрится наиболее привлекательной. Более того, я вам скажу, от девушек надо держаться на расстоянии!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н.Н.<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н.Н."
},{
    "quote": "<div class='pi_text'>* Смотрим на компьютере милое видео про котиков. *<br/><br/>Что там за котики? Я сейчас как начну гавкать...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D1%80%D0%B8%D1%85%D0%BE%D0%B4%D1%8C%D0%BA%D0%BE'>#Приходько</a> А. И. Общая теория связи<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Приходько А. И."
},{
    "quote": "<div class='pi_text'>П: Кто там по парте шкребёт, как кот мартовский? Кто нибудь, киньте в него шубу.<br/>С: Шубу?<br/>П: Ну да. Кот когда кошечку хочет, шубу ему кидаешь и все... Он там...'играет' с ней. Шапка слишком маленькая, ему не удобно. А вот шуба в самый раз.<br/><br/>Николов М.С. Электричество и магнетизм. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Николов М.С."
},{
    "quote": "<div class='pi_text'>От осинки не родятся апельсинки. <br/><br/>Гитман А.В. Семейная психология<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#Фппк_кубгу</a></div>",
    "author": "Гитман А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Вот придут студенты-медики в прокуратуру... в отделение урологии.<br/><br/>Петровский А.В. Предупреждение преступлений <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Петровский А.В."
},{
    "quote": "<div class='pi_text'>Какая у вас сейчас задача? Ваша задача дотерпеть до конца пары. А потом пойти дальше... терпеть. Терпеть остальные пары ну или всю жизнь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD'>#Волошин</a> М. А. Вычислительная техника и информационные технологии<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Волошин М. А."
},{
    "quote": "<div class='pi_text zoom_text'>Студенты нашего факультета считают себя крутыми программерами, и единственное, чего им не хватает - это зарплаты в 50 тысяч для начала.<br/><br/>Бессарабов Н.В. Базы данных <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Бессарабов Н.В."
},{
    "quote": "<div class='pi_text zoom_text'>Все должно быть в электронном виде. В европейских странах человеку, который придумал на одну бумажку меньше, дают премию и выходной. А у нас бумажная страна!<br/><br/>Нюхтилин П. В. Вебдизайн <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Нюхтилин П. В."
},{
    "quote": "<div class='pi_text'>* говорит, что про него много цитат и все думают, что у него на лекциях один едрид мадрид *<br/>Больше никаких цитат!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История России <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>- Что должно остаться от петуха на заводе?<br/>- Перья.<br/>- Ну вы и экономист! Кто ж вам перья то отдаст? На заводе от петуха должно остаться только кукареку.<br/><br/>Зеленов В.И. <a data-link='/feed?section=search&amp;q=%23%D1%85%D0%B8%D0%BC%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#химфак_кубгу</a></div>",
    "author": "Зеленов В.И."
},{
    "quote": "<div class='pi_text'>*зашла речь о сознательности птиц* <br/><br/>Да, птицы делают гнезда, но разве птичка думает: 'Мне тридцатник. Я не замужем...' <br/><br/>Чапля В.В., Экономика. <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Чапля В.В."
},{
    "quote": "<div class='pi_text zoom_text'>... и закрываем камеру, чем бог послал. Ну, вообще, конечно, существует шлифованое стекло, я вам его когда-нибудь покажу.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D0%BB%D1%8C'>#Пиль</a> Л. И. Теория и практика химического анализа <a data-link='/feed?section=search&amp;q=%23%D1%85%D0%B8%D0%BC%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#химфак_кубгу</a></div>",
    "author": "Пиль Л. И."
},{
    "quote": "<div class='pi_text'>В суде мало быть невиновным.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В. Риторика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text'>* Преподаватель объясняет первую теорему Больцано-Коши. *<br/><br/>Каждый здравомыслящий человек поймёт, что если сегодня температура положительная, а вчера была отрицательная, то когда-то был ноль.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В. Математический анализ <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин К. В."
},{
    "quote": "<div class='pi_text'>П: - Он уже умер, он Past Simple.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0'>#Сизова</a> Е. В. Английский язык <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Сизова Е. В."
},{
    "quote": "<div class='pi_text zoom_text'>Русский язык, как праздник какой-то — иностранцы мучаются, а мы радуемся.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B9%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Сайченко</a> В. В. Основы теории литературы. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Сайченко В. В."
},{
    "quote": "<div class='pi_text'>В реальности так не бывает, а здесь так бывает.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%85%D0%BE%D0%B2%D0%B8%D1%87'>#Бухович</a> Е. В. Концепции современного естествознания<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Бухович Е. В."
},{
    "quote": "<div class='pi_text zoom_text'>Ручка в ручку и пишем!<br/><br/>Сидоров В.А экономическая теория, <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А"
},{
    "quote": "<div class='pi_text'>Ребят, все начинается на 3-м курсе. Все засосы, любовь, все это потом. Но все в меру, обязательно все в меру.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D0%A3%D0%91%D0%93%D0%A3'>#эконом_КУБГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>*Речь о машине Тьюринга*<br/><br/>Я, конечно, понимаю, что это приятный процесс, когда головка бегает туда-сюда.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В. Математическая теория языков <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text zoom_text'>- А эта студентка действительно любительница тащить пианино в квартиру через форточку. Ползя по водосточной трубе..... Держа в зубах.<br/><br/>Рожков А.В. компьютерная алгебра и криптография <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Рожков А.В."
},{
    "quote": "<div class='pi_text zoom_text'>- Все соглашаются с этим, поэтому глотайте и не кашляйте...<br/><br/>Узлов Ю.А. 'История России' <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>С: - А правда, что Вы за допинг на Олимпиаде отвечали? <br/>П: - Работал в антидопинговом центре, Вы хотели сказать? Хотя Ваш вариант мне нравится даже больше.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BC%D0%B5%D1%80%D0%B4%D0%B0%D1%88%D0%B5%D0%B2'>#Темердашев</a> А. З. Методы экоаналитического контроля суперэкотоксикантов <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Темердашев А. З."
},{
    "quote": "<div class='pi_text'>* На паре сидит 3 калеки из положенных 40 человек. Преподаватель, заходя в аудиторию, всех оглядывает. *<br/><br/>П: - Так, ну, посещаемость мне не нравится, но считается, что 5% умных людей достаточно для существования разумного общества, а 5% сумасшедших достаточно, чтобы совершить революцию. Надеюсь, вы ничего сейчас не замышляете.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Экспертные системы<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>С: А можно к доске человеку который вообще не понимает что происходит? <br/>П: Почему бы и нет. В правительство таким можно, а доске нет?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я.В. Математика и информатика. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я.В."
},{
    "quote": "<div class='pi_text'>Не путайте одиночество и аристократизм.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text'>*разговор о душе*<br/>Если она хочет быть - то пусть будет. Мне до этого нет никакого дела.<br/><br/>Мороз О.Н. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>- Возьмите свой орешек.<br/><br/>Даниелян А.С. ТГП <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Возьмём M вершин...Нет, M - это мало. Возьмём лучше N вершин.<br/><br/>Костенко К.И. Дискретная математика. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a> <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФПМ_КубГУ</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>Мне, конечно, всё равно: пишете вы лекции или не пишите. У меня есть диплом о высшем образовании.<br/><br/>А у вас нет.<br/><br/>Гортинская В.В. Алгебра и аналитическая геометрия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Гортинская В.В."
},{
    "quote": "<div class='pi_text'>Физиологическая сторона человека упирается в ту самую экзистенциальную проблему — ипотека!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text'>– Я хочу, чтобы над вами всегда светила звездочка<img alt='⭐' class='emoji' src='/emoji/e/e2ad90.png'/> <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B0%D1%81%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2'>#Касьянов</a> В.В. - декан факультета журналистики <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Только задания на обследование подбираем так, чтобы можно было обследовать. А не просто поржать над детьми. <br/><br/>Матвиенко Е.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Матвиенко Е.В."
},{
    "quote": "<div class='pi_text'>«3» — замечательное число! Две крайности и что-то посредине. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О.Н. Основы теории литературы <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D0%A3%D0%91%D0%93%D0%A3'>#журфак_КУБГУ</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>*преподаватель студентам*<br/> <br/>- Ну вы же знаете, что размер имеет значение, да?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B0%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%BA%D0%BE%D0%B2'>#Жаворонков</a> Д.В. Конфликтология  <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жаворонков Д.В."
},{
    "quote": "<div class='pi_text'>*Идёт контрольная*<br/>П: Что, студент, списываешь?<br/>С: Нет, с чего вы взяли?<br/>П: Нет? Зря, у тебя для этого есть все возможности.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История <br/><a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text zoom_text'>— Надури ближнего своего, или ближний надурит тебя и возрадуется!<br/><br/>Кутер М. И. Бухгалтерский учёт <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М. И."
},{
    "quote": "<div class='pi_text zoom_text'>С: Вы будете спрашивать по желанию? П: Конечно. Вы всегда отвечаете по желанию...моему.<br/><br/>Даниелян А.С. ТГП <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text'>*как писать курсовую* <br/>— Берёте палец и высасываете из него.<br/><br/>Бондаренко Н. А. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Бондаренко Н. А."
},{
    "quote": "<div class='pi_text'>*студент случайно что-то печатает в программе на русском вместо английского*<br/><br/>Что такое? Кто здесь? <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD'>#Подколзин</a> В. В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Подколзин В. В."
},{
    "quote": "<div class='pi_text'>П: Кто вы?<br/>С: Издатели.<br/>П: А что должны делать издатели? Правильно. Страдать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Электронные средства информации<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Издатели.<br/>П: А что должны делать издатели? Правильно. Страдать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С."
},{
    "quote": "<div class='pi_text'>*в коридоре, после того, как другая преподавательница выгнала нашу группу из кабинета*<br/>Не знает ещё, что с магом связалась.<br/><br/>Узлов Ю.А. История<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text zoom_text'>Ты ясновидящая?<br/><br/>Борисов С. А. Социология <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Борисов С. А."
},{
    "quote": "<div class='pi_text zoom_text'>— Опять эти праздники. Какой ужас! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BB%D1%8E%D1%81%D1%82%D0%B5%D0%BD'>#Тлюстен</a> С. Р. Теория вероятностей <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С. Р."
},{
    "quote": "<div class='pi_text'>Всю пару в партизанах отсидел!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0'>#Бородина</a> С. Н. История России<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Бородина С. Н."
},{
    "quote": "<div class='pi_text'>Важно то, что у вас в голове, а не какого цвета диплом.<br/><br/> Утков Г.Н.  Современный русский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г.Н."
},{
    "quote": "<div class='pi_text zoom_text'>- Как говорят - если воровать, то по-крупному! Отсидел, и ещё осталось! <br/><br/>Терещенко Н.Д. Конституционное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Терещенко Н.Д."
},{
    "quote": "<div class='pi_text'>*20 минут объяснял, как решать задачу по комбинаторике*<br/>Все хорошо, только есть одна проблема - это не правильное решение. Оно даёт нам не полный ответ. Но его тоже надо знать, чтобы так не решать.<br/><br/>Костенко К.И <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К.И"
},{
    "quote": "<div class='pi_text zoom_text'>Не путай Божий дар с яичницей.<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>*когда вещи, очевидные преподавателю, кроме него никому не очевидны*<br/>-Вот болваны.<br/><br/>Тен О.К. Дифференциальная геометрия и топология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9C%D0%B8%D0%9A%D0%9D_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФМиКН_кубгу</a></div>",
    "author": "Тен О.К."
},{
    "quote": "<div class='pi_text'>Как же вы не понимаете, здесь правильно перевести не 'пробежаться через' и не 'пробежаться мимо', а 'пробежаться по'. Ну как вам объяснить?! 'Пробежаться по' - это зачикиниться, а в остальных случаях не зачикиниться. <br/><br/>Шульженко.М.Ю., Практика перевода<br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Шульженко М.Ю."
},{
    "quote": "<div class='pi_text'>* часть доски закрыта коробкой из-под неё * <br/>П: Выкинуть бы вообще, но окно маленькое. Может быть на бок поставить?<br/>С: А она не зацепит тогда потолок?<br/>П: Одним потолком больше, одним меньше. Мне кажется никто даже не заметит.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Логика неизбежна.<br/><br/>Гарин С.В.  Логика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#фисмо_КубГУ</a></div>",
    "author": "Гарин С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Генро имело в Японии реальную власть. Это не собрание старичков, пьющих зеленый чай.<br/><br/>Карнаушенко. ИГПЗ. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко. ИГ"
},{
    "quote": "<div class='pi_text'>*о преподавателе, который на практике всегда задачи решает сам*<br/>Знаете, я уже сорок лет смотрю балет, но почему-то профессиональной балериной так и не стала.<br/><br/>Гортинская В.В. Алгебра и аналитическая геометрия <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Гортинская В.В."
},{
    "quote": "<div class='pi_text zoom_text'>— Пиши фигурную скобку... Это не фигурная скобка. Абстракцией ты будешь в Израиле заниматься.<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>*идёт пара по программе 3ds max, преподаватель показывает инструменты этой программы*<br/>П: Вот это, ребята, лестница. Ну ... если вы конечно знаете, что это такое.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B8%D1%80%D0%BE%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Мирошников</a> В.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Мирошников В.В."
},{
    "quote": "<div class='pi_text'>(Подозревает, что студентка списала)<br/>П: Каждый ваш такой поступок сокращает вашу жизнь!<br/><br/>Касьянов В. В. История России <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Касьянов В. В."
},{
    "quote": "<div class='pi_text'>Нимфоманки...хотя к нимфам это никак не относится. Когда к ним боги, ну, приставали, они кричали 'Ой!' и убегали.<br/><br/>Мороз О.Н. История античной литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#Журфак_КубГу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Вот из-за таких ответов преподаватели и лысеют. Волосы не то что дыбом встают, они просто встают и выходят!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BC%D0%B5%D1%80%D0%B4%D0%B0%D1%88%D0%B5%D0%B2'>#Темердашев</a> А. З. Методы экоаналитического контроля суперэкотоксикантов <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Темердашев А. З."
},{
    "quote": "<div class='pi_text'>*девушке, которая пришла в джинсах с дырками*<br/>Девушка, вас собаки драли, или кто-то еще?<br/><br/>Желтоносов В.М. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Желтоносов В.М."
},{
    "quote": "<div class='pi_text'>*студент не взял учебник*<br/>П : Теперь ты должен встать и сказать,  что у тебя развивающийся склероз!<br/><br/>Факторович А. Л. Современные информационные технологии <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Факторович А. Л."
},{
    "quote": "<div class='pi_text'>Ничего страшного, что не доделали отчет. Главное будете делать детей - доделайте их. А то потом приходят недоделаные дети, и приносят недоделаные отчеты, и никак не разорвать этот круг.<br/><br/>Кутер М.И. Бухгалтерский учет <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>Когда нам надо думать, мы думаем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B2%D0%B8%D0%BD'>#Савин</a> В. Н. Дифференциальные и разностные уравнения<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Савин В. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Не дышите, Таня. Вы слишком много дышите!<br/><br/>Жук Е. Е. Английский язык <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Жук Е. Е."
},{
    "quote": "<div class='pi_text'>- Как правильно читается слово 'гостиница' по английски?<br/>- ХОтэл<br/>- Не хОтэл, а хотЭл! Запомните: 'ХотЭл, хотЭл, пэрэхотЭл!'<br/><br/>Волошина К. С. , Английский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%B8%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУиП_кубгу</a></div>",
    "author": "Волошина К. С."
},{
    "quote": "<div class='pi_text'>В.Штерн — человек-открытие. Такая открывашка.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%BE%D0%B6%D0%BA%D0%BE%D0%B2'>#Рожков</a> А.Ю. Социология молодежи<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Рожков А.Ю."
},{
    "quote": "<div class='pi_text'>Повторение — сами знаете чья мать. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>#Письменский</a> А. В. Дифференциальные уравнения<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Письменский А. В."
},{
    "quote": "<div class='pi_text'>*говорил-говорил, потом резко замолчал*<br/><br/>Так , кто напомнит мне, что я хотел сейчас сказать ? <br/><br/>Мороз О.Н  <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н"
},{
    "quote": "<div class='pi_text'>С: Извините, можно выйти? <br/>П: Да что же вы внимание к себе привлекаете?  Мы не на подиуме! Эх, девушки... <br/><br/>Касьянов В.В. 'История'<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#журфак_КубГу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Тем, кто хорошо работает - я поставлю самозачеты. А остальные будут смотреть, завидовать и покрываться зелеными пупырышками - как огурчики. <br/><br/>Кирокосян М.А. Экономический анализ <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кирокосян М.А."
},{
    "quote": "<div class='pi_text'>С: Мы же приличные! <br/>П: Вы же издатели.<br/><br/>Шувалов С.С. <br/>Производственный практикум.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С.С."
},{
    "quote": "<div class='pi_text'>Недавно встретил своего выпускника. Он работает и занимается фрилансом. Я спросил его, сколько он зарабатывает, и он назвал сумму в два раза большую, чем мой оклад профессора, представляете? <br/><br/>Соловьёв Г. М. Основы журналистской деятельности <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Соловьёв Г. М."
},{
    "quote": "<div class='pi_text zoom_text'>Да все эти движения это первый шаг в ИГИЛ. *грозно указывая на студента* Вот ты хочешь в ИГИЛ?!? Нет, не хочешь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A6%D0%B0%D1%82%D1%83%D1%80%D1%8F%D0%BD'>#Цатурян</a> М.М. История английского языка <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Цатурян М.М."
},{
    "quote": "<div class='pi_text'>Есть свой этикет в том, что с себя снимать, а что не снимать. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B8%D0%BB%D1%8E%D0%BA'>#Милюк</a> Н. М. Русский язык и культура речи <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Милюк Н. М."
},{
    "quote": "<div class='pi_text'>* На паре по философии. Заходит проверяющий. *<br/><br/>Проверяющий: - Физиков сколько?<br/>С: - Физиков 11.<br/>Преподаватель: - А метафизиков?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text'>Человек должен думать в 3 слоя мысли: о будущем, о прошлом и о текущем моменте, если у вас не так, то с вами явно что-то не так.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%BF%D0%B0%D1%80%D0%B5%D0%B2'>#Лупарев</a> Е. Б. Административное право<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Лупарев Е. Б."
},{
    "quote": "<div class='pi_text'>*Про Наполеона и его жену Жозефину. Она обращается к Наполеону*<br/>- Боня, едрид мадрид, ну не иди ты на Россию!<br/><br/>Петров В.И. История России<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>П: Логос что такое?<br/>С: Стремление к истине, знанию.<br/>П: Это кто вам так сказал?<br/>С: Греки.<br/>П: Видимо...ооочень древние.<br/><br/>Спасов.С.В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text zoom_text'>А хотите я вам притчу расскажу? <br/><br/>Борисов С.А. Социология <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Борисов С.А."
},{
    "quote": "<div class='pi_text zoom_text'>...а он любил, как и все журналисты, это дело *щёлкает по горлу*.<br/><br/>Осташевский А.В. , правовые основы журналистики <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>*громко безастоновочно сигналят машины за окном на протяжении минуты *<br/><br/>П: Что это там: свадьба или истерика?<br/>С-ты: Истерика.<br/> *Пауза*<br/>П: Истерическая свадьба, все нормально .<br/><br/>Кузьменко А.Н. Методология проектирование <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Кузьменко А.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Хм... жалко, у меня нет с собой ириски Меллер. Дала бы вам хоть что-то, чем можно рот занять.<br/><br/>Шахбазян М.А.  <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шахбазян М.А."
},{
    "quote": "<div class='pi_text'>П: Вы же не выкладываете мои цитаты? <br/>С: Нет...<br/>П: Вот и правильно, оно вам надо? Нет! Оно вам не надо.<br/><br/>Даниелян А. С. Теория государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text zoom_text'>Не студенты, а дебилы с того света!<br/><br/>Тарасенко Т.П. Введение в языкознание <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Тарасенко Т.П."
},{
    "quote": "<div class='pi_text'>С какой стороны не посмотрю на себя - я весь такой хороший, я весь такой всеобщий. <br/><br/>Тащиан А.А. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Тащиан А.А."
},{
    "quote": "<div class='pi_text'>С: Можно уйти?<br/>П: Уйти?!<br/>С: Сантехник пришёл, а дома никого нет. <br/>П: Посейдон прорвался...<br/><br/>Чумаков С.Н. Античная литература <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>Гроза - не время для селфи.<br/><br/>Эртель Л.А. Специальная подготовка<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Эртель Л.А."
},{
    "quote": "<div class='pi_text'>П: Так, включаем мозги и думаем, думаем, думаем.<br/>С: Мне кажется, мы не можем ответить как раз из-за того, что слишком много думаем...<br/>П: Мне нравится ваша скромность!<br/><br/>Большова А.Ю. Введение в языкознание <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Большова А.Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Кто-нибудь читал монографии или статьи Сандула? Не читайте. Ради Бога.<br/><br/>Бурячковский Н.Д. Экономическая безопасность <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Бурячковский Н.Д."
},{
    "quote": "<div class='pi_text'>Вы не должны сильно переживать, что это значение (функции) нам неизвестно. Если нужно, мы его запросим из внешнего источника. А уж потом будем проверять, благонадёжный он, и не является ли двойным агентом.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К.И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>Вы же математики — вы должны быть умные.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D0%BA%D0%BB%D0%B0%D0%B3%D0%BE%D0%B2%D0%B0'>#Баклагова</a> Ю. В. Английский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Баклагова Ю. В."
},{
    "quote": "<div class='pi_text zoom_text'>Подлец!......*тихим голосом* мужики они все такие....<br/><br/>Нюхтилин П. В. Вебдизайн <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Нюхтилин П. В."
},{
    "quote": "<div class='pi_text'>Плохим детям — плохие преподаватели.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B5%D0%B1%D0%B5%D0%B4%D0%B5%D0%B2%D0%B0'>#Лебедева</a> А. П. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Лебедева А. П."
},{
    "quote": "<div class='pi_text'>*речь идет о слове фрустрация*<br/><br/>...ну надо же было придумать такое слово для простого состояния облома.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%BB%D0%BE%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Флоровский</a> С. Ю. Социальная психология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Флоровский С. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Вы абсолютно правы! Если бы у меня была с собой шоколадка, я бы кинул её в вас.<br/><br/>Богдашев И.В. 'Современные бизнес-технологии' <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Богдашев И.В."
},{
    "quote": "<div class='pi_text'>С: Они пахали буквально по 356 часов в сутки.<br/>П: Я понял, что у вас с математикой плохо, вы гуманитарий.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С.Н. История России <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шаповалов С.Н."
},{
    "quote": "<div class='pi_text'>С: А у меня с географией все плохо.<br/>П: Да? А вообще по жизни у вас как?<br/><br/>Щербаль С.С. 'Техника и технология электронных СМИ' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Щербаль С.С."
},{
    "quote": "<div class='pi_text'>* студент опоздал на зачёт и пытается придумать отговорку, почему его не было на прошлой паре *<br/> <br/>Мне кажется, вы мне лапшу на уши вешаете. Такую, знаете, удон в соевом соусе.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B8%D0%B2%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BE%D0%B2'>#Живодробов</a> В. В. Право<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Живодробов В. В."
},{
    "quote": "<div class='pi_text'>П: Мифология это...<br/>С: Вас не слышно.<br/>П: *говорит громче* АВТОМОБИЛЬ В СТУДИЮ!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D1%83%D0%BC%D0%B0%D0%BA%D0%BE%D0%B2'>#Чумаков</a> С.Н. История мировой и зарубежной литературы <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>* студент завывает на зачёте * <br/>— Кому там уже плохо?<br/><br/>Бочкова Е. В. Экономическая теория <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Бочкова Е. В."
},{
    "quote": "<div class='pi_text'>На этом моя лекция заканчивается, а вот пара нет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D0%BC%D0%B5%D1%86'>#Немец</a> Г. Н. Политический дискурс в СМИ <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Немец Г. Н."
},{
    "quote": "<div class='pi_text'>Мы лечим человека от желтухи, а он, получается, китаец! <br/><br/>Белоконь Т.М. Теоретическая и практическая педагогика <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Белоконь Т.М."
},{
    "quote": "<div class='pi_text'>До какого-то момента понятно, а потом — непонятно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>Студент архитектор не может интегрировать план помещения в обычных квадратиках или прямоугольную призму, ему не хочется. <br/>Он возьмёт, нарисует такую фигацию *рисует сложную форму на доске * и потом будет страдать. <br/><br/>Кузьменко А.Н. Методология проектирования  <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Кузьменко А.Н."
},{
    "quote": "<div class='pi_text'>Хотел сказать на будущее, если у вас будет время, а его у вас не будет, поэтому не буду говорить.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%85%D0%BE%D0%B2%D0%B8%D1%87'>#Бухович</a> Е. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Бухович Е. В."
},{
    "quote": "<div class='pi_text'>Буровики работают по полмесяца, месяц. А надо же домой съездить, детей увидеть. Посмотреть - не прибавилось там их...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B2%D0%B5%D1%80%D0%B4%D0%BE%D1%85%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2'>#Твердохлебов</a> И. И. Бурение скважин<br/><a data-link='/feed?section=search&amp;q=%23%D0%98%D0%93%D0%93%D0%A2%D0%A1_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ИГГТС_КубГУ</a></div>",
    "author": "Твердохлебов И. И."
},{
    "quote": "<div class='pi_text'>* об отношениях *<br/><br/>Мы с тобой внутренние накрест лежащие, но ты мне не коллинеарен.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я. В. Математика и статистика <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я. В."
},{
    "quote": "<div class='pi_text'>С: Данный принцип содержится в законе 15.39<br/>П: Что за закон 15.39? Называйте полностью, либо вообще не называйте. А то, знаете, и песня такая есть - 'имя 505'.<br/><br/>Даниелян А.С. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text'>Все, что нам остаётся делать, это молиться богу! <br/>Шучу. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text zoom_text'>Пишите список тех, кто присутствует в вашей группе, а присутствует вас 4 целых, ноль десятых.<br/><br/>Спасов С. В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>Как животные неразумны? Вы что животных не любите ? Любим, конечно. Мы шашлыки из них жарим. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>П: Метеоритная пыль - это мелкие частицы.<br/>С: А на сколько мелкие?<br/>П: Ну бывают и больше.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B0%D1%81%D0%B0%D1%82%D0%B8%D0%BA%D0%BE%D0%B2'>#Касатиков</a> А.А. Естественнонаучная картина мира. <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Касатиков А.А."
},{
    "quote": "<div class='pi_text'>В мире есть три типа лжи: ложь, наглая ложь и статистика.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Петровский</a> А. В. Правовая статистика<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Петровский А. В."
},{
    "quote": "<div class='pi_text'>Вы будете пытаться сдавать мне экзамен, я буду пытаться его принимать. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A6%D0%B0%D0%BB%D1%8E%D0%BA'>#Цалюк</a> М. В. Функциональный анализ <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Цалюк М. В."
},{
    "quote": "<div class='pi_text zoom_text'>Если быстро не можешь решать, пирожками торговать научу.<br/><br/>Черных Н.М. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Черных Н.М."
},{
    "quote": "<div class='pi_text'>Перекличка!<br/>Стало вдруг интересно, кто еще учится, а кто уже закончил университет, но все еще с нами? <img alt='👋🏻' class='emoji' src='/emoji/e/f09f918bf09f8fbb.png'/></div>",
    "author": "NULL"
},{
    "quote": "<div class='pi_text zoom_text'>Данные - это такие штучки... <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F'>#Добровольская</a> Н. Ю. Основы программирования <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Добровольская Н. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Да ты непокорная рабыня!<br/><br/>Ажгихин С.Г. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Ажгихин С.Г."
},{
    "quote": "<div class='pi_text'>То, что вам дали высшее образование — это не значит, что вы его получили.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D0%BB%D0%B8%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE'>#Пилипенко</a> С. Н. Иностранный язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Пилипенко С. Н."
},{
    "quote": "<div class='pi_text zoom_text'>А потом к власти пришел Павел Первый. Курносенький, страшненький, обидчивый ... псих.<br/><br/>Петров В.И. История Кубани <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>*опоздал на 1 секунду*<br/>- Вышел! Потом зайдешь.<br/><br/>Цалюк В.З. Технологии программирования <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Цалюк В.З."
},{
    "quote": "<div class='pi_text'>* студенты сетуют на чрезвычайно большое количество задания *<br/><br/>Чего вы опять ноете? Ваша специальность называется не 'международные отношения', а 'международное нытьё'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D1%80%D0%B0%D0%B5%D0%B2%D0%B0'>#Сараева</a> К. И. Основной иностранный язык <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Сараева К. И."
},{
    "quote": "<div class='pi_text'>Умные ребята иногда думают, что остальные тоже умные.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D1%81%D1%81%D0%B0%D1%80%D0%B0%D0%B1%D0%BE%D0%B2'>#Бессарабов</a> Н. В. Oracle<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Бессарабов Н. В."
},{
    "quote": "<div class='pi_text'>У Шекспира у всех разная речь: у Гамлета — одна, у Офелии — другая, у Лаэрта — третья, у Йорика — шучу — четвёртая!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Человек превращает себя в то, во что он верит.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А.А. Онтология и теория познания. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Тащиан А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Ты че так возбудился?<br/><br/>Авджян Г.Д. теория управления <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Авджян Г.Д."
},{
    "quote": "<div class='pi_text'>П: Какие ряды называются сходящимися?<br/>С: Когда есть конечный предел.<br/>П: Не понятно.<br/>С: Когда частные суммы имеют конечный предел.<br/>П: НАДО ПОЛНОСТЬЮ ГОВОРИТЬ ФРАЗУ! ТЫ ЗАВТРА ПРИДЕШЬ И НИ ОДНОГО СЛОВА СЛОЖИТЬ НЕ СМОЖЕШЬ! ПОВТОРИ ФРАЗУ ПОЛНОСТЬЮ! <br/>С: Ряд называется сходящимся, когда частичные суммы имеют конечный предел.<br/>П: ЕЩЁ РАЗ!<br/>С:  Ряд называется сходящимся, когда частичные суммы имеют конечный предел.<br/>П: ЕЩЁ! <br/>С: РЯД НАЗЫВАЕТСЯ СХОДЯЩИМСЯ, КОГДА ЧАСТИЧНЫЕ СУММЫ ИМЕЮТ КОНЕЧНЫЙ ПРЕДЕЛ!!!!!!!<br/>П: Зачем так настойчиво? Я и с первого раза понял. <br/>*улыбается*<br/><br/>Данилов Е.А. / Комплексный анализ <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФКТиПМ_КубГу</a> <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФПМ_КубГу</a></div>",
    "author": "Данилов Е.А."
},{
    "quote": "<div class='pi_text'>П: Сколько эквивалентных единиц получим по 3000 ед. готовой продукции?<br/>С: *тишина*<br/>П: Ну, процентовка какая по готовой продукции?<br/>С: 30%?<br/>П: Так... внимание, философский вопрос. На сколько процентов готова готовая продукция?!<br/>С: На сто!!!<br/>П: Бинго!<br/><br/>Алеников А.С. Контроллинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D0%BA'>#эконом_кубгк</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text'>Давайте представим, что вас обидели? И вы лежите ночью в постели и придумываете, как ответите этому человеку. В груди у вас пожар, зубы скрипят. Тем более, ещё и полнолуние... <br/><br/>Осташевский А.В. 'Правовые основы журналистики' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А.В."
},{
    "quote": "<div class='pi_text'>Так-так-так-так-так-так-так-так-так-так. Голубчики!<br/><br/>Кожевников В.В. Аналитическая геометрия<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кожевников В.В."
},{
    "quote": "<div class='pi_text'>С: - Это классификация? <br/>П: - Да, консультация.<br/><br/>Тангир К. М. Педагогическая риторика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Тангир К. М."
},{
    "quote": "<div class='pi_text'>Как считает РГФ?<br/>Один, два, много!<br/><br/>Спасов С. В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>В приметы верят те , кто смотрят дом-2 и  слушают Елену Ваенгу.<br/><br/>Жаворонков Д.В социология <br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жаворонков Д.В"
},{
    "quote": "<div class='pi_text'>*слышит гитару и пение за окном*<br/><br/>Кого-то пригрело, я так чувствую. А ещё говорят, что человек единственное существо не зависящее от природы.<br/><br/>Шувалов С.С. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С.С."
},{
    "quote": "<div class='pi_text'>*студентка поднимает руку, отпрашивается выйти*<br/>- Я Вас не слышу, но Вам всё можно!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2'>#Павлов</a> Ю.М. История русской литературы 19 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text'>Капитализм  вырос из коротких штанишек товарного производства. <br/><br/>Сидоров В.А. Общая экономическая теория<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Следите за эфиром.<br/><br/>Змихновский С. И. Логика. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D0%A3%D0%91%D0%93%D0%A3'>#ФИСМО_КУБГУ</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text'>П: Есть вопросы? <br/>*тишина* <br/>П: Если вопросов нет, то либо вы очень умные… либо вы оочень умные… и я хорошо объясняю. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D1%8B%D1%82%D0%B8%D0%BD%D0%B0'>#Сытина</a> А.В. Судебное красноречие <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Сытина А.В."
},{
    "quote": "<div class='pi_text'>Любая власть есть материя высокая, любая. А вы, какими бы вы не были, всегда материя низкая, ну, в принципе, как и я.<br/><br/>Мороз О.Н. 'История русской литературы 18 века'<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>*идет промежуточная аттестация*<br/>П: - Сколько пар в витой паре? <br/>С1: - Три. <br/>П: - Это просто ф...<br/>С2: - Фиаско?<br/>П: - Это просто финиш. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%95%D0%B3%D0%BE%D0%B7%D0%B0%D1%80%D0%BE%D0%B2'>#Егозаров</a> Э.С. Инфокоммуникационные системы и сети <a data-link='/feed?section=search&amp;q=%23%D0%98%D0%9D%D0%A1%D0%9F%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ИНСПО_кубгу</a></div>",
    "author": "Егозаров Э.С."
},{
    "quote": "<div class='pi_text'>Девочки-красавицы, накрашенные глазки, как зачёт сдавать будем?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B5%D0%B4%D0%BA%D0%BE%D0%B2'>#Дедков</a> В. Н. Экономика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Дедков В. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Даже банальность на английском языке звучит привлекательно для преподавателя иностранного языка.<br/><br/>Жук Е.Е. Иностранный язык <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Жук Е.Е."
},{
    "quote": "<div class='pi_text zoom_text'>Услышал птичку - стало прикольно, съел котлету - сразу полегчало. <br/><br/>Мороз О. Н. История зарубежной литературы 17-18 в. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Женщины на фуфло не ведутся! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B8%D0%BA%D0%BC%D0%B0%D1%88%D0%B5%D0%B2'>#Бикмашев</a> Г. А. История экономических учений <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Бикмашев Г. А."
},{
    "quote": "<div class='pi_text zoom_text'>А чё вы тупите?<br/><br/>Лебедева Л.А. Языкознание <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#РГФ_КубГу</a></div>",
    "author": "Лебедева Л.А."
},{
    "quote": "<div class='pi_text'>* от сильного ветра с грохотом открылись окна * <br/>— Ящик Пандоры открыт!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D1%84%D0%B0%D0%BD%D0%B0%D1%81%D1%8C%D0%B5%D0%B2%D0%B0'>#Афанасьева</a> Т. Н. Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Афанасьева Т. Н."
},{
    "quote": "<div class='pi_text zoom_text'>- Лучше перебдеть, чем недобдеть.<br/><br/>Савельева О. Г. Английский язык. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Савельева О. Г."
},{
    "quote": "<div class='pi_text zoom_text'>Иосиф Виссарионович Сталин три раза бежал с каторги. С его каторги не бежал уже никто.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE'>#Пономаренко</a> И. Н. Лексикология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Пономаренко И. Н."
},{
    "quote": "<div class='pi_text'>- ....связано с именем Архилоха с острова Палос.<br/>- С какого острова? <br/>- Палос, созвучно с более знакомым вам словом ... ;) <br/>Мороз О.Н. История античной литературы <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Постмодерн - интересное направление. Я до сих пор его не понимаю.<br/><br/>Чумаков С.Н. Зарубежная литература. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>П: Почему ваше поколение не любит работу?<br/>С: От работы кони дохнут!<br/>П: Правильно, это одно из определений...<br/><br/>Щеколдин Г.А. Доп. главы по физике <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>Степи, степи, степи на шее и поцелуи.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B8%D1%82%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F'>#Литвинская</a> С.А. История Естествознания <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Литвинская С.А."
},{
    "quote": "<div class='pi_text zoom_text'>Вот, лежит покойник. Он обладает энергией нулевых колебаний. Тут и до воскрешения рукой подать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%B9%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Бойченко</a> А. П. Ядерная физика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Бойченко А. П."
},{
    "quote": "<div class='pi_text'>Эх, возвести бы свою зарплату в степень, большую единицы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Не думайте - решайте.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text zoom_text'>П.: Я вижу его лицо (говорит про студента), как он хочет ответить. А где он кстати?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D1%8F%D0%BD'>#Даниелян</a> А. С. Римское право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text zoom_text'>У любого уважающего себя ряда сумму посчитать невозможно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н.</div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Вон, смотрите, там парочка сидит. Один без души, рыжий. А другая его бьёт. <br/><br/>Шувалов С.С. Прикладные дисциплины. Фотодело <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С.С."
},{
    "quote": "<div class='pi_text zoom_text'>Вы же компьютерщики! А!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B8%D1%82%D0%BE%D0%B2'>#Титов</a> Г. Н. Фундаментальная и компьютерная алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Титов Г. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Всё, что я говорю - во всем виноват язык. Я здесь ни при чём.<br/><br/>Мороз О.Н. 'Русская литература 18 века'  <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>С: Сергей Сергеевич, ну может вы скажете, у кого ещё самоэкзамены, чтобы и они с хорошим настроением пришли к вам на экзамен?<br/>П: Ко мне на экзамен с хорошим настроением могу прийти только я.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С.С. Теория и практика информационных войн <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С.С."
},{
    "quote": "<div class='pi_text zoom_text'>А если на столе можно спать? Тогда это не стол,а какая то кровать мифическая!<br/><br/>Спасов С. В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>69 счет (расчет с внебюджетными фондами) очень легко запомнить, т.к. именно эти фонды держат в этой позе малый бизнес в России.<br/><br/>Алеников А.С. Контроллинг<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text'>Вы говорите правильно, но вы не правы. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D1%8F%D0%BD'>#Закарян</a> М. Р. Методология организационного проектирования системы управления организации <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Закарян М. Р."
},{
    "quote": "<div class='pi_text'>Издатели не умирают. У них всегда есть переиздание.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Электронные средства информации<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text'>Мем — следующая ступень развития сознания после понятия.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text'>Посмотри в её глаза! Что в них написано? Хочу!!! Хочу в театр!<br/><br/>Авджян Г.Д. Теория управления.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Авджян Г.Д."
},{
    "quote": "<div class='pi_text zoom_text'>Алло, дорогая, обрати на меня внимание!<br/><br/>Мороз О.Н. История русской литературы 18 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>В чистом виде ничего не существует, даже чистого вида. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B7%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B8%D1%87'>#Сазантович</a> П.А. Политология<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Сазантович П.А."
},{
    "quote": "<div class='pi_text'>* на паре по аналитической геометрии *<br/><br/>П: - Что должно быть у всех преподавателей?<br/>С: - Мел? Маркер? Учебник?<br/>П: - Нет. Должен быть нож!<br/>С: - Почему?<br/>П: - Ну представьте, сидите вы, проверяете тетради и тут студент влетает со стулом в руках, а вы бац, нож достали и все проблемы решены.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8E%D0%B1%D0%B8%D0%BD'>#Любин</a> В. А. Аналитическая геометрия.<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>Готовимся к армии! Совершаем маневры! Последние ряды,быстро на первую парту!<br/><br/>Феоктистов М.В. Эконом. и служебные преступления <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Феоктистов М.В."
},{
    "quote": "<div class='pi_text zoom_text'>Вместо футболистов - мячи, вместо мячей - футболисты, вместо ворот - мясорубка.<br/><br/>Рожков А.В. Фундаментальная и компьютерная алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Рожков А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Как известно, у кого что болит, тот о том и говорит... Ну кроме меня разумеется. Не приписывайте мне весь учебник анатомии. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D0%B0%D1%87%D0%B8%D1%8F%D0%BD%D1%86'>#Хачиянц</a> А.И. Возрастная анатомия и физиология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Хачиянц А.И."
},{
    "quote": "<div class='pi_text'>- Ну, как у греков — хотите быть красивым, сильным и здоровым — бегайте. Не ходите, а бегайте. Знаете почему? Потому что при беге происходит вибрация и организм перестраивается. Не знали?<br/>- Нет.<br/>- Это я выдумал.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Экспертные системы<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Нет.<br/>- Это я выдумал.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И."
},{
    "quote": "<div class='pi_text'>И включены мы в садо-мазохистские отношения. Либо ты трах-тибидох делаешь, либо тебе.<br/><br/>Флоровский С.Ю. Социальная психология <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%B8%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСиМО_кубгу</a></div>",
    "author": "Флоровский С.Ю."
},{
    "quote": "<div class='pi_text'>* Преподаватель рассказывает о древнегреческой мифологии: в частности — мифы о Нарциссе и Гиацинте. *<br/><br/>Были людьми, а стали подарком на восьмое марта.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А. В. История религии и зарубежная словесность<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>*тема занятия - сила трения*<br/><br/>Тебя привязали к жигулям, и посадили задницей на асфальт. Когда жигули поедут, ты будешь испытывать дискомфорт? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>* Читает подборку анекдотов про философию. *<br/><br/>Вы запоминаете то, что я говорю? Я это на экзамене буду спрашивать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В. Философия Нового времени<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text'>В руках мастера и маркер зазвучит как скрипка.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D0%BC%D0%B5%D1%86'>#Немец</a> Г. Н. Русский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Немец Г. Н."
},{
    "quote": "<div class='pi_text'>С: - Можно войти?<br/>П: - Никого нет дома. Все свои на месте. До свидания.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%98%D0%B2%D0%B0%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE'>#Иваненко</a> А. М. Ботаника<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Иваненко А. М."
},{
    "quote": "<div class='pi_text'>Парни, цените в девушках сиюминутность, а девушки в парнях перспективность.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%BF%D0%B0%D1%80%D0%B5%D0%B2'>#Лупарев</a> Е.Б. Административное право <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_Кубгу</a></div>",
    "author": "Лупарев Е.Б."
},{
    "quote": "<div class='pi_text zoom_text'>Я никогда не повторяю... Никогда не повторяю.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%82%D1%8E%D1%89%D0%B5%D0%BD%D0%BA%D0%BE'>#Матющенко</a> П. П. История <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Матющенко П. П."
},{
    "quote": "<div class='pi_text'>*оглядывается на аудиторию* <br/>— Такое ощущение, будто вы сюда пописАть просто пришли!<br/><br/>Тен О. К. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>Мороз О.Н. 'История зарубежной литературы 17-18 вв. '<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%93%D0%A3'>#журфак_кубГУ</a> <br/> <br/>Без цитаты; просто любовь <img alt='💖' class='emoji' src='/emoji/e/f09f9296.png'/></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>- Windows - это операционная система для ленивых и бестолковых!<br/><br/>Рожков А. В. Фундаментальная и компьютерная алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Рожков А. В."
},{
    "quote": "<div class='pi_text'>П: Сколько там до конца пары?<br/>С: Еще 10 минут.<br/>П: *очень тихо начинает бубнить* Десять минут...десять минут... Что еще сказать на эти десять минут...<br/><br/>Мороз О.Н. Литература 18 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Знаете, это я тут специалист по тупым шуткам. Но, кажется, вы и меня переплюнули. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. История русской литературы 18 века<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>-Вот кто-то говорил, что Кандид видел в Кунигунде прекрасную даму... Говорил кто-то?<br/>- Нет. <br/>- Значит в голове у меня кто-то говорил.<br/><br/>Чебанная Е. И. История мировой ( зарубежной) литературы.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#РГФ_КубГу</a></div>",
    "author": "Чебанная Е. И."
},{
    "quote": "<div class='pi_text'>Я есть я через определённость не я, если оно есть для себя.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Философия <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>Если вы хотите жить долго, как я, то должны : <br/>1) Ходить 10 км пешком ежедневно<br/>2) Делать зарядку <br/>3) Посещать баню<br/>И... Вам уже есть 18? ... Но только по любви!!!<br/><br/>Сопкин П.Т. 'Основы теории журналистики', <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Сопкин П.Т."
},{
    "quote": "<div class='pi_text'>*с воодушевлением*<br/>Бизнес является самым главным ё к л м н поставщиком налогов!<br/><br/>Богдашев И.В. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Богдашев И.В."
},{
    "quote": "<div class='pi_text'>*О выборе кафедры*<br/>В молодости у меня стоял выбор между кафедрой гидродинамики и кафедрой теории упругости. И я пошёл на вторую. Там был преподаватель, который так тихо говорил, что это нас убаюкивало. И я ушёл с той кафедры. И ни разу в жизни не пожалел.<br/><br/>Лазарев В.А. Экстремальные задачи теории функций <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Лазарев В.А."
},{
    "quote": "<div class='pi_text'>* Отвечает на СМС. *<br/><br/>Простите, что эта повседневность вторгается в нашу возвышенность.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BE%D1%82%D0%BE%D0%B2%D0%B0'>#Зотова</a> И. В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Зотова И. В."
},{
    "quote": "<div class='pi_text'>- Нам нужен свет! <br/>*включается свет*<br/>- Нам нужен свежий взгляд на Белинского!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2'>#Павлов</a> Ю.М. История русской литературы 19 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text zoom_text'>...мы брали людей. Таджиков мы не брали.<br/><br/>Щеколдин Г.А. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>Без формул жить на свете можно, если в мозгу много извилин.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Электричество<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text zoom_text'>Я из вас людей сделаю. <br/><br/>Сергеева О.В. Английский <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D1%82_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВт_кубгу</a></div>",
    "author": "Сергеева О.В."
},{
    "quote": "<div class='pi_text'>У меня кота Цезарь зовут, но как его ни назови, он все равно умрёт.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text zoom_text'>Ну что, баскетбольные полуфабрикаты, вижу, вы расслабились.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D0%B7%D0%B0%D1%80%D1%8F%D0%BD%D1%86'>#Газарянц</a> В. С. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Газарянц В. С."
},{
    "quote": "<div class='pi_text'>* Студент отвечает сильные глаголы. *<br/><br/>С: - Riechen raa... (вместо roch)<br/>П: - Ra — это что? Бог солнца?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BA%D0%BE%D0%B2'>#Сидорков</a> С. В. Практический курс немецкого языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Сидорков С. В."
},{
    "quote": "<div class='pi_text zoom_text'>Выключите звук, включите вибратор, засуньте в карман и радуйтесь. <br/><br/>Арутюнов Э.К. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Арутюнов Э.К."
},{
    "quote": "<div class='pi_text'>Человек может читать для чего угодно. Например, чтобы научится чему-нибудь. Это мы с вами высоколобые эстетические педанты. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A7%D0%B5%D0%B1%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F'>#Чебанная</a> Е.И.<br/>Зарубежная литература в школе<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Чебанная Е.И."
},{
    "quote": "<div class='pi_text'>— Предательство: как это так сдать друга, когда недавно сидели обнимались, целовались...<br/> <br/>Змихновский С. И. Философия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text zoom_text'>Я что, похож на чокнутого математика?!<br/><br/>Любин В.А. Геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В.А."
},{
    "quote": "<div class='pi_text'>На пумпочку нажали — дримпочка дрюкнула.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Механика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>Если вы хотите знать физику, то это как жить с красивой женщиной. Вы должны каждый день с ней спорить.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>*речь об инфраструктуре города*<br/><br/>Стоят такие маленькие дома, как молочные зубки, и тут такой 24-этажный протез торчит.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%BE%D0%B6%D0%BA%D0%BE%D0%B2'>#Рожков</a> А. Ю. Социология города <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Рожков А. Ю."
},{
    "quote": "<div class='pi_text'>С: А когда можно сдать отчет по учебной практике? <br/>*преподаватель отходит в сторону, достает носовой платок и взмахивает им*<br/>П: С этого момента.<br/><br/>Гаркуша О. В.  Практика по программированию <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Гаркуша О. В."
},{
    "quote": "<div class='pi_text'>*мел упал на пол*<br/>П: Осень. Мел опадает.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0'>#Гаркуша</a> О.В. Программирование на ассемблере <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФКТиПМ_КубГу</a></div>",
    "author": "Гаркуша О.В."
},{
    "quote": "<div class='pi_text'>П: Что делал Коперник?<br/>С: Крутил.<br/>П: Да ничего он не крутил, это его потом крутили!<br/><br/>Спасов.С.В. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Зачем рисуешь сиськи, похабник?<br/><br/>Тлюстен С.Р. теория вероятностей <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С.Р."
},{
    "quote": "<div class='pi_text zoom_text'>Географы не знают историю. Историки не знают географию. Философы не знают ни того, ни другого.<br/><br/>Спасов С. В. Античная философия <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>С умного холодильника можно выходить в интернет. Современное время таково, что вместо йогурта ты из холодильника достаёшь информацию.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B5%D0%BC%D0%B5%D1%80%D0%B4%D0%B6%D0%B8%D0%B4%D0%B8'>#Семерджиди</a> В. Н. Иностранный язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Семерджиди В. Н."
},{
    "quote": "<div class='pi_text'>* Студент берет карандаш, чтобы показать рельеф на карте. *<br/><br/>Рассказываем в масках, показываем карандашом... Ну и как любить географию при таком уровне контрацепции?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B8%D1%80%D0%BC%D0%B0'>#Жирма</a> В. В. Физическая география России <br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Жирма В. В."
},{
    "quote": "<div class='pi_text'>В 1882г. к союзу Германии и Австро-Венгрии присоединилась Италия, сложился Тройственный союз.<br/>В 1894г. Россия и Франция создали Антанту.<br/>А Англия ещё 10 лет между ними металась, не знала кого выбрать. Англия-политическая проститутка!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История России<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Антанту.<br/>А Англия ещё 10 лет между ними металась, не знала кого выбрать. Англия-политическая проститутка!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И."
},{
    "quote": "<div class='pi_text'>Знаете, в чем минус дереватизации? Определяете вы, предположим, морфин с дереватизацией уксусным ангидридом. И получаете на выходе героин в виде деревата.<br/><br/>С точки зрения, на сколько человек сядет - плюс-минус одно и то же. А вот с точки зрения вашей корректности как специалиста - немного не то.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BC%D0%B5%D1%80%D0%B4%D0%B0%D1%88%D0%B5%D0%B2'>#Темердашев</a> А.З. Современные методы хроматографии<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФХиВТ_КубГУ</a></div>",
    "author": "Темердашев А.З."
},{
    "quote": "<div class='pi_text zoom_text'>Три буквы на заборе вы быстро запоминаете, а три буквы из формулы суммы геометрической прогрессии запомнить не можете!<br/><br/>Черных Н. М. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Черных Н. М."
},{
    "quote": "<div class='pi_text zoom_text'>Самый незаметный способ уйти с пары - это уйти в себя.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B0'>#Павлова</a> А.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Павлова А.В."
},{
    "quote": "<div class='pi_text'>С: Можно сделать вывод...<br/>П: Не надо делать выводов!<br/><br/>Мороз О. Н. История литературы 18 века<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>П: Все понимают о чем я говорю, или моя речь не ясна?<br/>С: Да<br/>П: *обращается к студентам на задних партах* До Камчатки доходит?!<br/><br/>Гукасова Э. М. Языки мира и языковые ареалы. Типология языков. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Гукасова Э. М."
},{
    "quote": "<div class='pi_text zoom_text'>45 лет я работаю в ВУЗе... Столько не живут уже. <br/><br/>Белоконь Т. М. Теоретическая и практическая педагогика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Белоконь Т. М."
},{
    "quote": "<div class='pi_text'>Вы лингвисты или где?<br/><br/>Спасов С. В.<br/>Философия. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text zoom_text'>В недоученного физика вложено больше, чем в обученного гуманитария. Поэтому физиков лучше сохранять.<br/><br/>Щеколдин Г.А. Механика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>*студент с ошибкой  прочитал слово Kuban*<br/>Господи, да определитесь Вы уже наконец, Вы на Кубани живете или на Кубе? А то наши студенты часто удивляются, узнавая, что живут не на Кубе. <br/><br/>Элмасян А.В. Практика основного иностранного языка <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Элмасян А.В."
},{
    "quote": "<div class='pi_text'>Если бросить вещь, то она знает куда лететь, но она не знает о том, что она это знает. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D1%8F%D0%BD'>#Закарян</a> М. Р. Методология организационного проектирования системы организации <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Закарян М. Р."
},{
    "quote": "<div class='pi_text zoom_text'>Немного вольно выразился, но зато понятно.<br/><br/>Факторович А.Л. Логика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Факторович А.Л."
},{
    "quote": "<div class='pi_text'><img alt='🔥' class='emoji' src='/emoji/e/f09f94a5.png'/>￼Привет, Студент!￼ <img alt='🔥' class='emoji' src='/emoji/e/f09f94a5.png'/> <br/>Мы точно знаем, что тебе не хватает потрясающих вечеринок этой скучной и холодной осенью! ￼ <img alt='😉' class='emoji' src='/emoji/e/f09f9889.png'/> <br/>Именно поэтому в последний день осени мы будем зажигать со студентами ПЯТИ ВУЗов, а так же разыграем с ними потрясные призы на сумму более 70000 рублей!￼<img alt='❤' class='emoji' src='/emoji/e/e29da4.png'/> Итак, КубГУ, КубГАУ, РГУП, РЭУ, КубГМУ - будем ждать Вас в лучшем заведении Краснодара - LA VILLA, 30 ноября, в 22:00!<img alt='🍂' class='emoji' src='/emoji/e/f09f8d82.png'/>￼На каждый ВУЗ выделяется 100 билетов ￼ Самые весёлые и смелые студенты будут этой ночью отжигать на закрытой вечеринке-SPACE PARTY! ￼ <img alt='😍' class='emoji' src='/emoji/e/f09f988d.png'/> <br/>Фотоотчет от портала <a data-link='/away.php?to=http%3A%2F%2Fvklybe.tv&amp;post=-114875319_6064' rel='noopener nofollow' target='_blank'>vklybe.tv</a> <img alt='📸' class='emoji' src='/emoji/e/f09f93b8.png'/><br/> <br/>Напоминаем: <br/>￼<img alt='🎉' class='emoji' src='/emoji/e/f09f8e89.png'/>30 ноября (четверг) <br/>￼<img alt='🥂' class='emoji' src='/emoji/e/f09fa582.png'/>начало в 22:00 <br/>￼<img alt='💃🏻' class='emoji' src='/emoji/e/f09f9283f09f8fbb.png'/>бар-ресторан LA VILLA (ул. Рашпилевская 106, А) <br/>￼<img alt='🎸' class='emoji' src='/emoji/e/f09f8eb8.png'/>Музыка: <br/>DJ VAGE <img alt='🎧' class='emoji' src='/emoji/e/f09f8ea7.png'/><br/>DJ MUTTI <img alt='🎤' class='emoji' src='/emoji/e/f09f8ea4.png'/><br/>DJ MANILOVE <img alt='🥁' class='emoji' src='/emoji/e/f09fa581.png'/><br/>По вопросам раскачки танцпола отвечает <a class='mem_link' data-link='/zarubined' mention='' mention_id='id5722590'>ZARUBIN_SHOW</a>!￼<img alt='🎙' class='emoji' src='/emoji/e/f09f8e99.png'/><br/>￼DRESS CODE: CASUAL ( кэжуал) <img alt='👔' class='emoji' src='/emoji/e/f09f9194.png'/><img alt='👗' class='emoji' src='/emoji/e/f09f9197.png'/><br/>￼Цена пригласительного: 300₽ <img alt='🍸' class='emoji' src='/emoji/e/f09f8db8.png'/><br/>￼Бронь столов: +7(988)6666551 <br/>￼Пригласительные можно приобрести (Вход строго по пригласительным￼): +7(988)6666551 <img alt='☎' class='emoji' src='/emoji/e/e2988e.png'/><br/>Наши партнеры: <br/><a class='mem_link' data-link='/lyubimyy_gorod' mention='' mention_id='club108382177'>Строительная компания 'Любимый город'</a> <br/><a class='mem_link' data-link='/crossfithook' mention='' mention_id='club118944494'>CROSSFIT_HOOK GYM</a> <br/><a class='mem_link' data-link='/smthgin' mention='' mention_id='club85385690'>Барбершоп Mr.Right. Стрижки и бритье</a> <br/>Sestra Art-Showroom (<a data-link='/away.php?to=https%3A%2F%2Fwww.instagram.com%2Fsestra_showroom%2F&amp;post=-114875319_6064' rel='noopener nofollow' target='_blank'>https://www.instagram.com/sestra_showroom/</a>) <br/>Стоматология МАЭСТРО ( <a data-link='/away.php?to=http%3A%2F%2Fmaestrodent23.ru%2F&amp;post=-114875319_6064' rel='noopener nofollow' target='_blank'>http://maestrodent23.ru/</a> ) <br/>Не сомневайся в том, что это будет самая крутая вечеринка 2017 года!<img alt='💣' class='emoji' src='/emoji/e/f09f92a3.png'/></div>",
    "author": "Стоматология МА"
},{
    "quote": "<div class='pi_text'>*разговор о работе Пенелопы*<br/>П: Психология мужчин и женщин разная. Если вы вяжете носки, а ваш мужчина будет постоянно спрашивать о том, сколько сантиметров вы связали, то это верный знак того, что его надо отправить к психоаналитику!<br/><br/>Чумаков С. Н. Античная литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Чумаков С. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Без труда не выловишь рыбку даже из Чёрного моря!<br/><br/>Чалый В. В. Культура речи. <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text'>Вот спросят вас: 'Кто построил Парфенон?', назовёте имена этих скульпторов и прослывёте умным человеком. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%B5%D0%B4%D1%8C%D0%BA%D0%BE'>#Редько</a> Г. В. Страноведение <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Редько Г. В."
},{
    "quote": "<div class='pi_text'>П: Кто помнит, когда был Юрьев день? (день, когда крепостным разрешалось переходить от одного помещика к другому)<br/>С: Двадцать шестого ноября. <br/>П: А сегодня какое?<br/>С: Двадцать второе.<br/>П: Ну вот. Скоро можно будет переходить.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Ждановский</a> А. М. История государственного управления<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Ждановский А. М."
},{
    "quote": "<div class='pi_text'>Лучше поздно, чем не туда. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text'>*студент подходит сдать на проверку задачу*<br/><br/>П: Зачем мне проверять то, в чём нет смысла?<br/><br/>*П. уходит проверять у другого*<br/><br/>Костенко К.И. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text zoom_text'>Сейчас я закончу говорить не о чем...<br/><br/>Костенко К.И. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text zoom_text'>Интернет - это помойная яма, хранилище.<br/><br/>Кулишов В.В. Теория обучение и воспитания. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФППК_КубГу</a></div>",
    "author": "Кулишов В.В."
},{
    "quote": "<div class='pi_text'>* преподаватель начинает отмечать присутствующих *<br/><br/>П: С какой группы начнём? <br/>С: С четвёртой.<br/>П: Поскольку я всегда ценю ваше мнение, начнём с пятой.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С. Н. История Кубани <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шаповалов С. Н."
},{
    "quote": "<div class='pi_text'>Вы только представьте себе, девушки...По телевидению услышала совсем недавно новое слово...Труселя...Простите...или треники...Вы можете представить себе Наташу Ростову в трениках?...<br/><br/>Письменная Н.Я. Латинский язык, <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Письменная Н.Я."
},{
    "quote": "<div class='pi_text zoom_text'>Школа — это филиал ада на земле.<br/><br/>Сараева К. И. Латинский язык <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Сараева К. И."
},{
    "quote": "<div class='pi_text'>* Обращает внимание на студентку * <br/>— Мне кажется из неё выйдет что-то хорошее... Хорошая мать, например.<br/><br/>Сидоров В. А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>* речь идет о Елене Троянской(Прекрасной)*<br/><br/>П: Он же не сразу в неё влюбился. Это был процесс 'влюбления'. А до этого...она была для него, как бревно.<br/>*смех*<br/><br/>Спасов С. В. Античная философия. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>* Распределяем плюсы и минусы в транспортной задаче. *<br/><br/>П: - Вам, вообще, все понятно?<br/>С: - Ну плюс-минус.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F'>#Силинская</a> С. М. Дискретное программирование<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Силинская С. М."
},{
    "quote": "<div class='pi_text'>П: Даже ручка перестаёт писать при виде вас. <br/>С: Все так плохо? <br/>П: Я такого не говорил. Это она от восхищения. <br/>С: Все настолько хорошо? <br/>П: Восхищаться можно не только хорошим.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С.В. Античная философия <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>П: Векторы равны?<br/>С: Ну.<br/>П: Сонаправлены?<br/>С: Ну.<br/>П: Чего ты постоянно нукаешь? Ты что, нудак?<br/><br/>Любин В.А. Геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Следующим редактором стал Лев Прага... как город, как тортик. <br/><br/>Кидакоева З.Ш., 'Региональное информационное пространство региона', <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Кидакоева З.Ш."
},{
    "quote": "<div class='pi_text'>П: Поднимите, руку, кто из вас хочет кататься на большой белой машине, на номерах которой одинаковые цифры и буквы?<br/>*несколько студентов поднимают руку*<br/>П: Отлично, вон там, на хоз.дворе, стоят две разваленные газели, которые, наверняка, скоро спишут и поставят на аукцион.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B7%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B8%D1%87'>#Сазантович</a> А.Б. Политология <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Сазантович А.Б."
},{
    "quote": "<div class='pi_text zoom_text'>— Вот у сигар похожая форма, никто не курит сигары?<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Курица - не птица, первокурсник - не студент!<br/><br/>Даниелян А.С. Теория государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text zoom_text'>Итак, вернёмся к нашим баранам! <br/><br/>Волынкин В. А. Неорганическая химия. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D1%82_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВт_кубгу</a></div>",
    "author": "Волынкин В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Видел такое кино однажды.. Это как игра престолов, но только без престолов.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%BA%D1%81%D0%B8%D0%BD'>#Куксин</a> А.В. Право <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Куксин А.В."
},{
    "quote": "<div class='pi_text'>Математика тем и хороша, что в ней есть истинное знание.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D1%81%D1%81%D0%B0%D1%80%D0%B0%D0%B1%D0%BE%D0%B2'>#Бессарабов</a> Н. В. БД и СУБД<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Бессарабов Н. В."
},{
    "quote": "<div class='pi_text'>Джентльменское соглашение - соглашение реальных пацанов. <br/><br/>Малиновский О.Н. Международное право <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Малиновский О.Н."
},{
    "quote": "<div class='pi_text'>*в презентации*<br/>П: Соединяя таблицы про человека и морковь можете <br/>вычислить средний вес человекоморковки. Остаётся мелочь – <br/>додумать, что бы это значило и зачем вам это нужно.<br/><br/>Бессарабов Н.В. Базы данных и СУБД <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Бессарабов Н.В."
},{
    "quote": "<div class='pi_text zoom_text'>Ну пересядь, че вы тут теснитесь?! А то мешать друг другу будете; чуть гадость не сказал...<br/><br/>Зацепин М. И. 'Инженерная и компьютерная графика' <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Зацепин М. И."
},{
    "quote": "<div class='pi_text'>Уважаемые мои студенты, вы должны работать над философией 7 дней и 7 ночей. Разбирать вопросы в читальном зале. Проводить аналитическую работу *стук ладошкой по темечку*,чтобы давать точные полные ответы на четко поставленные вопросы. Вот, дан вопрос, вы должны расписать все по пунктам: 'Во-первых, во-вторых, в двадцать пятых, в двести пятьдесят седьмых...' <br/><br/>Тилинина Т.В. Философия <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Тилинина Т.В."
},{
    "quote": "<div class='pi_text'>— Попи́сошник. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D0%B7%D1%8C%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE'>#Кузьменко</a> А. Н. Архитектурное проектирование.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Кузьменко А. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Вы-экономисты. Я учу вас грабить народ.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. И. История России <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В. И."
},{
    "quote": "<div class='pi_text zoom_text'>- Гусь тоже думал.<br/><br/>Давыдюк Н.А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Давыдюк Н.А."
},{
    "quote": "<div class='pi_text zoom_text'>Цыц, козявки. <br/><br/>Штурба В. А. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Штурба В. А."
},{
    "quote": "<div class='pi_text'>П: Сколько вам дать минут на самостоятельную работу? 30 хватит?<br/>С: Можно побольше? 4 пара, мы как бы устали...<br/>П: Хорошо! 35 минут.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%B9%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Бойченко</a> А.П. Ядерная физика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Бойченко А.П."
},{
    "quote": "<div class='pi_text'>*о студентке, которая постоянно прогуливает* <br/>Она думает, что она в Голливуде и ей все можно!<br/><br/>Волошин Ю.К. Практический курс основного иностранного языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Волошин Ю.К."
},{
    "quote": "<div class='pi_text'>C: А это можно будет потом обрезать? (о формате изображения)<br/>П: Обрезать? У нас что, еврейский праздник?<br/><br/>Акопьян В. С. Рисунок, живопись<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Акопьян В. С."
},{
    "quote": "<div class='pi_text zoom_text'>У нас-то ВУЗ педагогический, вы знали об этом? Да, мы - педики!<br/><br/>Бондаренко Н.А.  Структурная геология и геокартирование <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Бондаренко Н.А."
},{
    "quote": "<div class='pi_text'>Мы сейчас записали материал. Он вам непонятен.<br/><br/>Кособуцкая Е.В. Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Кособуцкая Е.В."
},{
    "quote": "<div class='pi_text zoom_text'>В биологии нет правил без исключений. А иногда исключений больше, чем правил.<br/><br/>Кустов С. Ю. Зоология. <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Кустов С. Ю."
},{
    "quote": "<div class='pi_text'>С: А вы бакалавриат заканчивали?<br/>П: Нет, я же нормальный человек.<br/><br/>Даниелян А.С Теория государства и права <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С"
},{
    "quote": "<div class='pi_text zoom_text'>Я замолчал, потому что не знаю, что дальше сказать. <br/><br/>Соловьёв Г. М. Основы журналистской деятельности <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Соловьёв Г. М."
},{
    "quote": "<div class='pi_text'>П: Вот представьте, что вы программисты, что бы вы вернули? *имеет в виду значение в строке*<br/>С: 2007-ой<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD'>#Волошин</a> М.А. 'Алгоритмизация и программирование' <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Волошин М.А."
},{
    "quote": "<div class='pi_text'>*студенту, давшему неправильный ответ*<br/>Я переживу, а вот этим ушкам еще краснеть целую пару.<br/><br/>Кутер М.И. Бухгалтерский учет <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>Статьёй докажи! <br/><br/>Волгина А.П. <br/>История государства и права России <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Волгина А.П."
},{
    "quote": "<div class='pi_text zoom_text'>Девки, не прыгайте на козлов! Берите заек. <br/><br/>Закарян М.Р. 'Введение в теорию систем' <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Закарян М.Р."
},{
    "quote": "<div class='pi_text'>Если все будут выть и рычать, мне сюда в каске и бронежилете приходить? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D0%BB%D0%B8%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE'>#Пилипенко</a> С. Н. Английский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Пилипенко С. Н."
},{
    "quote": "<div class='pi_text'>Тридцатилетняя женщина не флиртует, а фильтрует. <br/><br/>Ермоленко В.В. Основы теории управления<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Ермоленко В.В."
},{
    "quote": "<div class='pi_text'>П: Мы, преподаватели, любим ставить опыты над студентами.<br/>С: Надеюсь, социальные?<br/>П: Надейтесь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Печатные средства информации<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Надейтесь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С."
},{
    "quote": "<div class='pi_text zoom_text'>Начал поэтическую рубрику Бродский, потом Ахмадулина, потом Асадов, а теперь Гафт. Знакомьтесь - 'великий русский' поэт Гафт!<br/><br/>Павлов Ю.М. Проблематика СМИ. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text'>Никаких вам самокатов. Плачь. Читай. Молись. Три основополагающих каждой сессии. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Теория и методика творческой деятельности<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text'>Нужно так доказать, чтоб даже марсианин бы сказал: 'Ты молодец, землянин'.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8B%D1%85%D0%B8%D0%BD'>#Малыхин</a> К. В. Функциональный анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Малыхин К. В."
},{
    "quote": "<div class='pi_text'>*зачет по праву*<br/>Преподаватель: Что за статью вы подготовили?<br/>Студент: Препятствование профессиональной деятельности журналиста.<br/>П: У Вас эта статья?<br/>С: Да.<br/>К: Вы серьезно вообще? Вы понимаете, что эта статья не работает в нашей стране? <br/>С: Ну, она же есть...<br/>П: Надо понимать, что этой статьей всех пугают, точно так же, как ответственностью за лжесвидетельство в суде, но никого еще не наказали. <br/>С: Что поделаешь, статья-то есть.<br/>П: Это да, она есть. Заберите зачетку, зачет. <br/>Казаков Г.А.  Право. <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Казаков Г.А."
},{
    "quote": "<div class='pi_text'>Армяне есть - вариантов нет.<br/><br/>Савельева О.Г. Английский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Савельева О.Г."
},{
    "quote": "<div class='pi_text'>Если бы я каждый раз запоминал, куда положил телефон, я бы уже забыл матан.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%BA'>#Жук</a> А. С. <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Жук А. С."
},{
    "quote": "<div class='pi_text'>Жизнь есть борьба.<br/><br/>Сопкин П.Т., Основы теории журналистики<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Сопкин П.Т."
},{
    "quote": "<div class='pi_text'>*про золотой век дворян при Екатерине II*<br/><br/>-Хорошо им тогда жилось: ведь тогда они набрали долгов на четыреста миллионов! Жратэ, питэ, за кредитэ не платитэ! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2'>#Петров</a> В. А История <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Петров В. А"
},{
    "quote": "<div class='pi_text'>Никаких дистантов не будет! Будем умирать, но учиться! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B0%D1%81%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2'>#Касьянов</a> В. В. История России <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Касьянов В. В."
},{
    "quote": "<div class='pi_text'>— Как выглядит уравнение прямой?<br/>— ax + by + c = 0<br/>— Это ты мне по адыгейски говоришь, адыгейский я и сам знаю.<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>Между биофаком и худграфом огромная разница! Биологический находится на 4, а худграф — на 5.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D1%83%D1%81%D1%82%D0%BE%D0%B2'>#Кустов</a> С. Ю.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Кустов С. Ю."
},{
    "quote": "<div class='pi_text'>*Преподаватель устал, долго решал серьёзную задачу от Гаусса*<br/><br/>-Я прошу прощения, но я очень устал, эта задача завлекла меня, особенно, когда я слышу имя 'Гаусс'- не могу устоять. Он для меня- как одинокой романтичной женщине услышать, что её зовёт одинокий красивый миллиардер на розовом лексусе.<br/><br/>Рожков А.В. компьютерная алгебра и криптография <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Рожков А.В."
},{
    "quote": "<div class='pi_text'>С: Можно вопрос? <br/>П: Ну, рискни здоровьем!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B5%D1%80%D1%88%D0%BD%D0%B5%D0%B2%D0%B0'>#Шершнева</a> Н.Б. Практика английского языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Шершнева Н.Б."
},{
    "quote": "<div class='pi_text'>П: - В мире существует столько красивых и интересных фамилий.<br/>С: ...<br/>П: - Например, Мороз.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Доклассическая словесность<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Чем умнее парень - тем глупее его девушка.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%BB%D1%8C%D1%86%D0%B5%D0%B2%D0%B0'>#Мальцева</a> Р.И. Онлайн журналистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мальцева Р.И."
},{
    "quote": "<div class='pi_text zoom_text'>Но я всё-таки объясню, чтобы создать ощущение, будто то, что я сказал, имеет смысл.<br/><br/>Костенко К. И. Дискретная математика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Если бы у меня был голос как у Вина Дизеля, я даже не знаю, где бы я работал.<br/><br/>Нюхтилин П. В. Вебдизайн <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Нюхтилин П. В."
},{
    "quote": "<div class='pi_text'>*студентка положила голову на парту* <br/>— Унесите тело, оно уже отработало.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Комплексный анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>П: - Флуктуация - это зависание. Кажется, что процесс не движется и ничего уже не произойдёт.<br/>С: - Как в моей жизни...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%95%D1%80%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Ермоленко</a> Г.А. Естественнонаучная картина мира<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Ермоленко Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>Когда вы уже будете не школьниками, а нормальными?<br/><br/> <a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D1%87%D0%B0%D0%B9'>#Нечай</a> Ю.П Практический курс немецкого языка. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ргф_КубГУ</a></div>",
    "author": "Нечай Ю.П"
},{
    "quote": "<div class='pi_text'>*студентка читает книгу на лекции*<br/>Дай посмотрю, в жертву чему ты приносишь знания по экономической теории. Новый роман-бестселлер Джона Грина 'Виноваты звёзды'.<br/>*показывает на слайд*<br/>Вот настоящий роман-бестселлер! Вот где буйство красок и эмоций!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>* речь о вопросах к экзамену *<br/>П: Задавайте вопросы, которые не понимаете. Я буду на них отвечать.<br/>С: * задаёт вопрос *<br/>П: Ну и что в этом непонятного? Дальше. Какие вопросы?<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Если ты родилась девочкой, это не значит, что мир должен страдать!<br/><br/>Ажгихин С.Г. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Ажгихин С.Г."
},{
    "quote": "<div class='pi_text zoom_text'>Под лежачий камень, коньяк не течёт!<br/><br/>Щеколдин Г.А. Доп. главы по физике <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>П: В 15 лет кто обращает внимание на мальчиков?<br/>С: Девочки?<br/>П: Военкомат.<br/><br/>Томилов А.Б. Возрастная анатомия и физиология<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Томилов А.Б."
},{
    "quote": "<div class='pi_text'>* Отмечает присутствующих *<br/> <br/>П: - (имя студента) нет? <br/>С: - Он стоял около окна, но потерялся. <br/>П: - Надеемся, что он не выпал.<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Дополнительные главы алгебры <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>Из объектов культурного наследия в этой аудитории находится только Петр Борисович.<br/> <br/>Бондарев П.Б.<br/>Теоретическая и практическая педагогика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Бондарев П.Б."
},{
    "quote": "<div class='pi_text zoom_text'>Вы думаете, выход на сушу произошел так просто? Червяк выглянул и сказал: 'ООО! Здесь классно! Я пошел!'<br/><br/>Кустов С. Ю. Зоология <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#биофак_КубГУ</a></div>",
    "author": "Кустов С. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Если тебе понравилась девушка, это еще не значит, что она прекрасна!<br/><br/>Щеколдин Г.А. Доп. главы по физике. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А."
},{
    "quote": "<div class='pi_text'>*студентка показывает приложение*<br/>С: Я тут ещё добавила штучку...<br/>П: А у этой штучки есть методы.<br/><br/>Нгуен Д.Т. Моделирование информационных процессов <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Нгуен Д.Т."
},{
    "quote": "<div class='pi_text'>Когда будет ликвидирован последний двоечник...то есть когда он пересдаст.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D0%BD%D0%B4%D1%80%D0%B0%D1%84%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0'>#Андрафанова</a> Н.В. Информатика<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Андрафанова Н.В."
},{
    "quote": "<div class='pi_text'>У всех своя логика. У одного одна, у второго другая, у котов вообще своя. Вот ты человек. Я кот. Ты чего-то добился? А я кот.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Драйзер говорил: 'Мне нужен ритм большого города'. Он не как Вордсворт и Кольридж, которые в озёрах жили. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0'>#Татаринова</a>   Зарубежная литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринова"
},{
    "quote": "<div class='pi_text'>*до конца пары 10 минут* <br/>П: Дверь закроем — сейчас все пойдут. <br/>С: Все пойдут, а мы сидим. <br/>П: Видите, какие мы молодцы. Чувствуете свое превосходство? <br/><br/>Шаповалов С.Н. История<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Шаповалов С.Н."
},{
    "quote": "<div class='pi_text'>У местных голубей есть традиция: помирать у нас на крыше.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Онлайновые СМИ.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text'>Вот все обычно строят из себя умников и ничего в итоге не знают, а математики и физики строят дураков и всё знают. Парадоксально! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D0%B2%D1%80%D0%B8%D0%BB%D1%8E%D0%BA'>#Гаврилюк</a> М. Н. Теория функций комплексного переменного<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Гаврилюк М. Н."
},{
    "quote": "<div class='pi_text'>Важно, что эти величины никогда не равны. Или равны? Надо подумать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Мельников</a> С. С. Введение в термодинамику<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Мельников С. С."
},{
    "quote": "<div class='pi_text zoom_text'>Если тебя ударили по левой ягодице, подставь правую. <br/><br/>Осташевский А. В. Правовые основы журналистики. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Осташевский А. В."
},{
    "quote": "<div class='pi_text'>Ведь есть закон двойного отрицания: когда девушка два раза говорит 'нет', это означает 'да'. Запомните, юноши! <br/><br/>Осипян В.О., Информатика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Осипян В.О."
},{
    "quote": "<div class='pi_text'>С: А можно будет эссе в конце пары показать? <br/>П: Нет, учите все! <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D1%83%D1%85%D0%B0%D1%80%D0%B5%D0%B2%D0%B0'>#Пухарева</a> Т.С. Основы психологии <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Пухарева Т.С."
},{
    "quote": "<div class='pi_text'>* 15-минутное доказательство *<br/>С: Громоздкое..<br/>П: Две строчки всего!<br/>C: У вас тряпочка!<br/>П: А... ну да.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8'>#Мавроди</a> Н. Н. Комплексный анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>*на доске формула итоговой матрицы при произведении матриц*<br/><br/>Я лучше сотру – это слишком страшно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я.В. Математика и статистика<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я.В."
},{
    "quote": "<div class='pi_text'>Есть такая известная фраза: 'для чего козе баян?' <br/>Вот смотрите: это — коза, а это — баян. Теперь дальше: это — вы, а это — ваш диплом.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%BE%D0%B1%D1%81%D0%BA%D0%B8%D0%B9'>#Робский</a> В. В. Педагогика <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Робский В. В."
},{
    "quote": "<div class='pi_text'>С: У нас пары в пятницу с 11.30 и до 19.50...<br/>П: Ну что, ништяк, с 8 давайте начнём.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я. В. Математика и статистика<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я. В."
},{
    "quote": "<div class='pi_text'>Ну просто атас.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Механика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text'>П: - Вам продают не детское питание, вам продают мамину любовь в каждой ложке.<br/>С: - Мамина любовь не продается.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Основы рекламы<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text'>*идёт перекличка присутствующих*<br/>П: Почему не ходил?<br/>С: Болел...<br/>П: За какую команду?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%B0%D0%B7%D0%B0%D0%BA%D0%BE%D0%B2'>#Казаков</a> Г.А. Право <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Казаков Г.А."
},{
    "quote": "<div class='pi_text'>Вот это выполняется по этому правилу. Я его стер.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%96%D1%83%D0%BA%D0%BE%D0%B2'>#Жуков</a> С. А. Верификация программных систем<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Жуков С. А."
},{
    "quote": "<div class='pi_text'>Несколько рюмочек чая наталкивают на метафизические размышления.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B5%D1%82%D1%80%D1%8B%D0%BA'>#Петрык</a> Я. Ю. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Петрык Я. Ю."
},{
    "quote": "<div class='pi_text'>Вам себе же потом на кусок хлеба зарабатывать... А лучше с маслом... А ещё лучше с икрой... Хотя бы красной.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D0%BB%D0%B8%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE'>#Пилипенко</a> С. Н. Английский язык<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Пилипенко С. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Ссылка на авторитет еще не есть аргумент.<br/><br/>Костина Л.Ю 'Культура речи и деловое общение' <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Костина Л.Ю"
},{
    "quote": "<div class='pi_text zoom_text'>Что там за смешки? Не понятно что ли? <br/><br/>Стороженко Т.П. Кристаллография <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D1%82_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВт_кубгу</a></div>",
    "author": "Стороженко Т.П."
},{
    "quote": "<div class='pi_text'>*вызывает к доске,маркера нет*<br/>П: Тебе 18 есть?<br/>С: Да.<br/>П: Надо тут писюльку для тебя найти.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <br/><a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Эконом_КубГУ</a></div>",
    "author": "Да.<br/>П: Надо тут писюльку для тебя найти.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А."
},{
    "quote": "<div class='pi_text'>П: - Вы смотрели '50 оттенков боли'?<br/>С: *  Молчат. *<br/>П: - А я смотрела, проверяя ваши работы.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A5%D1%83%D0%B1%D1%83%D1%82%D0%B8%D1%8F'>#Хубутия</a> Н. В. Микроэкономика <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Хубутия Н. В."
},{
    "quote": "<div class='pi_text zoom_text'>От создателей 12 таблиц. Римская республика представляет. Смотреть во всех римских провинциях.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D1%8F%D0%BD'>#Даниелян</a> А. С. Римское право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text'>Многие девушки Америки голосовали за Клинтон просто потому, что она женщина, а то что она конченая натура - это никого не волнует.<br/><br/>Малевинский С.О.<br/>Стилистика русского языка и культура речи <br/> <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Малевинский С.О."
},{
    "quote": "<div class='pi_text zoom_text'>Девушки на задней парте далеки от углубленного познания в классической юриспруденции , но у них есть оправдание - они блондинки.<br/><br/>Маркова-Мурашова С.А. ТГП <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Мурашова С.А."
},{
    "quote": "<div class='pi_text'>*студентка переводит текст*<br/>С: ...und das Geschrei... Ну...перебранка?<br/>П: Перебранка? Перебранка это так, что-то они там перебирали, перебирали... А это - орево!<br/><br/>Бычков С.С. Немецкий язык <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Бычков С.С."
},{
    "quote": "<div class='pi_text zoom_text'>Вот вы готовитесь: то блестяще, то никак! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B5%D0%BD%D0%BA%D0%BE'>#Тарасенко</a> Т.П. Введение в языкознание. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ргф_КубГУ</a></div>",
    "author": "Тарасенко Т.П."
},{
    "quote": "<div class='pi_text'>*преподаватель вызывает к доске*<br/><br/>С: Я не пойду, боюсь опозориться..<br/>П: Посмотри на эти лица, перед кем позориться?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я.В. Математика и статистика<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Корж Я.В."
},{
    "quote": "<div class='pi_text'>Я сейчас как в индийском кино: не могу говорить, лучше станцую. Поэтому я вам нарисую.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D1%8B%D1%88%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D0%B9'>#Пышнограй</a> А. П. Основы инвестиционной деятельности<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Пышнограй А. П."
},{
    "quote": "<div class='pi_text'>У вас седьмая пара физики? Значит, нужно либо считать, либо страдать.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2'>#Николов</a> М. С. Физика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Николов М. С."
},{
    "quote": "<div class='pi_text'>Основное свойство любого тела — лень.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A9%D0%B5%D0%BA%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD'>#Щеколдин</a> Г. А. Механика<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г. А."
},{
    "quote": "<div class='pi_text zoom_text'>Вот это ты зеваешь. Смотри, челюсть не вывихни!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BB%D1%8E%D1%81%D1%82%D0%B5%D0%BD'>#Тлюстен</a> С. Р. Математическая статистика <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С. Р."
},{
    "quote": "<div class='pi_text'>*из коридора слышен разговор студентов, они три раза назвали фамилию Шувалова*<br/>П: *встал, открыл дверь аудитории, посмотрел на студентов*<br/>Повтор моей фамилии три раза вызывает меня!<br/>*закрыл дверь, вернулся на место*<br/>*из коридора крики: 'Шу-ва-лов! Шу-ва-лов! Шу-ва-лов!'*<br/>П: Ну, всё! <br/>*встал, вышел из аудитории, затем вернулся*<br/>Запомните: перед тем, как вызывать меня, либо нарисуйте пентаграмму, либо хотя бы чётко сформулируйте вопрос.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Электронные средства информации<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text zoom_text'>Шо Вы там мутите? <br/><br/>Шульженко М. Ю. Практика перевода основного иностранного языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Шульженко М. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Мне известны все места, куда вы можете спрятать ваши шпаргалки, и если я начну у вас их искать, меня привлекут к уголовной ответственности.<br/><br/>Чумаков С.Н. Античная литература. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>*студентка слишком громко двигает стул и портит паркет*<br/>П: Ты че, совсем?! И продолжает же!!!<br/>С: *тихим голосом* извинииииите...<br/>П: Не, ну нормально вообще?! Новый паркет портит! Говори адрес свой, быстро!!!<br/>С: *называет адрес*<br/>П: Ну все, жди. Готовь стул и паркет. Приду и буду шкрябать. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B5%D1%80%D1%88%D0%BD%D0%B5%D0%B2%D0%B0'>#Шершнева</a> Н.Б. Практика по грамматике иностранного языка <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Шершнева Н.Б."
},{
    "quote": "<div class='pi_text zoom_text'>— Пиши сначала на левой доске, мы не в Израиле.<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text zoom_text'>С: Лена Ильясовна! Что такое графы?                                         П: Графы - это графы! Что тут непонтяного?!<br/><br/>Туйбаева Е.И основы мат. обработки <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Туйбаева Е.И"
},{
    "quote": "<div class='pi_text zoom_text'>Если вы говорите, что у человека нет недостатков, значит он уже конченый.<br/><br/>Узлов Ю.А. История <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text'>Мне мешают коты и вы, котов я могу понять, а вас нет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text'>Вы, экономисты, должны знать дату вашего рождения, где находится туалет и три буржуазные революции. Вы не имеете права жить на свете, если вы этого не знаете.<br/><br/>Петров В.И. История Кубани <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text'>- Петр Терентьевич, что вы находите для себя в журналистике?<br/>- Опиум, без которого я больше не могу жить.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BE%D0%BF%D0%BA%D0%B8%D0%BD'>#Сопкин</a> П. Т. Введение в профессию <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Сопкин П. Т."
},{
    "quote": "<div class='pi_text'>* огласил результаты контрольной *<br/><br/>Двойки, тройки и колы —<br/>Все товарищи мои. <br/>Так и у вас, да?<br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B2%D0%B8%D0%BD'>#Савин</a> В. Н. Алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Савин В. Н."
},{
    "quote": "<div class='pi_text'>Отдохнем от договоров и поговорим о неизбежном! <br/>Итак, наследственное право...<br/><br/>Жуков Е.Н. Гражданское право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Жуков Е.Н."
},{
    "quote": "<div class='pi_text'>Детей нужно воспитывать, пока они помещаются поперёк скамейки. Все вы до получения диплома находитесь у меня поперёк скамейки. <br/><br/>Сопкин П.Т. Современная пресс-служба <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Сопкин П.Т."
},{
    "quote": "<div class='pi_text'>Роды относятся литературе. Так? Или я давлю на вас своим авторитетом?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Основы теории литературы <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>С: Евгений Викторович, это зачетка моего брата. Нужно поставить оценку.<br/>П: Хорошо, давай ручку.<br/>С: А у меня нет.<br/>П: У тебя ни говна, ни ложки.<br/><br/>Штурба Е.В. Социология.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Штурба Е.В."
},{
    "quote": "<div class='pi_text'>* конец пары *<br/><br/>Уже конец, слава Богу!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К.И. Модели интеллектуальных систем<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text zoom_text'>В средневековой философии много Скотов. <br/><br/>Спасов С.В. Философия <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>* заходит в аудиторию, студенты сидят *<br/>П: Не понял.<br/>* все встают *<br/>П: Понял.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BE%D0%BF%D0%BA%D0%B8%D0%BD'>#Сопкин</a> П. Т. Основы теории журналистики<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Понял.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BE%D0%BF%D0%BA%D0%B8%D0%BD'>#Сопкин</a> П. Т."
},{
    "quote": "<div class='pi_text'>Получатель — это не только тот, кто получает люлей, но ещё и тот, кто получает сообщение.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B8%D0%BA%D1%83%D0%BB%D0%B8%D0%BD'>#Никулин</a> И. О. Теория и практика массовой информации<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Никулин И. О."
},{
    "quote": "<div class='pi_text'>Совокупление - просто вид общения. Забеременела от того, что съела немытое яблоко.<br/><br/>Панаэтов О. Г.   Античная литература.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Панаэтов О. Г."
},{
    "quote": "<div class='pi_text zoom_text'>Они не тупые, они флегматики! <br/><br/>Орлова А. А. Психология <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Орлова А. А."
},{
    "quote": "<div class='pi_text zoom_text'>Не относись к другому человеку как средству, а относись как к цели своего развития.<br/><br/>Арламов. А. А. Социальная педагогика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФППК_КубГу</a></div>",
    "author": "Арламов. А. А."
},{
    "quote": "<div class='pi_text'>'Студент поправляет преподавателя'<br/>П. Вы прям как мой друг, ненавижу его.<br/><br/>Даниелян А.С. Теория государства и права <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А.С."
},{
    "quote": "<div class='pi_text'>Присаживайтесь поближе! Чувствуйте себя комфортно, но не забывайте, что вы в Кубанском государственном университете.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BB%D1%8C%D0%B1%D0%B0'>#Кольба</a> А. И.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Кольба А. И."
},{
    "quote": "<div class='pi_text'>А чего это вы в угол забились? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D1%8F%D0%BD'>#Закарян</a> М. Р. Методология организационного проектирования системы организации <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Закарян М. Р."
},{
    "quote": "<div class='pi_text zoom_text'>Какое прекрасное обезображенное мыслями лицо... Думайте.<br/><br/>Кулишов В.В. Теория обучение и воспитания. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#ФППК_КубГу</a></div>",
    "author": "Кулишов В.В."
},{
    "quote": "<div class='pi_text'>*обращается  к двум студенткам с вопросом, они молчат*<br/>-Ну я же вас не замуж зову, что вы так мнетесь?<br/><br/>Мороз О.Н. История русской литературы 18 века <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Слушайте музыку, а не слухи.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%B5%D0%BC%D0%B5%D1%86'>#Немец</a> Г. Н. Основы интегрированных коммуникаций <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Немец Г. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Налоговый кодекс - он же как нижнее белье. У каждого - свой. <br/><br/>Окунь А.С. Налоговый менеджмент <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Окунь А.С."
},{
    "quote": "<div class='pi_text'>*студент не пришел на пару*<br/>П: Он что, потерял список, кого бояться нужно?<br/><br/>Резепова В.К. Английский язык. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Резепова В.К."
},{
    "quote": "<div class='pi_text'>Возьмите листы за уши.<br/><br/>Беляева М.Ю. Современный русский язык<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%A4%D0%9A%D1%83%D0%B1%D0%93%D0%9A_%D0%A1%D0%BD%D0%BA'>#филфак_ФКубГК_Снк</a></div>",
    "author": "Беляева М.Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Вас у меня много, а я у вас такая одна... единственная в своем роде.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0'>#Платонова</a> Ю.Ю. Банковское дело <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Платонова Ю.Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Самое лучшее место для учёбы — это буфет!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%95%D1%80%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Ермоленко</a> В. В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Ермоленко В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Ну вот как с вами работать? Вы ж ненормальные.<br/><br/>Сидоров В.А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Я в вас вложусь полностью.<br/><br/>Кизим А.А. Логистика <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кизим А.А."
},{
    "quote": "<div class='pi_text zoom_text'>Трах-бабах! Туда-сюда! А у нас работы...<br/><br/>Долинин А.Н. Обработка и интерпретация геофизических данных <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Долинин А.Н."
},{
    "quote": "<div class='pi_text zoom_text'>А ты, Юрочка, осторожнее будь, ведь на экзамене можно и военный билет вытянуть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BB%D1%8E%D0%B5%D0%B2'>#Клюев</a> <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Клюев"
},{
    "quote": "<div class='pi_text'>* студенту, который разговаривает на паре *<br/>— Я тебя сейчас продифференцирую и получится 0.<br/><br/>Засядко О. В. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Засядко О. В."
},{
    "quote": "<div class='pi_text zoom_text'>Немецкое барокко, не будь ко мне жестоко. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B2%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Свитенко</a> Н. В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Свитенко Н. В."
},{
    "quote": "<div class='pi_text'>- Топ, топ, топ, шел по яблоку микроб.<br/>А я яблоко помыл и микроба победил.<br/>- Владимир Геннадьевич, да это звездные войны какие-то!<br/>- Да, значит, будем писать новый футуристический роман 'МикроГи на Ябле'!<br/><br/>Троян В.Г. (если кто помнит такого) логика, <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Троян В.Г."
},{
    "quote": "<div class='pi_text zoom_text'>Когда не смеются над вашими мемами, в вас умирает чуть-чуть Иосифа Сталина. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D1%8E%D1%84%D0%B0%D0%BD%D0%BE%D0%B2'>#Тюфанов</a> В. А. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Тюфанов В. А."
},{
    "quote": "<div class='pi_text'>*принимает работы*<br/>— И где рисунок?<br/>— Я не понял как найти эти точки.<br/>— Какие в задницу точки?<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text'>- Когда m = k, все хорошо - ответом является просто линейная комбинация ... <br/>*рисует рядом смайлик :) * <br/>- А вот когда m &lt; k, тут посложнее... <br/>*рисует :( * <br/>- Чего смеетесь? Если на контрольной не нарисуете такой смайлик - буду снижать!<br/><br/>Письменский А.В. Дифференциальные и разностные уравнения. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Письменский А.В."
},{
    "quote": "<div class='pi_text'>* Дистанционна пара. Преподаватель что-то пишет на доске. *<br/><br/>С: - Вас не слышно.<br/>П: - А я молча писал.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Алгебра<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>Давайте, пока я ещё жив.<br/><br/>Мавроди Н. Н.<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>*идет пара, студенты разговаривают, преподавателю это уже надоело*<br/>Зайцы, а зайцы, последнее предупреждение, а потом начну вас выгонять именем собачьим!<br/><br/>Штурба Е.В. Социология <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%BF%D0%BF%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фппк_кубгу</a></div>",
    "author": "Штурба Е.В."
},{
    "quote": "<div class='pi_text zoom_text'>— Шлёпнем индекс!<br/><br/>Солодкова С. С. Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Солодкова С. С."
},{
    "quote": "<div class='pi_text zoom_text'>У вас очень странное мировоззрение. Подсказка - это не помощь. Вот когда будет человек умирать - это помощь.<br/><br/>Чалый В. В. Русский язык и культура речи. <a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Кого сегодня нет?! Поднимите руки!<br/><br/>Ярёменко Л.А. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Ярёменко Л.А."
},{
    "quote": "<div class='pi_text'>Я молодец! Я всё стёр... На доске-то есть следы, а у вас в тетрадях? <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Мельников</a> С. С. Введение в термодинамику<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Мельников С. С."
},{
    "quote": "<div class='pi_text'>И так, кто сегодня главный бубнила?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BB%D1%82%D1%83%D1%86'>#Болтуц</a> О. А. Информационная политика СМИ <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Болтуц О. А."
},{
    "quote": "<div class='pi_text zoom_text'>Небезынтересно. <br/><br/>Филиппов А.Е. История графического дизайна и рекламы <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Филиппов А.Е."
},{
    "quote": "<div class='pi_text zoom_text'>Всё, что вы целуете — мертвечина.<br/><br/>Устименко А. Л. Философия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D1%83%D0%B1%D0%93%D0%A3_%D0%A1%D0%BD%D0%9A'>#ФКубГУ_СнК</a></div>",
    "author": "Устименко А. Л."
},{
    "quote": "<div class='pi_text'>* Студент опоздал на пару. *<br/><br/>П: - Почему опоздали?<br/>С: - Пробки на улицах.<br/>П: - Пробки в бутылках!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BC%D0%B0%D1%80%D0%BE%D0%B2'>#Комаров</a> Д. А. Использование карт в географии<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a> <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Комаров Д. А."
},{
    "quote": "<div class='pi_text'>- Кто знает, как делать абзацы в новом ворде?<br/>*молчание*<br/>- Вы что тут все старовордовцы что ли?<br/><br/>Богдашев И.В. 'Современные бизнес-технологии' <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Богдашев И.В."
},{
    "quote": "<div class='pi_text zoom_text'>-Ну, я же просил шепотом. Ушко в ушко говорите, когда я объясняю. Конечно, пацан пацану в ушко... Ну, а что поделать.<br/><br/>Гаврилюк М. Н. Теория вероятности и мат. статистика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Гаврилюк М. Н."
},{
    "quote": "<div class='pi_text'>-...отец имел право отдавать своих детей в качестве заложников за долги... Мда, в России детей бы не осталось.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D1%80%D1%83%D1%82%D1%8E%D0%BD%D0%BE%D0%B2'>#Арутюнов</a> Э.К. ИГПЗС<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#юрфак_КубГУ</a></div>",
    "author": "Арутюнов Э.К."
},{
    "quote": "<div class='pi_text zoom_text'>Я-главный спонсор Министерства Обороны РФ! <br/><br/>Кутер М.И. Бухгалтерский учёт. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Обороны РФ"
},{
    "quote": "<div class='pi_text'>Если вы в состоянии заинтересоваться другими точками зрения, то это университет, а не церковно-приходская школа.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%83%D0%B7%D0%B0%D0%BA%D0%BE%D0%B2'>#Лузаков</a> А.А. Управление персоналом организации<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФУП_КубГУ</a></div>",
    "author": "Лузаков А.А."
},{
    "quote": "<div class='pi_text'>*у студента в отчёте принтером плохо пропечаталась одна буква*<br/>П: Всё переделай. Это же нарушение красоты!<br/><br/>Осипян В.О. Информатика <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Осипян В.О."
},{
    "quote": "<div class='pi_text'>*о Тамерлане*<br/>...опасный убийца, не жалел никого. И только философов и ремеслеников приказывал не трогать. А я всю жизнь преподаю философию, и я строитель. И когда жена на меня кричит, я говорю: 'Тамерлан приказал не трогать, а ты наезжаешь!'<br/><br/>Петров В.И. История Кубани. <a data-link='/feed?section=search&amp;q=%23%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Эконом_КубГУ</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text zoom_text'>Женщина-математик - довольно странное и редкое явление в науке. Это, так называемый, дефект природы.<br/><br/>Калайдин Е.Н 'Теория игр и исследование операций' <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Калайдин Е.Н"
},{
    "quote": "<div class='pi_text'>*речь о 7000 платьях Елизаветы Петровны*<br/>- Есть предложение отпустить сейчас ребят, но они должны слышать это. Лучше, когда женщина носит одно платье, один костюм, одни сапоги. Всю жизнь.<br/><br/>Касьянов В.В. Международный менеджмент. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D1%83'>#эконом_КубГу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text'>Улыбающаяся девица — это как-то неполноценно…<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н. Доклассическая словесность в медиа<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text'>С: Пары отменяются. Ну там: пасха, яйца красить, в церковь ходить.<br/>Щ: Ты тут религиозную пропаганду не проводи!<br/>С: Безбожник!! Я пошел.<br/><br/>Щеколдин Г.А и Савченко В.Ф 'Механика' <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Щеколдин Г.А"
},{
    "quote": "<div class='pi_text'>С: - А где найти тему реферата?<br/>П: - Во вселенском разуме.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%98%D0%B2%D0%B0%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE'>#Иваненко</a> А. И. История биологии<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Иваненко А. И."
},{
    "quote": "<div class='pi_text zoom_text'>- Ваши расчеты колеблются в проруби!<br/><br/>Тлюстен С.Р. Мат. стат. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С.Р."
},{
    "quote": "<div class='pi_text zoom_text'>Хитрая ты!<br/><br/>Борисов С.А. Социология <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Борисов С.А."
},{
    "quote": "<div class='pi_text zoom_text'>Ну не бывает такого, что чуть-чуть законный, чуть-чуть незаконный.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%B7%D0%BE%D0%B2'>#Берлизов</a> М. П. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Берлизов М. П."
},{
    "quote": "<div class='pi_text'>* рассказывает про пролетевший по кухне шар *<br/>— Может борщ какой-то не такой был.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%90%D1%80%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0'>#Аронова</a> Е. Ю. Педагогика <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Аронова Е. Ю."
},{
    "quote": "<div class='pi_text zoom_text'>Всё красиво... Я такая красивая, а вы молчите...<br/><br/>Засядко О.В. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Засядко О.В."
},{
    "quote": "<div class='pi_text zoom_text'>— Ну давайте я вам философию нарисую, чтобы вы видели эту философию...<br/><br/>Сергеев Э.А. Алгебра <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сергеев Э.А."
},{
    "quote": "<div class='pi_text'>С: Можно выйти?<br/>П: Нет. Можно только взять ручку и ПИСАТЬ. Главное ударение правильно поставь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2'>#Сидоров</a> В. А. Общая экономическая теория <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D0%A3%D0%91%D0%93%D0%A3'>#эконом_КУБГУ</a></div>",
    "author": "Сидоров В. А."
},{
    "quote": "<div class='pi_text'>* Преподаватель по зоологии. *<br/><br/>У меня есть ископаемое. Eму 163 млн. лет уже. Короче, очень редкое, крутое.<br/><br/>* Достаёт ракушку из кармана халата. *<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BB%D0%B0%D0%B4%D1%83%D0%BD'>#Гладун</a> В. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Гладун В. В."
},{
    "quote": "<div class='pi_text'>Если вы будете болтать, на следующую пару я принесу пшикалку с водой и буду в вас брызгать! Как в котов!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D1%80%D0%B0%D0%B5%D0%B2%D0%B0'>#Сараева</a> К. И. Основной иностранный язык <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Сараева К. И."
},{
    "quote": "<div class='pi_text'>— Найди в себе сумасшедшего и сделай на него ставку.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2'>#Татаринов</a> А.В. Зарубежная литература<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Использование человека — это не достойно человека, это достойно супер обезьяны.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%B9%D0%BA%D0%BE'>#Бойко</a> Л. А. Философия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Бойко Л. А."
},{
    "quote": "<div class='pi_text'>*экзамен по архитектурному проектированию*<br/>С: Кто-нибудь, дайте лезвие!<br/>П: Шо, все? Вскрываешься? Может не на столько все плохо?<br/><br/>Р.S.: лезвием студенты-архитекторы срезают погрешности чертежей.<br/><br/>Кузьменко А.Н. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Кузьменко А.Н."
},{
    "quote": "<div class='pi_text'>П: Писать он начал в достаточно зрелом возрасте. В юности он увлекался музыкой, но родители не хотели, чтобы он стал музыкантом, поэтому он поступил на самый серьезный факультет.<br/>С: На филологический?<br/>П: Я же сказала на серьёзный. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0'>#Блинова</a> М.П. Зарубежная литература <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#РГФ_КубГУ</a></div>",
    "author": "Блинова М.П."
},{
    "quote": "<div class='pi_text zoom_text'>Я за пропуск лекций не мщу. Не надо хромать ко мне и показывать пораженные кариесом зубы..<br/><br/>Жинкин С.А. Юридическая техника. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Жинкин С.А."
},{
    "quote": "<div class='pi_text'>Меня пытались обмануть... Но я сам.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D0%B9%D0%B4%D0%B5%D0%BD%D0%BA%D0%BE'>#Гайденко</a> С. В. Основные разделы элементарной математики<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Гайденко С. В."
},{
    "quote": "<div class='pi_text'>* Студент рассказывает диалог и совершает ошибку. *<br/><br/>Я вас, вообще, не понял. Вместо того, чтобы показать фотографии, вы сфотографировали каких-то коз.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D1%80%D0%B1%D0%B0%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Горбатовский</a> А.С. Практический курс немецкого языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Горбатовский А.С."
},{
    "quote": "<div class='pi_text'>*очередная лекция, студенты в недоумении*<br/><br/>Лукав ли я? Лукав! Издеваюсь ли я? Издеваюсь!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А.А. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Тащиан А.А."
},{
    "quote": "<div class='pi_text zoom_text'>П: Вот вы знаете много языков программирования. И что это вам даст? Ни-че-го.<br/><br/>Нагорный С.В., Линейная алгебра, <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Нагорный С.В."
},{
    "quote": "<div class='pi_text zoom_text'>Концепция современного естествознания - это обо всем и ни о чем.<br/><br/>Самелик Е.Г. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Самелик Е.Г."
},{
    "quote": "<div class='pi_text'>*разговор о проделанной работе*<br/>С: - Хорошо.<br/>П: - Что хорошего? Вилы в бок и козой на столе!<br/><br/>Мартиросов А.В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Мартиросов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Из политики вообще нужно уходить во время или оставаться в ней до конца.<br/>Лучинский Ю.В. 'Практическая деятельность журналиста-международника' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Лучинский Ю.В."
},{
    "quote": "<div class='pi_text'>Кем мы становимся потом,никто не знает. А 'потом' с нами не разговаривает.<br/><br/>Татаринов А.В.  'Зарубежная литература'<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А.В."
},{
    "quote": "<div class='pi_text zoom_text'>- У вас нет ни пороха в пороховницах, ни ядер в ягодицах!<br/><br/>Любин В.А. Геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В.А."
},{
    "quote": "<div class='pi_text zoom_text'>Слабое, беззащитное существо, от которого невозможно избавиться - это женщина.<br/><br/>Касьянов В.В. История России <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Извините меня за мою небритость, но если я побреюсь, то у меня будут усики как у Гитлера, так что, лучше уж так.<br/><br/>Штурба Е.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Штурба Е.В."
},{
    "quote": "<div class='pi_text zoom_text'>Добрый день, дамы и господа. Присаживайтесь.<br/><br/>Сидоров В.А. <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Сидоров В.А."
},{
    "quote": "<div class='pi_text'>- Вы это где нашли? <br/>- В учебнике. <br/>- Ну я вас поздравляю. <br/><br/>Мороз О.Н. История античной литературы <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Философ — это тот, кто усложняет мир в одном месте, чтобы не усложнять во всех остальных.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text'>С: Как же так, Александр Николаевич?! Моя первая тройка!<br/>П: Кунг-Фу панда не предупреждает, когда нанесет удар.<br/><br/>Куксин А.Н. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Куксин А.Н."
},{
    "quote": "<div class='pi_text'>С: Простите за опоздание.<br/>П: Бог простит...<br/><br/>Волченко Н. Н. Биофизика <a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Биофак_КубГУ</a></div>",
    "author": "Волченко Н. Н."
},{
    "quote": "<div class='pi_text'>- Да, мы ошибаемся, но мы хоть что-то делаем.<br/>- Да нет, вы настолько талантливы, что ошибаетесь, даже ничего не делая.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С.С. Теория и методика творческой деятельности<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Шувалов С.С."
},{
    "quote": "<div class='pi_text zoom_text'>Что-то вы к экзаменам плохо готовитесь... Снегурочка к вам не придёт.<br/><br/>Ажгихин С. Г. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФАД_кубгу</a></div>",
    "author": "Ажгихин С. Г."
},{
    "quote": "<div class='pi_text'>- Почему опоздал?<br/>- Проспал. <br/>- Ладно. Вчера полнолуние было, поэтому я вас прощаю.<br/><br/>Гудакова Л.В, история соц.работы <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Гудакова Л.В"
},{
    "quote": "<div class='pi_text'>* Cтудент решает предел у доски. *<br/><br/>П: - Единичку лучше оставьте. <br/>С: - Зачем?<br/>П: - Для философских размышлений. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9D%D0%BE%D0%B2%D0%B8%D0%BA%D0%BE%D0%B2'>#Новиков</a> О. И. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Новиков О. И."
},{
    "quote": "<div class='pi_text zoom_text'>Наверняка, самое ценное у Вас на компьютере - фотографии на фоне ёлочек у входа. Так вот, зачем же их защищать?<br/><br/>Коваленко А.В. Информационная безопасность <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Коваленко А.В."
},{
    "quote": "<div class='pi_text'>Моя фамилия Большаков. От слова Боль.<br/><br/>Большаков А.В. Доп.главы алгебры и мат.анализа<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Большаков А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Ветхозаветный Бог призывает не убивать тех, кто живет в законе...надеюсь последняя фраза у вас не ассоциируется с воровским законом?<br/><br/>Татаринов А. В. История религий <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Татаринов А. В."
},{
    "quote": "<div class='pi_text'>Мужчины остаются детьми, поэтому их всегда нужно пинать...Нет...не пинать, а восхищаться занятием мужчины. Ты интересуешься, а он...ЦВЕТЕТ...<br/><br/>Утков Г.Н. Современный русский язык.<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г.Н."
},{
    "quote": "<div class='pi_text'>Это всё сон Галандарчика.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D1%88%D0%B5%D0%B2'>#Богдашев</a> И. В. Экономическая теория<br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Галандарчика.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D1%88%D0%B5%D0%B2'>#Богдашев</a> И. В."
},{
    "quote": "<div class='pi_text zoom_text'>Вы должны понимать, в каком дерьме мы находимся.<br/><br/>Павлов Ю.М. ' Прикладная журналистика', <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Павлов Ю.М."
},{
    "quote": "<div class='pi_text'>*пытается с помощью тряпки закрыть открывающуюся от сквозняка дверь*<br/>- Я тебя победю... побежду...<br/>*затея оканчивается успехом*<br/>- Победа разума над неживой материей состоялась!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B9%D1%87%D0%B5%D0%BD%D0%BA%D0%BE'>#Сайченко</a> В. В. История Кубани в региональной литературной традиции <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#филфак_КубГУ</a></div>",
    "author": "Сайченко В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Если вы въехали в эту тему, можете дальше сами записывать.<br/><br/>Письменский А.В. Дифференциальные и разностные уравнения. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Письменский А.В."
},{
    "quote": "<div class='pi_text zoom_text'>Хитрый народ эти преподаватели. Обманщики  ужасные!<br/><br/>Утков Г. Н. Современный русский язык <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г. Н."
},{
    "quote": "<div class='pi_text'>С: Повторите тему?<br/>П: *повторяя тему* ... Какие вы все-таки педанты!<br/><br/>Чумаков С.Н. Античная литература <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Чумаков С.Н."
},{
    "quote": "<div class='pi_text'>*идёт диалог между студентом и преподавателем*<br/>П: Спорим на Оливье?<br/><br/>Чалый В. В. Русский язык и культура речи <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#геофак_КубГУ</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text'>Значит, товарищ Кан, мать его, отец Интернета.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D0%BB%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F'>#Белопольская</a> Т.Н. Информатика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФИСМО_КубГУ</a></div>",
    "author": "Интернета.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B5%D0%BB%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F'>#Белопольская</a> Т.Н."
},{
    "quote": "<div class='pi_text'>В некоторый момент времени электрон находит свободную дырку и ныряет в неё. Дырки тоже путешествуют.<br/><br/>Рубцов С.Е.<br/>Физическая теория функционирования компьютера<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Рубцов С.Е."
},{
    "quote": "<div class='pi_text'>*в группе одни девочки*<br/>П: Я думаю, что вы мои внучки. Иногда я думаю, что вы мои дочки. А знаете, какая еще мысль красит сердце старика? Иногда я думаю, что вы мои девушки!<br/><br/>Сопкин П.Т. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Сопкин П.Т."
},{
    "quote": "<div class='pi_text'>Очень некрасиво поступил, я считаю,  взял и умер.<br/><br/>Нюхтилин П.В.<br/>Вебдизайн <a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Нюхтилин П.В."
},{
    "quote": "<div class='pi_text'>Бесконечность измеряется изнутри.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К. И."
},{
    "quote": "<div class='pi_text zoom_text'>Ребята, если сомневаетесь, проводите ДНК! Я за ДНК!<br/><br/>Волгина А.П. ИГПР <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA'>#юрфак</a></div>",
    "author": "Волгина А.П."
},{
    "quote": "<div class='pi_text zoom_text'>Если у вас болит рот, значит вы хорошо поработали. ( о разработке английской речи) <br/>Волкодав Т.В. английский язык <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФППК_КубГУ</a></div>",
    "author": "Волкодав Т.В."
},{
    "quote": "<div class='pi_text'>П: Кто смотрит Игру престолов?<br/>*два студента поднимают руки*<br/>П: Что, всего 2 незачета?<br/><br/>Шашков Д.И. Молекулярная физика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Шашков Д.И."
},{
    "quote": "<div class='pi_text'>*Идет пара, в аудитории 1 студент и преподаватель. Преподаватель пишет работу* <br/>С: А может быть Вы меня домой отпустите?<br/>П: Нее, посиди со мной, а то мне скучно.<br/><br/>Пучкова. Т.Е. Проектная графика. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Пучкова. Т.Е."
},{
    "quote": "<div class='pi_text'>П: По каким предметам у вас еще есть задачи?<br/>С: По диффурам.<br/>П: Они же легкие!<br/><br/>Нгуен Д. Т. Методы вычислительной математики <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Нгуен Д. Т."
},{
    "quote": "<div class='pi_text'>* преподаватель рассматривает работу программы на примере с иномарками *<br/><br/>С1: — А где LADA?<br/>С2: — У тебя в гараже.<br/>П: — Раунд!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Коваленко</a> М. С. Информационно-медицинские технологии<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Коваленко М. С."
},{
    "quote": "<div class='pi_text zoom_text'>Так, до конца пары ещё 13 минут. Что бы вам рассказать...чтобы рассказать...Ну, расскажу формулы Ньютона. Формулы Ньютона. Это всё, пошли вон.<br/><br/>Лежнев В.В. Вычислительная физика <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Лежнев В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Будешь осуждать отца - будет сколиоз. <br/><br/>Кравченко Г.Г. Академическая живопись <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%90%D0%94_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФАД_КубГУ</a></div>",
    "author": "Кравченко Г.Г."
},{
    "quote": "<div class='pi_text'>*Дениса все в группе называют Денчиком*<br/>П: Денчик, ты писал лекции?<br/>С: *тихим голосом* Ну дааа...<br/>П: Денчик, будьте увереннее. Женщины любят таких. А то так и останетесь Денчиком.<br/><br/>Нюхтилин П.В., вебдизайн. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Нюхтилин П.В."
},{
    "quote": "<div class='pi_text zoom_text'>Долгое время записи с видеорегистраторов не принимались как доказательства в суде. Но с появлением YouTube начали принимать все.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С.В. Логика <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Гарин С.В."
},{
    "quote": "<div class='pi_text'>С: - Можно включить свет?<br/>П: - В природе нет цветов! Это восприятие человеком электромагнитных волн разной частоты! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D1%83%D0%B4%D0%BE%D0%BC%D0%B0%D0%BD'>#Рудоман</a> Н. Р. Физика <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Рудоман Н. Р."
},{
    "quote": "<div class='pi_text'>Приготовьтесь к ужасу. Любое воспоминание может оказаться подмененным.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE%D0%B2'>#Вавилов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Вавилов А. В."
},{
    "quote": "<div class='pi_text'>Если вы на экзамене скажете мне, что это одно и тоже, я заберу у вас паспорт, а вас выкину в окно. Перед этим, в работе вы напишите расписку, что вы осознали какой вы тупой. И чтобы избавить от мук мир и родной университет, добровольно соглашаетесь спрыгнуть с окна, а учиться вместо вас останется паспорт.<br/><br/>Рожков А.В. Компьютерная алгебра. <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Рожков А.В."
},{
    "quote": "<div class='pi_text zoom_text'>В нашем недалеком будущем, на работе нам будут платить не зарплату, а зря плату.<br/><br/>Кутер М.И. Бух. Учет <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>Если у вас есть фонтан - заткните его. Дайте ему отдохнуть.<br/><br/>Шувалов С.С.<br/>Основы производственных процессов<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Шувалов С.С."
},{
    "quote": "<div class='pi_text'>Посмотрите сколько тут красивых девочек, мужики, глаз не оторвать! Красота это, конечно, хорошо, но главное, чтоб мудрая была, не умная, а именно мудрая. Мудрая, она ведь из нищего - принца сделать может, а глупая наоборот, из принца - нищего.<br/><br/>Борисов С.А. Социология <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Борисов С.А."
},{
    "quote": "<div class='pi_text zoom_text'>— Ну ладно, о грустном потом.<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>Первое правило племени мумба - юмба :<br/>Вождь всегда прав!<br/><br/>Логинов.В.В. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физра_кубгу</a></div>",
    "author": "Логинов В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Ох и наказание - отобрали шмаль! Наказали так наказали.<br/><br/>Берлизов М.В. Административно-деликтное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Берлизов М.В."
},{
    "quote": "<div class='pi_text zoom_text'>- Девочки на матфаке очень умные. Они всегда найдут лоха, который будет им всё решать.<br/><br/>Нюхтилин П. В. Вебдизайн. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Нюхтилин П. В."
},{
    "quote": "<div class='pi_text'>* Идет онлайн-лекция. Преподаватель извиняется, на минутку отлучается. *<br/><br/>Увлёкся рассказом, чуть котлеты не сжёг.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%B0%D1%86%D0%B5%D0%BF%D0%B8%D0%BD'>#Зацепин</a> М. Н. Информационные технологии в лингвистике <br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Зацепин М. Н."
},{
    "quote": "<div class='pi_text'>* на 5 этаже не открываются окна — створки прикручены шурупами к рамам * <br/>— В следующий раз надо будет взять лом.<br/>* берёт ножку от офисного стула, крутит в руке * <br/>— Не, зачем лом... Вот же!<br/><br/>Мавроди Н. Н. Математический анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Мавроди Н. Н."
},{
    "quote": "<div class='pi_text'>* Начало пары, лекция, записали новую тему. *<br/><br/>Давайте запишем несколько новых понятий, мы же по понятиям с вами живём.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B0%D0%B2%D0%B8%D0%BD'>#Савин</a> В. Н. Математический анализ<br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Савин В. Н."
},{
    "quote": "<div class='pi_text'>* За 10 минут до конца пары, смотря на часы *<br/><br/>У меня к вам куча вопросов, но, к сожалению, трудоголизм не та болезнь, которой я страдаю.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text'>Чем меньше женщину мы меньшим, тем больше она нам.<br/><br/>Логинов В. В.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%80%D0%B0_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физра_КубГУ</a></div>",
    "author": "Логинов В. В."
},{
    "quote": "<div class='pi_text'>— Знакомы ли вы с известным популяризатором математики Перельманом?<br/>— Да!<br/>— Правильно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B0%D0%B7%D0%B0%D1%80%D0%B5%D0%B2'>#Лазарев</a> В. А. Актуальные проблемы теории и методики преподавания математики <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Правильно.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B0%D0%B7%D0%B0%D1%80%D0%B5%D0%B2'>#Лазарев</a> В. А."
},{
    "quote": "<div class='pi_text'>П: Мне с вами не интересно, вы все тупые. <br/>*встал вышел с аудитории*<br/> <br/>Шишкин А.Б. Математический Анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%A4%D0%9A%D1%83%D0%B1%D0%93%D0%A3_%D0%A1%D0%BD%D0%9A'>#матфак_ФКубГУ_СнК</a></div>",
    "author": "Шишкин А.Б."
},{
    "quote": "<div class='pi_text'>Сегодня лекция, и я буду пытаться ее прочесть.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D1%83%D1%85%D0%BE%D0%B2%D0%B8%D1%87'>#Бухович</a> Е. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Бухович Е. В."
},{
    "quote": "<div class='pi_text'>Трагедии писали для того, чтобы зрители испытывали катарсис. Не оргазм, а катарсис! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О.Н. История русской литературы 18 века <br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>*конец пары*<br/>- Ну что, золотые, счастья, удачи!<br/><br/>Казаков Г.А. 'Право' <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Казаков Г.А."
},{
    "quote": "<div class='pi_text zoom_text'>Готовимся, настраиваемся, фокусируемся, задумываемся...<br/><br/>Дедюхин А.А. Английский язык <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Дедюхин А.А."
},{
    "quote": "<div class='pi_text zoom_text'>— Быстрее работай; что ты как в замедленной съёмке?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%BB%D1%8E%D1%81%D1%82%D0%B5%D0%BD'>#Тлюстен</a> С. Р. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тлюстен С. Р."
},{
    "quote": "<div class='pi_text'>Почему я говорю? Потому что это действительно так! <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D1%83%D0%BA%D0%B0%D1%81%D0%BE%D0%B2%D0%B0'>#Гукасова</a> Э. М. Основы языкознания<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Гукасова Э. М."
},{
    "quote": "<div class='pi_text'>В университете маска, как декольте — не должна быть опущена.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>#Письменский</a> А. В. Дифференциальные уравнения<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Письменский А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Вот и 'опоздуны' наши! <br/><br/>Останеко А.А. Геодезия с основами космаэрофотосъемки <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Останеко А.А."
},{
    "quote": "<div class='pi_text'>С: Федерация — это маленькое государство.<br/>П: А лето — это маленькая жизнь...<br/><br/>Даниелян А. С. Юридическая техника <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text zoom_text'>Я понятно объясняю?<br/><br/>Кулишов В.В. Теоретическая педагогика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Кулишов В.В."
},{
    "quote": "<div class='pi_text zoom_text'>'Ну ладно, нафиг/нефиг...' - сказал Иван Грозный.<br/><br/>Петров В.И. История Кубани <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#эконом_КубГУ</a></div>",
    "author": "Петров В.И."
},{
    "quote": "<div class='pi_text zoom_text'>— Опустимся до уровня правительства.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D0%B0%D0%B7%D0%B0%D1%80%D0%B5%D0%B2'>#Лазарев</a> В. А. Актуальные проблемы теории и методики преподавания математики <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Лазарев В. А."
},{
    "quote": "<div class='pi_text'>П: Добрый день, меня зовут Альберт Васильевич<br/>* тишина *<br/>П: Да, такое тоже бывает<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Коваленко</a> А. В. Социология <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Васильевич<br/>* тишина *<br/>П: Да, такое тоже бывает<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Коваленко</a> А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Продолжаем наши безнадежные изыскания...<br/><br/>Спасов С. В. Философия <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Спасов С. В."
},{
    "quote": "<div class='pi_text'>Если мужчина есть, то его нужно использовать по назначению.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9E%D0%B2%D1%87%D0%B0%D1%80%D0%BE%D0%B2%D0%B0'>#Овчарова</a> К. В. Письменный перевод<br/><a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Овчарова К. В."
},{
    "quote": "<div class='pi_text'>Уютнее места, чем «под каблуком» я не встречал!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%95%D1%80%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE'>#Ермоленко</a> В. В. Основы теории управления <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Ермоленко В. В."
},{
    "quote": "<div class='pi_text zoom_text'>Сейчас буду учить вас плохому.<br/><br/>Блинова М. П. Основы теоретической и прикладной лингвистики. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Блинова М. П."
},{
    "quote": "<div class='pi_text zoom_text'>П: Да хрен с ней, с поддержкой населения.<br/><br/>Карнаушенко Л.В.  Игпзс. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Карнаушенко Л.В."
},{
    "quote": "<div class='pi_text zoom_text'>Болтуны несчастные! Принесу рогатку, буду прям отсюда в вас стрелять!<br/><br/>Утков Г.Н. 'Стилистика и литературное редактирование' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Утков Г.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Это не вы сдали, а я сдалась...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B8%D0%BD%D1%86'>#Минц</a> С.С. Методология истории <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Минц С.С."
},{
    "quote": "<div class='pi_text zoom_text'>Раскройте свои чакры.<br/><br/>Узлов Ю.А. История. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Узлов Ю.А."
},{
    "quote": "<div class='pi_text zoom_text'>У нас у каждого свой Петр. <br/><br/>Касьянов В.В. История России/Кубани <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text'>Смотрит как включается проектор. После пары минут наблюдения:<br/>— И имя ему - Неспешность!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%B2%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Свитенко</a> Н. В. Основы отечественной художественной культуры<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#Филфак_КубГУ</a></div>",
    "author": "Свитенко Н. В."
},{
    "quote": "<div class='pi_text'>Первое правило студента: не говорить, что ты брал из Википедии, даже если это так.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С. С. Онлайновые СМИ<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Шувалов С. С."
},{
    "quote": "<div class='pi_text'>*о рисунке*<br/>Что это за бульмень-пельмень?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%BE%D0%BA%D0%B0%D1%80%D0%B5%D0%B2'>#Бокарев</a> А.П. Рисунок <a data-link='/feed?section=search&amp;q=%23%D1%85%D1%83%D0%B4%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#худграф_кубгу</a></div>",
    "author": "Бокарев А.П."
},{
    "quote": "<div class='pi_text'>Сок — полезный, компот — просто приятный. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D1%8B%D1%81%D0%BA%D1%83%D0%B1%D0%BE%D0%B2'>#Выскубов</a> Е. В. Основы кибернетики <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Выскубов Е. В."
},{
    "quote": "<div class='pi_text'>Для удобства решили ввести буквенное обозначение формулы алгебраического дополнения матрицы. <br/>- Как назовём это? Придумайте букву. <br/>- Может D, потому что 'дополнение' <br/>- А как по английски будет 'дополнение'? <br/>*тишина *<br/>- Ладно, у нас будет Dopolnenie (с акцентом)<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%80%D0%B6'>#Корж</a> Я. В. Математика и статистика <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Корж Я. В."
},{
    "quote": "<div class='pi_text zoom_text'>Давайте, гудбайте.<br/><br/>Бабак О.В. Английский язык <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Бабак О.В."
},{
    "quote": "<div class='pi_text'>*студент рассказывает доклад по Северной войне*<br/>- Ну прям чувствуется влияние википедии!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шаповалов</a> С.Н. История России <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Шаповалов С.Н."
},{
    "quote": "<div class='pi_text'>*шум дождя*<br/>П: Дождь начался? Зачем?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%91%D0%B0%D1%80%D1%81%D1%83%D0%BA%D0%BE%D0%B2%D0%B0'>#Барсукова</a> В.Ю. Функциональный анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Барсукова В.Ю."
},{
    "quote": "<div class='pi_text'>* Пара по словообразованию. *<br/><br/>С: - Кто придумывает слова? <br/>П: - Хороший вопрос на втором курсе филологического факультета.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D0%B5%D0%BC%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0'>#Шемелева</a> Т. В. <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Шемелева Т. В."
},{
    "quote": "<div class='pi_text'>Это я понятно сказал? Или я это зря сказал? Да, кажется, надо меньше говорить...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Дифференциальная геометрия и топология <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text'>Так, что я хотел сказать? <br/>Тот, кто скажет, что я хотел сказать, получит самозачет.<br/><br/>Мороз О.Н. История русской литературы XVIII века<br/><a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text'>Вы должны быть хорошими булочками, а не черствыми корками!<br/><br/>Бондаренко Н.А. Литология <br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Бондаренко Н.А."
},{
    "quote": "<div class='pi_text'>Им риторика не нужна. У них социальный лифт — верблюд, а не слово.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D1%80%D0%B8%D0%BD'>#Гарин</a> С. В. Риторика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Гарин С. В."
},{
    "quote": "<div class='pi_text'>*преподаватель зашёл не в тот кабинет, полминуты молчания*<br/>П: Мне, конечно, приятно вас видеть, но я не у вас? <br/>С: Нет.<br/>*выходя из кабинета, резко оборачивается* <br/>П: Ну, чтоб было 1:1 : вы тоже не у меня.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D0%BD%D1%87%D0%B0%D1%80%D0%BE%D0%B2'>#Гончаров</a> Ю. В. Лингвистический анализ художественного текста <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%BB%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#филфак_кубгу</a></div>",
    "author": "Нет.<br/>*выходя из кабинета, резко оборачивается* <br/>П: Ну, чтоб было 1:1 : вы тоже не у меня.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D0%BD%D1%87%D0%B0%D1%80%D0%BE%D0%B2'>#Гончаров</a> Ю. В."
},{
    "quote": "<div class='pi_text'>Мой лучший друг, Лука Пачоли.<br/><br/>Кутер М.И. Бухгалтерский учёт <br/><a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кутер М.И."
},{
    "quote": "<div class='pi_text'>До сих пор не очень хорошо, потому что плохо...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%95%D0%B3%D1%83%D0%BF%D0%BE%D0%B2'>#Егупов</a> А.В. Основы информационной политики<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Егупов А.В."
},{
    "quote": "<div class='pi_text'>П: У меня тут ошибка. И вы это знали?<br/>С: Угу.<br/>П: И ничего мне не сказали?<br/>С: Угу.<br/>П: Мо-ло-дцы! Поняли наконец-то!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И. Математическая логика и дискретная математика <br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Угу.<br/>П: И ничего мне не сказали?<br/>С: Угу.<br/>П: Мо-ло-дцы! Поняли наконец-то!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE'>#Костенко</a> К. И."
},{
    "quote": "<div class='pi_text'>П: У женщин по определению в жизни не может быть трагедии.<br/>С: Только истерики.<br/>П: Совершенно верно.<br/><br/>Мороз О.Н. История античной литературы <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Дополнительный вопрос - как спасательный круг. Правда, попасть он может прямо в темечко.<br/><br/>Жинкин С.А. <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Жинкин С.А."
},{
    "quote": "<div class='pi_text'>* Преподаватель обращается к двум подругам-студенткам. *<br/><br/>П: - А вы сделали домашнее задание?<br/>С: - Нет. <br/>П: - Смотрю, вы любите сдавать сессию по-жесткому. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9'>#Письменский</a> А. В. Дифференциальные уравнения<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Письменский А. В."
},{
    "quote": "<div class='pi_text'>С: - 180 - это же 2 раза по 90.<br/>П: - Нет, это я знаю. Просто тут что-то не так!<br/><br/>Кособуцкая Е.В. Дискретная математика. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Кособуцкая Е.В."
},{
    "quote": "<div class='pi_text'>С: А сколько вам лет?<br/>П: Избежим промежуточных вопросов, и отвечу сразу - не женат. <br/><br/>Алеников А.С. Контроллинг <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Алеников А.С."
},{
    "quote": "<div class='pi_text'>Время - главный ресурс.<br/><br/>Жирма В.В. , физ.география России и ближнего Зарубежья<br/><a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Не отмечать 9 мая, потому что это затрагивает мертвых? Давайте тогда и Пасху не будем отмечать. Зачем же мучать этого бедного Иисуса?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Шувалов</a> С.С. Информационные войны в СМИ <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#журфак_КубГУ</a></div>",
    "author": "Шувалов С.С."
},{
    "quote": "<div class='pi_text'>Иногда я себя чувствую, что учу бананы добывать палкой. <br/> <br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B5%D0%BD'>#Тен</a> О. К. Линейная алгебра <br/><a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Тен О. К."
},{
    "quote": "<div class='pi_text zoom_text'>Надо в каждом из великих людей видеть государственное и человеческое.<br/><br/>Касьянов В.В. История России <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Касьянов В.В."
},{
    "quote": "<div class='pi_text zoom_text'>Испорченный вкус. Не могут даже творческую задачу дать.<br/><br/>Сергеев Э.А. <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Сергеев Э.А."
},{
    "quote": "<div class='pi_text zoom_text'>Эта формула есть в моей книге, и она мне очень нравится.<br/><br/>Кизим А.А. Логистика <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Кизим А.А."
},{
    "quote": "<div class='pi_text zoom_text'>После выполнения задания, говорим 'Окей'.<br/><br/>Дементьева И.Е. Информатика <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геолог_кубгу</a></div>",
    "author": "Дементьева И.Е."
},{
    "quote": "<div class='pi_text'>Давайте кратко распишем, страницы на две.<br/><br/>Даниелян А. С. Теория государства и права. <br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Даниелян А. С."
},{
    "quote": "<div class='pi_text'>Ты видишь, что не управляешь белым?! Смотри, как много четвертого тона! Почему у тебя маленький средний как большой средний?! Кто из них большой, кто?! Я понимаю, что рисовать гробы- это круто, но сделай форму интересней! Желтый не пойдет на второй тон!<br/><br/>Ажгихин С.Г. <a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B0%D0%B4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фад_кубгу</a></div>",
    "author": "Ажгихин С.Г."
},{
    "quote": "<div class='pi_text'>Чтобы решить эту задачу, нужно стать киборгом...мм...человеком-автомобилем.<br/><br/>Костенко К.И.  Дискретная математика.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#ФКТиПМ_КубГУ</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>* Читает лекцию в максимально сжатом формате, чтоб всё успеть. *<br/><br/>Вы знаете, я так сокращаю, что ни один уважающий себя ученик не сможет так сократить.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9F%D0%B8%D0%BB%D1%8C'>#Пиль</a> Л. И. Химия <br/><a data-link='/feed?section=search&amp;q=%23%D0%B1%D0%B8%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#биофак_кубгу</a></div>",
    "author": "Пиль Л. И."
},{
    "quote": "<div class='pi_text zoom_text'>Смотришь собака ойойой да она не кусается ,а потом раз и уже колготок нет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%92%D0%BE%D0%BB%D0%B3%D0%B8%D0%BD%D0%B0'>#Волгина</a> А.П. История государства и права России <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Волгина А.П."
},{
    "quote": "<div class='pi_text'>Я вам сейчас прочитаю вульгаризмы так же быстро, как титры после фильма:<br/>харя, рожа, жрать, кретин, подонок... Фу, какая гадость, надеюсь, вы не запомнили.<br/><br/>Чалый В. В. Русский язык и культура речи <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#геофак_кубгу</a></div>",
    "author": "Чалый В. В."
},{
    "quote": "<div class='pi_text'>* Группа читает текст про Пасху. *<br/>П: - Медленно, но верно наша пара превращается в проповедь.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%BE%D1%80%D0%B1%D0%B0%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Горбатовский</a> А. С. Практический курс немецкого языка<br/><a data-link='/feed?section=search&amp;q=%23%D0%A0%D0%93%D0%A4_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#РГФ_кубгу</a></div>",
    "author": "Горбатовский А. С."
},{
    "quote": "<div class='pi_text'>Я, конечно, понимаю, что у вас жениховский возраст, но превратностей любви можно избежать, а экзамена нет.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%94%D0%B7%D0%B8%D0%B4%D0%B7%D0%BE%D0%B5%D0%B2'>#Дзидзоев</a> Р. М. Конституционное право зарубежных стран<br/><a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Дзидзоев Р. М."
},{
    "quote": "<div class='pi_text zoom_text'>Нужно сразу осматривать, щупать и исследовать свеженайденный труп - вдруг он, собственно, и не труп... помогать ему надо.<br/><br/>Натура А.И. Криминалистика <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Натура А.И."
},{
    "quote": "<div class='pi_text'>- А вас когда-нибудь увольняли? <br/>- Меня? Нет, меня нельзя уволить, я звезда!<br/><br/>Юркова И.Г.управление персоналом <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%83%D0%BF_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фуп_кубгу</a></div>",
    "author": "Юркова И.Г."
},{
    "quote": "<div class='pi_text zoom_text'>Я повторяю, всё это на самом деле один движняк: все эти «любители» животных, «любители» нетрадиционной ориентации, рэпа…<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%BE%D1%80%D0%BE%D0%B7'>#Мороз</a> О. Н.  История античной литературы <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О. Н."
},{
    "quote": "<div class='pi_text zoom_text'>Сказать человеку 'успокойся', все равно, что сказать ему 'умри'!<br/><br/>Кожевников С. Б. Философия <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Кожевников С. Б."
},{
    "quote": "<div class='pi_text'>Но если вы думаете, что это всё, то вы ошибаетесь. Здесь не всё. А что здесь не всё?<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%B6%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2'>#Кожевников</a> В.В. Математический анализ <br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#физтех_кубгу</a></div>",
    "author": "Кожевников В.В."
},{
    "quote": "<div class='pi_text'>В нашем современном мире я бы предпочел, чтобы вы сидели умытые... умытые, это более безопасно, хоть и раздетые. Потому что ваша ногота меня никак не трогает, а неумытость, возможно, способствует развитию заболеваний.<br/><br/>Штурба Е.В. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9F%D0%9F%D0%9A_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФППК_кубгу</a></div>",
    "author": "Штурба Е.В."
},{
    "quote": "<div class='pi_text'>*студентка в конце пары говорит, что может рассказать свой реферат*<br/>П: Опа. А почему не рассказываешь? Это как макияж. Сделала его, а на свидание не пошла. Зачем лицо уродовала? Это же вредно. Не огуречная маска...<br/><br/>Жирма В.В. Методы исследований. <a data-link='/feed?section=search&amp;q=%23%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#географ_кубгу</a></div>",
    "author": "Жирма В.В."
},{
    "quote": "<div class='pi_text'>*10 минут до конца пары*<br/><br/>С: опутииии...<br/>П: нипутююю..<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9B%D1%8B%D1%81%D0%B5%D0%BD%D0%BA%D0%BE'>#Лысенко</a> В.Е. Алгоритмизация и программирование.<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D0%B7%D1%82%D0%B5%D1%85_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#физтех_КубГУ</a></div>",
    "author": "Лысенко В.Е."
},{
    "quote": "<div class='pi_text zoom_text'>Предсказываю - ты сдашь зачет!<br/><br/>Борисов С.А. Социология <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Борисов С.А."
},{
    "quote": "<div class='pi_text zoom_text'>Алгебра такая, более дерзкая.<br/><br/>Костенко К.И. Дискретная математика <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text zoom_text'>Ты с какой Хацапетовки? <br/><br/>Авджян Г.Д. Теория управления. <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A3%D0%9F_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФУП_кубгу</a></div>",
    "author": "Авджян Г.Д."
},{
    "quote": "<div class='pi_text'>Я бы, конечно, с тобой поспорил, но, к сожалению, азартные игры запрещены...<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%97%D0%BC%D0%B8%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9'>#Змихновский</a> С. И. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Змихновский С. И."
},{
    "quote": "<div class='pi_text'>Я бы начал решать сложную задачу, но боюсь, что вы отравитесь. <br/><br/>Костенко К.И.<br/>Дискретная математика<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФКТиПМ_кубгу</a></div>",
    "author": "Костенко К.И."
},{
    "quote": "<div class='pi_text'>С: Экзамен 12.01 в ... аудитории. Скажите, вы долго принимаете? <br/>П: ну старый новый год встретим<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BD%D1%8F%D1%85%D0%B8%D0%BD'>#Коняхин</a> В. П. Международное уголовное право <a data-link='/feed?section=search&amp;q=%23%D1%8E%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#юрфак_кубгу</a></div>",
    "author": "Коняхин В. П."
},{
    "quote": "<div class='pi_text zoom_text'>— А ноль будет бабушка писать?<br/><br/>Любин В. А. Аналитическая геометрия <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Любин В. А."
},{
    "quote": "<div class='pi_text zoom_text'>Надо сказать, что это не фокус.<br/><br/>Левицкий Б.Е. Комплексный анализ <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%9A%D1%83%D0%B1%D0%B3%D1%83'>#матфак_Кубгу</a></div>",
    "author": "Левицкий Б.Е."
},{
    "quote": "<div class='pi_text'>Нельзя полюбить предмет, самому же ему не отдавшись.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A2%D0%B0%D1%89%D0%B8%D0%B0%D0%BD'>#Тащиан</a> А. А. Философия<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%98%D0%A1%D0%9C%D0%9E_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФИСМО_кубгу</a></div>",
    "author": "Тащиан А. А."
},{
    "quote": "<div class='pi_text'>Глупый вы народ. Или умный. Я ещё не разобрался. В любом случае, это вам не поможет. <br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%A1%D0%BF%D0%B0%D1%81%D0%BE%D0%B2'>#Спасов</a> С.В. Античная философия<br/><a data-link='/feed?section=search&amp;q=%23%D1%84%D0%B8%D1%81%D0%BC%D0%BE_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#фисмо_кубгу</a></div>",
    "author": "Спасов С.В."
},{
    "quote": "<div class='pi_text'>*преподаватель доказывает теорему, расписывая на доске огромные вычисления*<br/><br/>- На первый взгляд может показаться, что стало сложнее... На второй и третий тоже.<br/><br/>Барсукова В.Ю. <a data-link='/feed?section=search&amp;q=%23%D0%9C%D0%B0%D1%82%D0%A4%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#МатФак_кубгу</a></div>",
    "author": "Барсукова В.Ю."
},{
    "quote": "<div class='pi_text'>*преподаватель попросила опустить жалюзи, в аудитории один парень*<br/><br/>П: Филипп, зачем Вы прячетесь?<br/><br/>Гукасова Э.М. Языковые ареалы и древние языки мира. <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Гукасова Э.М."
},{
    "quote": "<div class='pi_text'>Идет пара. Преподаватель объясняет новую тему, по окончании объяснения спрашивает у студента:<br/>П: Итак, ты все понял из того,что я сейчас говорил?<br/>С: Нет, ничего не понятно.<br/>П: Ну и все, отлично, продолжаем.<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%93%D0%B0%D0%B2%D1%80%D0%B8%D0%BB%D1%8E%D0%BA'>#Гаврилюк</a> М.Н. Дифференциальные уравнения <a data-link='/feed?section=search&amp;q=%23%D1%84%D1%82%D1%84_%D0%9A%D1%83%D0%B1%D0%93%D0%A3'>#фтф_КубГУ</a></div>",
    "author": "Гаврилюк М.Н."
},{
    "quote": "<div class='pi_text'>Была у меня знакомая, преподавала математику в торговом. Ей приносили работу, она выбрасывала в мусорку и ставила зачёт. Ладно, не знакомая, просто женщина была. Я с такими не дружу. <br/><br/>Ярёменко Л.А. Теория функций <a data-link='/feed?section=search&amp;q=%23%D0%BC%D0%B0%D1%82%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#матфак_кубгу</a></div>",
    "author": "Ярёменко Л.А."
},{
    "quote": "<div class='pi_text'>Конечно, замужество дочери для отца - это сильный стресс! Вот представьте, что ваш папа отдаёт вас, любимую доченьку, в руки какого-то...козла!!! (Последнее слово шёпотом)<br/><br/>Лимарева Т.Ф. Английский язык, <a data-link='/feed?section=search&amp;q=%23%D1%80%D0%B3%D1%84_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ргф_кубгу</a></div>",
    "author": "Лимарева Т.Ф."
},{
    "quote": "<div class='pi_text'>- Хорошо.<br/>- Ничего хорошего, скажи понятно!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Коновалов</a> А. В.<br/><a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%A5%D0%B8%D0%92%D0%A2_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#ФХиВТ_кубгу</a></div>",
    "author": "Хорошо.<br/>- Ничего хорошего, скажи понятно!<br/><br/><a data-link='/feed?section=search&amp;q=%23%D0%9A%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2'>#Коновалов</a> А. В."
},{
    "quote": "<div class='pi_text zoom_text'>Троянские девушки заманили Гектора в укромное место, где его пронзили стрелой в другое укромное место. Да, в пятку.<br/><br/>Мороз О.Н., 'История античной литературы'. <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>А я вам всем желаю работать преподавателями... И это не проклятие.<br/><br/>Казаков Г.А. Правоведение <a data-link='/feed?section=search&amp;q=%23%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#эконом_кубгу</a></div>",
    "author": "Казаков Г.А."
},{
    "quote": "<div class='pi_text'>Все сели в конец аудитории.<br/>Преподаватель говорит:<br/>- Сядьте поближе!<br/>Голос из аудитории:<br/>- Там жарко.<br/>- Разденьтесь, представьте, будто вы на пляже.<br/>- Это не по уставу.<br/>- А я не буду смотреть...... на устав, а буду смотреть на вас!<br/><br/>Мороз О.Н. ' История античной литературы' <a data-link='/feed?section=search&amp;q=%23%D0%B6%D1%83%D1%80%D1%84%D0%B0%D0%BA_%D0%BA%D1%83%D0%B1%D0%B3%D1%83'>#журфак_кубгу</a></div>",
    "author": "Мороз О.Н."
},{
    "quote": "<div class='pi_text zoom_text'>Соответственно ... соответственно ... .<br/><br/>Петрык Я. Ю. Философия <a data-link='/feed?section=search&amp;q=%23%D0%A4%D0%9A%D0%A2%D0%B8%D0%9F%D0%9C'>#ФКТиПМ</a></div>",
    "author": "Петрык Я. Ю."
}]\`);

const authors = [];
const select = document.querySelector("#author");

document.querySelector("#submitButon").addEventListener("click", updateQuote);

for (let note of db) {
    if (!authorCheck(authors, note.author) && note.author.length < 30) {
        authors.push(note.author);
        let option = document.createElement("option");
        option.innerText = note.author;
        select.append(option);
        console.log("prepod");
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function updateQuote(event) {
    const currentAuthor = select.value;

    const allQuotesCurrentAuthor = [];

    for (let note of db) {
        if (note.author == currentAuthor) {
            allQuotesCurrentAuthor.push(note.quote);
        }
    }

    const randValue = getRandomInt(0, allQuotesCurrentAuthor.length);

    document.querySelector("#quote").innerHTML =
        allQuotesCurrentAuthor[randValue];
}

function authorCheck(authors, author) {
    authors.forEach((element) => {
        if (element.split(" ")[0] == author.split(" ")[0]) {
            return true;
        }
    });
    return false;
}

        </script>
    </body>
</html>
`

module.exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: body,
    };
};
