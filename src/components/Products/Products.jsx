import React from "react";
import {
    Container,
    CssBaseline,
    Grid,
    Toolbar,
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField
} from '@material-ui/core';

import Product from "./Product/Product";
import useStyles from './styles';
import logo from "../../assets/apple-footer.png";
import CloseIcon from "@material-ui/icons/Close";
import TextMobileStepper from "./Slider";
//import mapImg from '../../assets/map.webp';

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} style={{minHeight: 40}}/>
            <div style={{textAlign: 'center'}}>
                <TextMobileStepper/>
            </div>
            <Container>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Поиск товаров" style={{width: "100%"}}/>
                </form>
                <br/>
                <Grid container justify="flex-start" spacing={3}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={4}>
                            <Product product={product} onAddToCart={onAddToCart}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <a href="https://yandex.ru/map-widget/v1/?um=constructor%3A3f533203cc2a5d01bf04339194f1fb9c1c3806704c15fde6d8b7614d8ca9ad83&amp;source=constructor" target="_blank" rel="noreferrer">
                <div style={{marginTop: '50px', pointerEvents: 'none'}}>
                    <iframe title="YaMAp" src="https://yandex.ru/map-widget/v1/?um=constructor%3A3f533203cc2a5d01bf04339194f1fb9c1c3806704c15fde6d8b7614d8ca9ad83&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
                </div>
            </a>
            <footer>
                <Toolbar className={classes.footer}>
                    <CssBaseline/>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="iStore" height="25px" className={classes.image}/> <span
                        style={{color: '#fff'}}>iStore 2021</span>
                    </Typography>
                    <Typography variant="h6" color="inherit" className={classes.titleTel}>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <a href="tel:+77777777777"
                               style={{color: '#fff', textDecoration: 'none'}}>+7(777)-777-77-77
                            </a>
                        </div>
                    </Typography>
                </Toolbar>
                <Toolbar className={classes.footer}>
                    <CssBaseline/>
                    <Typography variant="h6" color="inherit" className={classes.policy}>
                        <Button variant="h6" color="inherit" className={classes.policyBtn}
                                onClick={handleClickOpen('body')}>Политика обработки данных
                        </Button>
                    </Typography>
                    {/************************************************************************************/}
                    <CssBaseline/>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <DialogTitle id="scroll-dialog-title" className={classes.policyTitle}>Политика обработки
                                данных</DialogTitle>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close"
                                        style={{fontWeight: 900, color: '#f50057'}} className={classes.policyClose}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                        <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={descriptionElementRef}
                                tabIndex={-1}>
                                <h3>1. Общие положения</h3>
                                <ul style={{listStyle: "none"}}>
                                    <li> Настоящая политика обработки персональных данных составлена в соответствии с
                                        требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных»
                                        и
                                        определяет порядок обработки персональных данных и меры по обеспечению
                                        безопасности
                                        персональных данных, предпринимаемые iStore (далее – Оператор).
                                    </li>
                                    <li> 1.1. Оператор ставит своей важнейшей целью и условием осуществления своей
                                        деятельности
                                        соблюдение прав и свобод человека и гражданина при обработке его персональных
                                        данных, в
                                        том числе защиты прав на неприкосновенность частной жизни, личную и семейную
                                        тайну.
                                    </li>
                                    <li> 1.2. Настоящая политика Оператора в отношении обработки персональных данных
                                        (далее –
                                        Политика) применяется ко всей информации, которую Оператор может получить о
                                        посетителях
                                        веб-сайта http://istore-d8012.web.app.
                                    </li>
                                </ul>

                                <h3>2. Основные понятия, используемые в Политике</h3>
                                <ul style={{listStyle: "none"}}>
                                    <li> 2.1. Автоматизированная обработка персональных данных – обработка персональных
                                        данных с
                                        помощью средств вычислительной техники;
                                    </li>
                                    <li> 2.2. Блокирование персональных данных – временное прекращение обработки
                                        персональных
                                        данных (за исключением случаев, если обработка необходима для уточнения
                                        персональных
                                        данных);
                                    </li>
                                    <li> 2.3. Веб-сайт – совокупность графических и информационных материалов, а также
                                        программ
                                        для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому
                                        адресу
                                        http://istore-d8012.web.app;
                                    </li>
                                    <li> 2.4. Информационная система персональных данных — совокупность содержащихся в
                                        базах
                                        данных персональных данных, и обеспечивающих их обработку информационных
                                        технологий и
                                        технических средств;
                                    </li>
                                    <li> 2.5. Обезличивание персональных данных — действия, в результате которых
                                        невозможно
                                        определить без использования дополнительной информации принадлежность
                                        персональных
                                        данных конкретному Пользователю или иному субъекту персональных данных;
                                    </li>
                                    <li> 2.6. Обработка персональных данных – любое действие (операция) или совокупность
                                        действий
                                        (операций), совершаемых с использованием средств автоматизации или без
                                        использования
                                        таких средств с персональными данными, включая сбор, запись, систематизацию,
                                        накопление,
                                        хранение, уточнение (обновление, изменение), извлечение, использование, передачу
                                        (распространение, предоставление, доступ), обезличивание, блокирование,
                                        удаление,
                                        уничтожение персональных данных;
                                    </li>
                                    <li> 2.7. Оператор – государственный орган, муниципальный орган, юридическое или
                                        физическое
                                        лицо, самостоятельно или совместно с другими лицами организующие и (или)
                                        осуществляющие
                                        обработку персональных данных, а также определяющие цели обработки персональных
                                        данных,
                                        состав персональных данных, подлежащих обработке, действия (операции),
                                        совершаемые с
                                        персональными данными;
                                    </li>
                                    <li> 2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к
                                        определенному или определяемому Пользователю веб-сайта
                                        http://istore-d8012.web.app;
                                    </li>
                                    <li> 2.9. Пользователь – любой посетитель веб-сайта http://istore-d8012.web.app;
                                    </li>
                                    <li> 2.10. Предоставление персональных данных – действия, направленные на раскрытие
                                        персональных данных определенному лицу или определенному кругу лиц;
                                    </li>
                                    <li> 2.11. Распространение персональных данных – любые действия, направленные на
                                        раскрытие
                                        персональных данных неопределенному кругу лиц (передача персональных данных) или
                                        на
                                        ознакомление с персональными данными неограниченного круга лиц, в том числе
                                        обнародование персональных данных в средствах массовой информации, размещение в
                                        информационно-телекоммуникационных сетях или предоставление доступа к
                                        персональным
                                        данным каким-либо иным способом;
                                    </li>
                                    <li> 2.12. Трансграничная передача персональных данных – передача персональных
                                        данных на
                                        территорию иностранного государства органу власти иностранного государства,
                                        иностранному
                                        физическому или иностранному юридическому лицу;
                                    </li>
                                    <li> 2.13. Уничтожение персональных данных – любые действия, в результате которых
                                        персональные данные уничтожаются безвозвратно с невозможностью дальнейшего
                                        восстановления содержания персональных данных в информационной системе
                                        персональных
                                        данных и (или) уничтожаются материальные носители персональных данных.
                                    </li>
                                </ul>

                                <h3>3. Оператор может обрабатывать следующие персональные данные Пользователя</h3>
                                <ul style={{listStyle: "none"}}>
                                    <li> 3.1. Фамилия, имя, отчество;</li>
                                    <li> 3.2. Номер телефона;</li>
                                    <li> 3.3. Адрес электронной почты;</li>
                                    <li> 3.4. Также на сайте происходит сбор и обработка обезличенных данных о
                                        посетителях (в
                                        т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и
                                        Гугл
                                        Аналитика и других).
                                    </li>
                                    <li> 3.5. Вышеперечисленные данные далее по тексту Политики объединены общим
                                        понятием
                                        Персональные данные.
                                    </li>
                                </ul>

                                <h3>4. Цели обработки персональных данных</h3>
                                <ul style={{listStyle: "none"}}>
                                    <li> 4.1. Цель обработки персональных данных Пользователя — информирование
                                        Пользователя
                                        посредством отправки электронных писем; предоставление доступа Пользователю к
                                        сервисам,
                                        информации и/или материалам, содержащимся на веб-сайте.
                                    </li>
                                    <li> 4.2. Также Оператор имеет право направлять Пользователю уведомления о новых
                                        продуктах и
                                        услугах, специальных предложениях и различных событиях. Пользователь всегда
                                        может
                                        отказаться от получения информационных сообщений, направив Оператору письмо на
                                        адрес
                                        электронной почты istore@mail.ru с пометкой «Отказ от уведомлений о новых
                                        продуктах и
                                        услугах и специальных предложениях».
                                    </li>
                                    <li> 4.3. Обезличенные данные Пользователей, собираемые с помощью сервисов
                                        интернет-статистики, служат для сбора информации о действиях Пользователей на
                                        сайте,
                                        улучшения качества сайта и его содержания.
                                    </li>
                                </ul>

                                <h3>5. Правовые основания обработки персональных данных</h3>
                                <ul style={{listStyle: "none"}}>
                                    <li> 5.1. Оператор обрабатывает персональные данные Пользователя только в случае их
                                        заполнения и/или отправки Пользователем самостоятельно через специальные формы,
                                        расположенные на сайте http://istore-d8012.web.app. Заполняя соответствующие
                                        формы и/или
                                        отправляя свои персональные данные Оператору, Пользователь выражает свое
                                        согласие с
                                        данной Политикой.
                                    </li>
                                    <li> 5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если
                                        это
                                        разрешено в настройках браузера Пользователя (включено сохранение файлов
                                        «cookie» и
                                        использование технологии JavaScript).
                                    </li>
                                </ul>

                                <h3>6. Порядок сбора, хранения, передачи и других видов обработки персональных
                                    данных</h3>
                                <ul style={{listStyle: "none"}}>
                                    <li> Безопасность персональных данных, которые обрабатываются Оператором,
                                        обеспечивается
                                        путем реализации правовых, организационных и технических мер, необходимых для
                                        выполнения
                                        в полном объеме требований действующего законодательства в области защиты
                                        персональных
                                        данных.
                                    </li>
                                    <li> 6.1. Оператор обеспечивает сохранность персональных данных и принимает все
                                        возможные
                                        меры, исключающие доступ к персональным данным неуполномоченных лиц.
                                    </li>
                                    <li> 6.2. Персональные данные Пользователя никогда, ни при каких условиях не будут
                                        переданы
                                        третьим лицам, за исключением случаев, связанных с исполнением действующего
                                        законодательства.
                                    </li>
                                    <li> 6.3. В случае выявления неточностей в персональных данных, Пользователь может
                                        актуализировать их самостоятельно, путем направления Оператору уведомление на
                                        адрес
                                        электронной почты Оператора istore@mail.ru с пометкой «Актуализация персональных
                                        данных».
                                    </li>
                                    <li> 6.4. Срок обработки персональных данных является неограниченным. Пользователь
                                        может в
                                        любой момент отозвать свое согласие на обработку персональных данных, направив
                                        Оператору
                                        уведомление посредством электронной почты на электронный адрес Оператора
                                        istore@mail.ru
                                        с пометкой «Отзыв согласия на обработку персональных данных».
                                    </li>
                                </ul>

                                <h3>7. Трансграничная передача персональных данных</h3>
                                <ul style={{listStyle: "none"}}>
                                    <li> 7.1. Оператор до начала осуществления трансграничной передачи персональных
                                        данных обязан
                                        убедиться в том, что иностранным государством, на территорию которого
                                        предполагается
                                        осуществлять передачу персональных данных, обеспечивается надежная защита прав
                                        субъектов
                                        персональных данных.
                                    </li>
                                    <li> 7.2. Трансграничная передача персональных данных на территории иностранных
                                        государств,
                                        не отвечающих вышеуказанным требованиям, может осуществляться только в случае
                                        наличия
                                        согласия в письменной форме субъекта персональных данных на трансграничную
                                        передачу его
                                        персональных данных и/или исполнения договора, стороной которого является
                                        субъект
                                        персональных данных.
                                    </li>
                                </ul>

                                <h3>8. Заключительные положения</h3>
                                <ul style={{listStyle: "none"}}>
                                    <li> 8.1. Пользователь может получить любые разъяснения по интересующим вопросам,
                                        касающимся
                                        обработки его персональных данных, обратившись к Оператору с помощью электронной
                                        почты
                                        istore@mail.ru.
                                    </li>
                                    <li> 8.2. В данном документе будут отражены любые изменения политики обработки
                                        персональных
                                        данных Оператором. Политика действует бессрочно до замены ее новой версией.
                                    </li>
                                    <li> 8.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет
                                        по
                                        адресу http://istore-d8012.web.app.
                                    </li>
                                </ul>

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        </DialogActions>
                    </Dialog>
                    {/************************************************************************************/}
                </Toolbar>
            </footer>
        </main>
    )
}

export default Products;
