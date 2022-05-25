import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import $api from "../../http";
export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
  const result = await $api.get('/questions');

  return result.data;
});

export const fetchQuestion = createAsyncThunk('questions/fetchQuestion', async (id) => {
  const result = await $api.get(`/questions/${id}`);

  return result.data;
});


export const createQuestion = createAsyncThunk('users/createQuestion', async (newQuestion) => {

  const result = await $api.post('/questions', {
    text: newQuestion.text,
    answer: newQuestion.answer,
    tags: newQuestion.tags,
  });

  return [result.data];
});

export const updateQuestion = createAsyncThunk('users/updateQuestion', async ({id, text, answer, tags}) => {
  const result = await $api.put(`/questions/${id}`, {
    text,
    answer,
    tags: tags.text,
  });

  return result.data;
});

export const deleteQuestion = createAsyncThunk('users/deleteQuestion', async (id) => {
  await $api.delete(`/questions/${id}`);
  return id;
});

export const searchTags = createAsyncThunk('users/searchTags', async (tags) => {
  // await $api.get(`/questions/?tags=${tags}`);
  return [
      {
        id: 1,
        text: 'Что поддерживает Mircrosoft?',
        answer: 'Microsoft поддержала предложение добавить в JavaScript необязательный и стираемый синтаксис типов, чтобы сделать язык TypeScript быстрее и проще в использовании. В новом сообщении в блоге софтверный гигант предоставил дополнительную информацию об этом предложении и о том, каковы его цели. По сути, предложение требует добавления аннотаций типов в код JavaScript, которые могут быть проверены внешними средствами проверки типов и обработаны как комментарии движком JavaScript во время выполнения.',
        tags: ['MICROSOFT', 'JAVASCRIPT', 'TYPESCRIPT', 'ПРОГРАММИРОВАНИЕ'],
      },
      {
        id: 2,
        text: 'Какой конкурс запустил Telegram?',
        answer: '4 марта 2022 года Telegram запустил в телеграм-канале Contests конкурс среди разработчиков на создание модуля для преобразования лиц на видео. Призовой фонд конкурса $40 тыс. Срок сдачи работ до 13 марта. Итоги конкурса будут объявлены 17 марта.\n' +
            '\n' +
            'Задача конкурса состоит в том, чтобы создать кроссплатформенный модуль на С++ для корректировки внешности и встроить этот модуль в демонстрационное приложение на iOS или Android, которое бы в режиме реального времени преобразовывало видео из фронтальной камеры.',
        tags: ['text', 'Некрасов'],
      },
    {
      id: 3,
      text: 'Что обновила Mozilla?',
      answer: 'Mozilla обновила ресурс MDN (Mozilla Developer Network). Изменен внешний вид веб-портала, улучшена система поиска и переработана сортировка по темам. Вместе с этим компания анонсировала премиальную подписку MDN Plus, позволяющую персонализировать документацию под собственные нужды.Mozila переработала дизайн сайта MDN. Отмечается, что навигация стала удобнее, а поиск по статьям — точнее. Появилась темная тема, основное оформление тоже поменялось. В левом верхнем углу появился раскрывающийся список основных тем портала: HTML, CSS, JavaScript, HTTP, Web APIs и Web Технологии. В центральной части страницы теперь располагается раздел последних изменений.',
      tags: ['HTML', 'CSS', 'JAVASCRIPT', 'HTTP', 'WEBAPIS', 'WebТехнологии', 'Mozilla', 'MDN'],
    },
  ];
});

export const userInfoSlice = createSlice({
  name: 'questions',
  initialState: { questions: [], loading: 'idle', question: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
    builder.addCase(fetchQuestion.fulfilled, (state, action) => {
      state.question = action.payload;
    });
    builder.addCase(createQuestion.fulfilled, (state, action) => {
      state.questions.push(...action.payload);
    });
    builder.addCase(updateQuestion.fulfilled, (state, action) => {
      state.questions = state.questions.map((question) => {
        if (question.id === action.payload.id) {
          return action.payload;
        } else {
          return question;
        }
      })

    });
    builder.addCase(deleteQuestion.fulfilled, (state, action) => {
      state.questions = state.questions.filter((question) => question.id !== action.payload);
    });
    builder.addCase(searchTags.fulfilled, (state, action) => {
      state.questions = action.payload;
      // state.questions = state.questions.filter((question) => question.id !== action.payload);
    });
  },
});

export default userInfoSlice.reducer;
