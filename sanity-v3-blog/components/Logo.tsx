import "../styles/globals.css";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQEb1glLCUnlrg/profile-displayphoto-shrink_400_400/0/1671044012953?e=1676505600&v=beta&t=-MXWy0ZVwd9o13qhxXLanieYZDpXsW4MO4tmAVEFwu4"
        alt="logo"
        className="rounded-full object-cover"
        width={50}
        height={50}
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
