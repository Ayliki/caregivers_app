import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, FormControlLabel, Checkbox, Box, FormGroup, FormLabel, RadioGroup, Radio } from '@mui/material';
import axios from 'axios';
import './ContactForm.css';
import { Link } from 'react-router-dom';
import { FormValues } from '../../interface';

const ContactForm: React.FC = () => {
    const initialValues: FormValues = {
        surname: '',
        name: '',
        patronymic: '',
        maidenName: '',
        birthDate: '',
        city: '',
        district: '',
        registrationAddress: '',
        actualAddress: '',
        ownPhone: '',
        relativePhone: '',
        maritalStatus: '',
        hasChildren: false,
        passportDetails: '',
        hasBankCard: false,
        experienceYears: '',
        schedule: [],
        hasMedicalEducation: false,
        educationInstitution: '',
        specialty: '',
        possibleEmployment: '',
        nationality: '',
        hasPermanentRegistration: false,
        alcoholPreference: '',
        alcoholFrequency: '',
        creditDetails: [{ bank: '', amount: '' }],
        covidStatus: '',
        covidIllnessDate: '',
        criminalRecord: false,
        hasCar: false,
        smokes: false,
        drives: false,
        caredAgeGroup: [],
        medicalConditionsExperience: [],
        medicalProceduresExperience: [],
        dutiesWillingToPerform: [],
        additionalExperience: '',
        caregivingExperience: '', // <-- Initial value for caregiving experience
        declaration: false,
        recommendationDetails: [
            { name: '', phone: '', position: '' },
            { name: '', phone: '', position: '' },
            { name: '', phone: '', position: '' }
        ],
        lastWorkPlaces: [
            { company: '', position: '', duration: '' },
            { company: '', position: '', duration: '' },
            { company: '', position: '', duration: '' }
        ],
    };



    const validationSchema = Yup.object({
        surname: Yup.string().required('Фамилия обязательна'),
        name: Yup.string().required('Имя обязательно'),
        patronymic: Yup.string().required('Отчество обязательно'),
        birthDate: Yup.date().required('Дата рождения обязательна'),
        ownPhone: Yup.string().required('Контактный телефон обязателен'),
        passportDetails: Yup.string().required('Паспортные данные обязательны'),
        nationality: Yup.string().required('Национальность обязательна'),
    });

    const handleSubmit = async (values: FormValues) => {
        try {
            await axios.post('http://localhost:5000/api/send', values);
            alert('Форма успешно отправлена!');
        } catch (error) {
            alert('Ошибка при отправке формы');
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, errors, touched }) => (
                <Form className="contact-form">
                    {/* Section 1: Personal Details */}
                    <Box className="form-section">
                        <TextField
                            fullWidth
                            name="surname"
                            label="Фамилия"
                            value={values.surname}
                            onChange={handleChange}
                            error={touched.surname && Boolean(errors.surname)}
                            helperText={touched.surname && errors.surname}
                        />
                        <TextField
                            fullWidth
                            name="name"
                            label="Имя"
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />
                        <TextField
                            fullWidth
                            name="patronymic"
                            label="Отчество"
                            value={values.patronymic}
                            onChange={handleChange}
                            error={touched.patronymic && Boolean(errors.patronymic)}
                            helperText={touched.patronymic && errors.patronymic}
                        />
                        <TextField
                            fullWidth
                            name="maidenName"
                            label="Фамилия до замужества"
                            value={values.maidenName}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            name="birthDate"
                            label="Дата рождения"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={values.birthDate}
                            onChange={handleChange}
                            error={touched.birthDate && Boolean(errors.birthDate)}
                            helperText={touched.birthDate && errors.birthDate}
                        />
                    </Box>

                    {/* Section 2: Family Details */}
                    <Box className="form-section">
                        <FormGroup>
                            <FormLabel component="legend">Семейное положение</FormLabel>
                            <RadioGroup name="maritalStatus" value={values.maritalStatus} onChange={handleChange}>
                                <FormControlLabel value="Холост/Не замужем" control={<Radio />} label="Холост/Не замужем" />
                                <FormControlLabel value="Женат/Замужем" control={<Radio />} label="Женат/Замужем" />
                                <FormControlLabel value="Разведен(а)" control={<Radio />} label="Разведен(а)" />
                                <FormControlLabel value="Вдовец/Вдова" control={<Radio />} label="Вдовец/Вдова" />
                            </RadioGroup>
                        </FormGroup>
                        <FormControlLabel
                            control={<Checkbox name="hasChildren" checked={values.hasChildren} onChange={handleChange} />}
                            label="Есть ли в вашей семье дети или внуки не достигшие 14 лет?"
                        />
                    </Box>

                    {/* Section 3: Address Details */}
                    <Box className="form-section">
                        <TextField
                            fullWidth
                            name="city"
                            label="Город проживания"
                            value={values.city}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            name="district"
                            label="Район проживания"
                            value={values.district}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            name="registrationAddress"
                            label="Адрес по прописке"
                            value={values.registrationAddress}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            name="actualAddress"
                            label="Адрес фактического проживания"
                            value={values.actualAddress}
                            onChange={handleChange}
                        />
                    </Box>

                    {/* Section 4: Contact Details */}
                    <Box className="form-section">
                        <TextField
                            fullWidth
                            name="ownPhone"
                            label="Контактные телефоны (собственные)"
                            value={values.ownPhone}
                            onChange={handleChange}
                            error={touched.ownPhone && Boolean(errors.ownPhone)}
                            helperText={touched.ownPhone && errors.ownPhone}
                        />
                        <TextField
                            fullWidth
                            name="relativePhone"
                            label="Дополнительные контактные телефоны (родственники)"
                            value={values.relativePhone}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            name="passportDetails"
                            label="Паспортные данные"
                            value={values.passportDetails}
                            onChange={handleChange}
                            error={touched.passportDetails && Boolean(errors.passportDetails)}
                            helperText={touched.passportDetails && errors.passportDetails}
                        />
                    </Box>

                    {/* Section 5: Work Details */}
                    <Box className="form-section">
                        <FormControlLabel
                            control={<Checkbox name="hasBankCard" checked={values.hasBankCard} onChange={handleChange} />}
                            label="Имеется ли карта сбербанка для начисления зарплаты?"
                        />
                        <TextField
                            fullWidth
                            name="experienceYears"
                            label="Опыт работы (лет/месяцев)"
                            value={values.experienceYears}
                            onChange={handleChange}
                        />
                        <FormGroup>
                            <FormLabel component="legend">График работы</FormLabel>
                            <FormControlLabel control={<Checkbox name="schedule" value="Дневные смены" onChange={handleChange} />} label="Дневные смены" />
                            <FormControlLabel control={<Checkbox name="schedule" value="Патронаж" onChange={handleChange} />} label="Патронаж" />
                            <FormControlLabel control={<Checkbox name="schedule" value="Короткие смены" onChange={handleChange} />} label="Короткие смены" />
                            <FormControlLabel control={<Checkbox name="schedule" value="Сутки" onChange={handleChange} />} label="Сутки" />
                            <FormControlLabel control={<Checkbox name="schedule" value="Ночные смены" onChange={handleChange} />} label="Ночные смены" />
                            <FormControlLabel control={<Checkbox name="schedule" value="С проживанием" onChange={handleChange} />} label="С проживанием" />
                        </FormGroup>
                    </Box>

                    {/* Section 6: Medical Education and Work Preferences */}
                    <Box className="form-section">
                        <FormControlLabel
                            control={<Checkbox name="hasMedicalEducation" checked={values.hasMedicalEducation} onChange={handleChange} />}
                            label="Медицинское образование"
                        />
                        <TextField
                            fullWidth
                            name="educationInstitution"
                            label="Учебное заведение"
                            value={values.educationInstitution}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            name="specialty"
                            label="Специальность"
                            value={values.specialty}
                            onChange={handleChange}
                        />
                    </Box>

                    {/* Section 7: Possible Employment */}
                    <Box className="form-section">
                        <FormGroup>
                            <FormLabel component="legend">Возможная занятость</FormLabel>
                            <FormControlLabel control={<Checkbox name="possibleEmployment" value="Совмещение" onChange={handleChange} />} label="Совмещение" />
                            <FormControlLabel control={<Checkbox name="possibleEmployment" value="Полная" onChange={handleChange} />} label="Полная" />
                        </FormGroup>
                    </Box>

                    {/* Section 8: Nationality and Permanent Registration */}
                    <Box className="form-section">
                        <TextField
                            fullWidth
                            name="nationality"
                            label="Национальность"
                            value={values.nationality}
                            onChange={handleChange}
                            error={touched.nationality && Boolean(errors.nationality)}
                            helperText={touched.nationality && errors.nationality}
                        />
                        <FormControlLabel
                            control={<Checkbox name="hasPermanentRegistration" checked={values.hasPermanentRegistration} onChange={handleChange} />}
                            label="Постоянная регистрация по месту жительства в Санкт-Петербурге или Ленинградской области"
                        />
                    </Box>

                    {/* Section 9: Alcohol Consumption */}
                    <Box className="form-section">
                        <TextField
                            fullWidth
                            name="alcoholPreference"
                            label="Какой алкоголь Вы предпочитаете?"
                            value={values.alcoholPreference}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            name="alcoholFrequency"
                            label="Сколько раз в неделю Вы употребляете спиртные напитки?"
                            value={values.alcoholFrequency}
                            onChange={handleChange}
                        />
                    </Box>

                    {/* Section 10: Credit Details */}
                    <FormGroup>
                        <FormLabel component="legend">Наличие у Вас кредитов</FormLabel>
                        {values.creditDetails.map((credit: { bank: string; amount: string}, index: number) => (
                            <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }} key={index}>
                                <TextField
                                    fullWidth
                                    name={`creditDetails[${index}].bank`}
                                    label="Банк"
                                    value={credit.bank}
                                    onChange={handleChange}
                                />
                                <TextField
                                    fullWidth
                                    name={`creditDetails[${index}].amount`}
                                    label="Сумма"
                                    value={credit.amount}
                                    onChange={handleChange}
                                />
                            </Box>
                        ))}
                    </FormGroup>

                    {/* Section 11: COVID Status */}
                    <FormGroup>
                        <FormLabel component="legend">Статус на COVID</FormLabel>
                        <FormControlLabel control={<Checkbox name="covidStatus" value="вакцинирован" onChange={handleChange} />} label="Вакцинирован" />
                        <FormControlLabel control={<Checkbox name="covidStatus" value="НЕ вакцинирован" onChange={handleChange} />} label="НЕ вакцинирован" />
                        <FormControlLabel control={<Checkbox name="covidStatus" value="переболел" onChange={handleChange} />} label="Переболел" />
                        <FormControlLabel control={<Checkbox name="covidStatus" value="НЕ переболел" onChange={handleChange} />} label="НЕ переболел" />
                    </FormGroup>
                    <TextField
                        fullWidth
                        name="covidIllnessDate"
                        label="Когда переболел? (месяц, год)"
                        value={values.covidIllnessDate}
                        onChange={handleChange}
                    />

                    {/* Section 12: Criminal Record */}
                    <FormControlLabel
                        control={<Checkbox name="criminalRecord" checked={values.criminalRecord} onChange={handleChange} />}
                        label="Судимость"
                    />

                    {/* Section 13: Car Ownership and Driving */}
                    <Box className="form-section">
                        <FormControlLabel
                            control={<Checkbox name="hasCar" checked={values.hasCar} onChange={handleChange} />}
                            label="Личный автомобиль"
                        />
                        <FormControlLabel
                            control={<Checkbox name="smokes" checked={values.smokes} onChange={handleChange} />}
                            label="Вы курите?"
                        />
                        <FormControlLabel
                            control={<Checkbox name="drives" checked={values.drives} onChange={handleChange} />}
                            label="Водите ли Вы автомобиль?"
                        />
                    </Box>

                    {/* Section 14: Age Groups of Cared People */}
                    <FormGroup>
                        <FormLabel component="legend">Возраст людей за которыми вы ухаживали</FormLabel>
                        <FormControlLabel control={<Checkbox name="caredAgeGroup" value="до 18 лет" onChange={handleChange} />} label="До 18 лет" />
                        <FormControlLabel control={<Checkbox name="caredAgeGroup" value="от 18 до 55 лет" onChange={handleChange} />} label="От 18 до 55 лет" />
                        <FormControlLabel control={<Checkbox name="caredAgeGroup" value="от 55 лет" onChange={handleChange} />} label="От 55 лет" />
                    </FormGroup>

                    {/* Section 15: Medical Conditions Experience */}
                    <FormGroup>
                        <FormLabel component="legend">Опыт работы с больными по диагнозам</FormLabel>
                        <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Деменция (болезнь Альцгеймера)" onChange={handleChange} />} label="Деменция (болезнь Альцгеймера)" />
                        <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="ДЦП" onChange={handleChange} />} label="ДЦП" />
                        <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Инсульт (постинсультная реабилитация)" onChange={handleChange} />} label="Инсульт (постинсультная реабилитация)" />
                        <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Инфаркт (постинфарктная реабилитация)" onChange={handleChange} />} label="Инфаркт (постинфарктная реабилитация)" />
                        <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Паркинсонизм (болезнь Паркинсона)" onChange={handleChange} />} label="Паркинсонизм (болезнь Паркинсона)" />
                        <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Психические расстройства" onChange={handleChange} />} label="Психические расстройства" />
                        <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Сахарный диабет" onChange={handleChange} />} label="Сахарный диабет" />
                        <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Переломы, в т.ч шейки бедра" onChange={handleChange} />} label="Переломы, в т.ч шейки бедра" />
                        <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Онкология" onChange={handleChange} />} label="Онкология (уточнить)" />
                        <FormControlLabel control={<Checkbox name="medicalConditionsExperience" value="Другое" onChange={handleChange} />} label="Другое" />
                    </FormGroup>

                    {/* Section 16: Medical Procedures Experience */}
                    <FormGroup>
                        <FormLabel component="legend">Опыт выполнения медицинских процедур</FormLabel>
                        <FormControlLabel control={<Checkbox name="medicalProceduresExperience" value="Гигиена больного" onChange={handleChange} />} label="Гигиена больного" />
                        <FormControlLabel control={<Checkbox name="medicalProceduresExperience" value="Подкожные и внутримышечные инъекции" onChange={handleChange} />} label="Подкожные и внутримышечные инъекции" />
                        <FormControlLabel control={<Checkbox name="medicalProceduresExperience" value="Работа со стомами/катетерами" onChange={handleChange} />} label="Работа со стомами/катетерами" />
                        <FormControlLabel control={<Checkbox name="medicalProceduresExperience" value="Обработка пролежней" onChange={handleChange} />} label="Обработка пролежней" />
                        <FormControlLabel control={<Checkbox name="medicalProceduresExperience" value="Уход за лежачими больными" onChange={handleChange} />} label="Уход за лежачими больными" />
                    </FormGroup>

                    {/* Section 17: Willingness to Perform Duties */}
                    <FormGroup>
                        <FormLabel component="legend">Готовы ли Вы выполнять след. обязанности?</FormLabel>
                        <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Приготовление еды" onChange={handleChange} />} label="Приготовление еды" />
                        <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Уборка помещения" onChange={handleChange} />} label="Уборка помещения" />
                        <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Стирка" onChange={handleChange} />} label="Стирка" />
                        <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Глажка белья" onChange={handleChange} />} label="Глажка белья" />
                        <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Покупка продуктов и медикаментов" onChange={handleChange} />} label="Покупка продуктов и медикаментов" />
                        <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Прогулки" onChange={handleChange} />} label="Прогулки" />
                        <FormControlLabel control={<Checkbox name="dutiesWillingToPerform" value="Разовые поручения" onChange={handleChange} />} label="Разовые поручения" />
                    </FormGroup>

                    {/* Section 18: Additional Experience */}
                    <Box sx={{ marginBottom: 2 }}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            name="additionalExperience"
                            label="Кратко напишите о Вашем опыте ухода"
                            value={values.additionalExperience}
                            onChange={handleChange}
                        />
                    </Box>

                    {/* Section 20: Recommendation Details */}
                    <Box className="form-section">
                        <FormGroup>
                            <FormLabel component="legend" className="form-label">
                                Сообщите, кто может дать рекомендацию о вашей работе (не менее трех): Имя, телефон, должность рекомендодателя
                            </FormLabel>
                            {values.recommendationDetails.map(( recommendation: {name: string; phone: string; position: string }, index: number) => (
                                <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }} key={index}>
                                    <TextField
                                        fullWidth
                                        name={`recommendationDetails[${index}].name`}
                                        label={`Имя ${index + 1}`}
                                        value={recommendation.name}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        name={`recommendationDetails[${index}].phone`}
                                        label={`Телефон ${index + 1}`}
                                        value={recommendation.phone}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        name={`recommendationDetails[${index}].position`}
                                        label={`Должность ${index + 1}`}
                                        value={recommendation.position}
                                        onChange={handleChange}
                                    />
                                </Box>
                            ))}
                        </FormGroup>
                    </Box>

                    {/* Section for Last Work Places */}
                    <Box className="form-section">
                        <FormGroup>
                            <FormLabel component="legend" className="form-label">
                                Назовите 3 последних места работы:
                            </FormLabel>
                            {values.lastWorkPlaces.map((job: { company: string; position: string; duration: string }, index: number) => (
                                <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }} key={index}>
                                    <TextField
                                        fullWidth
                                        name={`lastWorkPlaces[${index}].company`}
                                        label={`Компания ${index + 1}`}
                                        value={job.company}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        name={`lastWorkPlaces[${index}].position`}
                                        label={`Должность ${index + 1}`}
                                        value={job.position}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        name={`lastWorkPlaces[${index}].duration`}
                                        label={`Продолжительность ${index + 1}`}
                                        value={job.duration}
                                        onChange={handleChange}
                                    />
                                </Box>
                            ))}
                        </FormGroup>
                    </Box>



                    {/* Section 22: Declaration */}
                    <Box className="form-section">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="declaration"
                                    checked={values.declaration}
                                    onChange={handleChange}
                                />
                            }
                            label="Настоящим заявляю, что вся вышеизложенная информация соответствует действительности. Я понимаю, что предоставление ложной информации или скрытие правдивой информации могут привести к уголовной ответственности."
                        />
                    </Box>

                    <Box className="form-section">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="declaration"
                                    checked={values.declaration}
                                    onChange={handleChange}
                                />
                            }
                            label={
                                <>
                                    Отправляя данную форму, я принимаю условия{' '}
                                    <Link to="/contract" target="_blank">Договора</Link>{' '}
                                    и{' '}
                                    <Link to="/privacy-policy" target="_blank">Политики обработки персональных данных</Link>
                                </>
                            }
                        />
                    </Box>

                    <Button className="submit-button" variant="contained" fullWidth type="submit">
                        Отправить
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;