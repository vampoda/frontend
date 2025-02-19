import React, { useEffect, useState } from "react";

interface Filters {
  name: string;
  variants: string[] | number[] | boolean[];
}

let filters: Filters[] = [
  {
    name: "size",
    variants: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  },
 {
name:"wash-type",
variants:["acid","base","acidic","gentic"]
 },

  {
    name: "brand",
    variants: ["john players", "jack jones", "us polo", "levis", "diesel"],
  },
  {
    name: "fit-type",
    variants: ["straight", "cropped", "skinny", "relaxed", "elastic"],
  },
  {
    name: "style",
    variants: [
      "acid washed",
      "slighly washed",
      "moldly washed",
      "clean",
      "drenched",
      "polyster",
    ],
  },
];
const RecursiveFilter = () => {
  const [variant, setVariant] = useState<any>();
  const [menu, setMenu] = useState<Boolean>(true);
  const [active, setActive] = useState<number | null>();
  const [selectedVariants, setSelectedVariants] = useState<{
    [key: string]: any[];
  }>({});

  useEffect(() => {
    console.log(selectedVariants);
  }, [selectedVariants]);

  useEffect(() => {
    function handlevariant() {
      try {
        return filters.filter((current, index) => {
          if (index === active) {
            setVariant(current.variants);
            console.log(current.variants);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    handlevariant();
  }, [active]);

  if (!menu) {
    return null;
  }

  const handleVariantChange = (filterName: string, variant: any) => {
    setSelectedVariants((previousSelectedVariants) => {
      const currentVariants = previousSelectedVariants[filterName] || [];

      if (currentVariants.includes(variant)) {
        return {
          ...previousSelectedVariants,
          [filterName]: currentVariants.filter((item) => item != variant),
        };
      } else {
        return {
          ...previousSelectedVariants,
          [filterName]: [...currentVariants, variant],
        };
      }
    });
  };
  const clickHandler = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <button className="closer" type="button" onClick={clickHandler}>
          x
        </button>
        <div
          style={{ width: "300px", background: "palegreen", height: "100vh" ,overflowY:"auto"}}>
          {filters.map((filter, index) => (
            <li
              style={{
                background: `${active === index ? "black" : ""}`,
                color: active === index ? "white" : "black",
                cursor: "pointer",
              }}
              onClick={() => setActive((prev) => index)}
              key={index}
              className="heading"
            >
              {filter.name}
            </li>
          ))}
        </div>
        <div className="list">
          <ul>
           
            {variant &&
              variant.map((variant, index) => (
                <li
                  key={index}
                  className="value"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={
                      active !== undefined && filters[active]
                        ? selectedVariants[filters[active].name]?.includes(
                            variant
                          )
                        : false
                    }
                    onChange={() =>
                      handleVariantChange(filters[active].name, variant)
                    }
                    style={{ height: "25px", width: "30px" }}
                  />
                  <span>{variant}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    
    <button className="filter-trigger">FILTER MENU</button>
    </>
  );
};

export default RecursiveFilter;
