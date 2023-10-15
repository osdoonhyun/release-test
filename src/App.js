import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [questions, setQuestions] = useState([]);
  const getQuestions = async () => {
    try {
      const { data } = await axios.get('https://selq.store/api/questions');
      console.log('DATA', data.body.data);
      setQuestions(data?.body.data);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      <h1>질문</h1>
      {questions?.map((question, index) => (
        <h1 key={index}>{question.question}</h1>
      ))}
    </div>
  );
}
