
export default function Button({
  w,
  backgroundColor,
  color,
  text,
  onClick,
  style,
  styleDotted,
  icon,
  twoicons,
  icon1,
  icon2,
}) {
  return (
    <div
      onClick={onClick}
      className="button-dotted"
      style={{
        width: w || "auto",
        padding: "8px",

        backgroundColor: backgroundColor || "white",
        color: color || "gray",
        transition: "visibility 1s linear 0s",
        ...style,
      }}
    >
      <div
        style={{
          width: "auto",
          borderStyle: "dotted",
          padding: "10px 20px",
          textTransform: "uppercase",
          display: "flex",
          justifyContent: twoicons ? "space-between" : "center",
          textAlign: "center",
          cursor: "pointer",
          ...styleDotted,
        }}
      >
        {twoicons ? (
          <>
            {icon1} {text} {icon2}
          </>
        ) : text ? (
          text
        ) : (
          icon
        )}
      </div>
    </div>
  );
}
