/*********/
/* VISIT */
/*********/

/* API -> URL */
const api_remote = "http://192.168.0.200:3000";

/****************************************/
/*********** EXAMPLE -> START ***********/
/****************************************/
/*  */  import { useParams } from "react-router-dom";
/*  */  import { useEffect } from "react";
/*  */  import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
/*  */  
/*  */  const visitState = atom({
/*  */      key: "visitState",
/*  */      default: "",
/*  */  });
/*  */  
/*  */  const visitResults = selector({
/*  */      key: "visitResults",
/*  */      get: ({ get }) => {
/*  */          // return test_api_visit();
/*  */      },
/*  */  });
/*  */  
/*  */  export function useVisit() {
/*  */      const params = useParams();
/*  */      const item = params.item;
/*  */  
/*  */      useEffect(() => {
/*  */          setRecoilQuery(item);
/*  */      }, [item]);
/*  */  
/*  */      const setRecoilQuery = useSetRecoilState(visitState);
/*  */      const results = useRecoilValue(visitResults);
/*  */      return results;
/*  */  }
/****************************************/
/*********** EXAMPLE -> END *************/
/****************************************/
