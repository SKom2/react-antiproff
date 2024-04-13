import Phone from '@assets/icons/Phone';
import Mail from '@assets/icons/Mail';
import { useAppSelector } from '@hooks/redux';

const UserInfo = () => {
  const userData = useAppSelector((state) => state.userReducer.data);

  if (!userData || Array.isArray(userData)) {
    return null;
  }

  return (
    <div className="grid grid-cols-[1fr_8fr] max-md:block">
      <div className="max-md:hidden" />
      <div className="flex gap-[129px] max-w-[947px] max-lg:gap-[60px] max-md:flex-col-reverse max-md:gap-8 ">
        <div className="flex flex-col gap-6 text-ts text-black max-w-[630px] max-lg:gap-4 max-md:text-ts">
          <p>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты.
          </p>
          <p>
            В работе с клиентами недостаточно просто решить конкретную проблему
            или помочь справиться с трудностями. Не менее важно уделять внимание
            обмену знаниями: &quot;Один из самых позитивных моментов — это
            осознание того, что ты помог клиенту перейти на совершенно новый
            уровень компетентности, уверенность в том, что после окончания
            проекта у клиента есть все необходимое, чтобы дальше развиваться
            самостоятельно&quot;.
          </p>
          <p>
            Помимо разнообразных проектов для клиентов финансового сектора,
            Сорин ведет активную предпринимательскую деятельность. Он является
            совладельцем сети клиник эстетической медицины в Швейцарии,
            предлагающей инновационный подход к красоте, а также инвестором
            других бизнес-проектов.
          </p>
        </div>
        <div className="flex flex-col gap-6 text-ts">
          <div className="flex gap-2">
            <Phone />
            <span className="text-ts">+7 (954) 333-44-55</span>
          </div>
          <div className="flex gap-2">
            <Mail />
            <span className="text-ts">{userData.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
