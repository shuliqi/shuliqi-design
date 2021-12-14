import React, { useContext } from 'react';
import type { IApiComponentProps } from 'dumi/theme';
import { context, useApiData, AnchorLink } from 'dumi/theme';

const LOCALE_TEXTS = {
  'zh-CN': {
    name: '属性',
    description: '说明',
    type: '类型',
    default: '默认值',
  },
};

export default ({ identifier, export: expt }: IApiComponentProps) => {
  const data = useApiData(identifier);
  const { locale } = useContext(context);
  const texts = /^zh|cn$/i.test(locale)
    ? LOCALE_TEXTS['zh-CN']
    : LOCALE_TEXTS['zh-CN'];

  return (
    <>
      {data && (
        <table style={{ marginTop: 24 }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>{texts.name}</th>
              <th style={{ textAlign: 'left' }}>{texts.description}</th>
              <th style={{ textAlign: 'left' }}>{texts.type}</th>
              <th style={{ textAlign: 'left' }}>{texts.default}</th>
            </tr>
          </thead>
          <tbody>
            {data[expt].map((row) => (
              <tr key={row.identifier}>
                <td>{row.identifier}</td>
                <td>{row.description || '--'}</td>
                <td>
                  <code>{row.type}</code>
                </td>

                <td>
                  <code>{row.default || '--'}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
