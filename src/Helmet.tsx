import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export const TheHelm = (props: any) => {
  return (
    <>
      {props.divideLoad && (
        <Helmet>
          <script type="text/javascript">{`
            window.history.pushState(null, null, window.location.href);
            window.onpopstate = function () {
              window.history.go(1);
            };
    `}</script>
          <script type="text/javascript">{`
            if (!WebAssembly.instantiateStreaming) { // polyfill
              WebAssembly.instantiateStreaming = async (resp, importObject) => {
              const source = await (await resp).arrayBuffer();
              return await WebAssembly.instantiate(source, importObject);
            };
                                    }
          const goo = new Go();
            WebAssembly.instantiateStreaming(fetch("testwasm.wasm"), goo.importObject).then((result) => {
            goo.run(result.instance);
          })
                  `}</script>
        </Helmet>
      )}
      {props.addLoad && (
        <Helmet>
          <script type="text/javascript">{`
          if (!WebAssembly.instantiateStreaming) { // polyfill
            WebAssembly.instantiateStreaming = async (resp, importObject) => {
            const source = await (await resp).arrayBuffer();
            return await WebAssembly.instantiate(source, importObject);
          };
                                    }
              const go = new Go();
                WebAssembly.instantiateStreaming(fetch("addwasm.wasm"), go.importObject).then((result) => {
                go.run(result.instance);
              })
                  `}</script>
        </Helmet>
      )}
    </>
  );
};
