const { createApp, ref, reactive } = Vue;

createApp({
  setup() {
    const tourForm = reactive({
      name: '',
      phone: '',
      message: ''
    });

    const calcForm = reactive({
      product: '',
      quantity: '',
      contactMethod: 'max',
      phone: '',
      message: ''
    });

    const faqOpen = ref([false, true, false, false]);

    const submitTourForm = () => {
      if (!tourForm.name || !tourForm.phone) {
        tourForm.message = 'Заполните имя и телефон';
        setTimeout(() => tourForm.message = '', 3000);
        return;
      }
      tourForm.message = 'Спасибо! Мы свяжемся с вами для проведения экскурсии.';
      tourForm.name = '';
      tourForm.phone = '';
      setTimeout(() => tourForm.message = '', 3000);
    };

    const submitCalcForm = () => {
      if (!calcForm.product || !calcForm.quantity || !calcForm.phone) {
        calcForm.message = 'Заполните все поля';
        setTimeout(() => calcForm.message = '', 3000);
        return;
      }
      calcForm.message = `Расчёт отправлен в ${calcForm.contactMethod === 'max' ? 'MAX' : 'Telegram'}!`;
      calcForm.product = '';
      calcForm.quantity = '';
      calcForm.phone = '';
      setTimeout(() => calcForm.message = '', 3000);
    };

    const toggleFaq = (index) => {
      faqOpen.value[index] = !faqOpen.value[index];
    };

    const openRequestModal = () => {
      console.log('Оставить заявку\nПожалуйста, заполните форму обратной связи');
    };

    const openPriceModal = () => {
      console.log('Запросить прайс-лист\nПожалуйста, заполните форму "Рассчитать стоимость"');
    };

    const acceptCookies = () => {
      console.log('Куки приняты')
    };

    return {
      tourForm,
      calcForm,
      faqOpen,
      submitTourForm,
      submitCalcForm,
      toggleFaq,
      openCallbackModal,
      openRequestModal,
      openPriceModal,
      openBriefModal,
      acceptCookies
    };
  }
}).mount('#app');
