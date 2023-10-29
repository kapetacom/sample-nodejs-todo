/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { Box, BoxProps } from '@mui/material';
import React from 'react';

export const TodoIllustration = ({ sx, ...boxProps }: BoxProps) => {
    return (
        <Box {...boxProps} sx={{ position: 'relative', zIndex: 0, ...sx }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="414" height="324" fill="none">
                <mask
                    id="a"
                    width="414"
                    height="414"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: 'luminance' }}
                >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M.654 413.156h412.487V.669H.654v412.487Z"
                        clipRule="evenodd"
                    />
                </mask>
                <g mask="url(#a)">
                    <mask
                        id="b"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#b)">
                        <path
                            fill="#D1F2F2"
                            d="M379.859 290.641c-3.025-7.77-5.284-16.017-7.752-24.728-1.663-5.871-4.345-12.439-10.158-14.29-5.655-1.8-11.745 1.931-15.223 6.739-3.479 4.808-5.232 10.638-8.207 15.773-5.392 9.307-14.944 13.207-22.837 5.025-11.276-11.687-16.351-27.618-23.501-41.874-5.191-10.349-9.535-22.465-16.076-32.003-9.973-14.545-23.648-26.947-41.832-26.947-11.528 1.746-21.684 11.956-28.559 24.715-6.873 12.759-10.883 27.934-14.3 43.071-6.214 27.53-10.767 55.698-15.314 83.829l229.439-2.676c-.912.011-6.538-7.508-7.615-8.551-8.81-8.523-14.097-17.893-18.065-28.083Z"
                        />
                    </g>
                    <mask
                        id="c"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#c)">
                        <path
                            fill="#58B9FF"
                            d="M336.309 303.756c-.45 8.919-10.155 24.511-19.074 24.062-8.919-.45-13.674-16.772-13.225-25.691.45-8.918 9.948-53.551 18.867-53.102 8.919.45 13.881 45.811 13.432 54.731Z"
                        />
                    </g>
                    <mask
                        id="d"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#d)">
                        <path
                            fill="#481DA8"
                            d="m322.091 254.8-4.497 72.277a.357.357 0 1 0 .714.045l4.498-72.279a.358.358 0 0 0-.715-.043Z"
                        />
                    </g>
                    <mask
                        id="e"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#e)">
                        <path
                            fill="#D1C4E9"
                            d="M315.895 301.904c-2.032 4.462-3.577 9.144-4.512 14.02-.475 2.474-.772 5.153.346 7.409 1.223 2.464 3.935 3.899 6.65 4.346 6.629 1.088 13.26-2.973 17.146-8.453 3.885-5.48 5.568-12.179 7.114-18.717 1.215-5.148 2.41-10.373 4.702-15.17.982-2.056 6.737-9.995 4.015-12.054-3.723-2.926-14.5.256-21.406 7.795-5.688 6.209-10.581 13.195-14.055 20.824Z"
                        />
                    </g>
                    <mask
                        id="f"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#f)">
                        <path
                            fill="#58B9FF"
                            d="m318.724 327.764.094-.349c.937-3.462 9.115-31.858 27.131-48.508a.358.358 0 0 0-.486-.526c-19.427 17.983-27.418 49.179-27.432 49.206a.357.357 0 1 0 .693.177Z"
                        />
                    </g>
                    <mask
                        id="g"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#g)">
                        <path
                            fill="#481DA8"
                            d="M362.778 294.545c-.686 1.228-1.969 2.065-3.135 2.722-1.437.81-2.968 1.521-4.447 2.21-1.9.883-3.865 1.797-5.679 2.936a19.176 19.176 0 0 0-3.482 2.774c1.557-3.537 3.376-6.626 5.52-9.387 2.822-3.633 5.719-5.473 8.613-5.473l.201.003c.895.026 1.591.248 2.071.659.983.845.944 2.472.338 3.556Z"
                        />
                    </g>
                    <mask
                        id="h"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#h)">
                        <path
                            fill="#481DA8"
                            d="M366.01 314.699c-1.145.816-2.663 1.023-3.998 1.117-1.645.118-3.333.105-4.965.095-2.095-.015-4.262-.029-6.389.225a19.114 19.114 0 0 0-4.334 1.016c2.921-2.531 5.887-4.544 9.005-6.122 4.105-2.076 7.511-2.5 10.127-1.261l.18.089c.798.406 1.333.905 1.59 1.481.527 1.185-.204 2.639-1.216 3.36Z"
                        />
                    </g>
                    <mask
                        id="i"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#i)">
                        <path
                            fill="#481DA8"
                            d="M358.38 324.613c-.952-.131-1.805-.74-2.513-1.319-.873-.712-1.707-1.51-2.514-2.28-1.035-.989-2.105-2.012-3.282-2.882a13.096 13.096 0 0 0-2.632-1.526c2.639.11 5.057.499 7.348 1.176 3.014.892 4.907 2.277 5.627 4.119l.048.129c.207.576.239 1.074.096 1.482-.293.836-1.338 1.216-2.178 1.101Z"
                        />
                    </g>
                    <mask
                        id="j"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#j)">
                        <path
                            fill="#00004B"
                            d="M337.001 327.857s.001-.066.007-.205c.097-2.093 1.5-19.676 23.229-34.786a.322.322 0 1 0-.367-.529c-23.39 16.258-23.517 35.459-23.513 35.518a.322.322 0 0 0 .644.002Z"
                        />
                    </g>
                    <mask
                        id="k"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#k)">
                        <path
                            fill="#00004B"
                            d="M336.971 327.991s.025-.053.08-.162c.415-.816 2.464-4.568 6.651-8.104 4.189-3.537 10.504-6.864 19.506-6.866a.322.322 0 1 0 0-.643c-9.776-.002-16.496 3.871-20.748 7.742-4.255 3.872-6.06 7.736-6.072 7.762a.32.32 0 1 0 .583.271Z"
                        />
                    </g>
                    <mask
                        id="l"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#l)">
                        <path
                            fill="#00004B"
                            d="m347.25 317.11.009-.001.049-.001c.499.001 4.181.195 11.315 5.575a.321.321 0 1 0 .387-.513c-7.209-5.44-11.03-5.706-11.702-5.705l-.105.003a.322.322 0 0 0 .047.642Z"
                        />
                    </g>
                    <mask
                        id="m"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#m)">
                        <path
                            fill="#D1F2F2"
                            d="M136.613 328.018c-5.383-20.343-10.795-40.696-17.122-60.398-3.568-11.109-7.504-22.176-12.973-31.063-5.469-8.888-12.714-15.445-19.986-15.4-11.208 2.169-18.437 13.235-23.179 25.49-3.109 8.037-4.616 17.772-6.816 26.266-3.03 11.698-4.618 24.423-10.439 34.66-4.074 7.166-10.337 5.338-14.559-1.101-2.33-3.552-3.973-7.778-6.58-11.022-2.61-3.243-6.722-5.355-10.033-3.311-3.405 2.101-4.423 7.418-4.88 12.082-.68 6.922-1.276 13.466-2.39 19.738a96.186 96.186 0 0 1-.81 4.059h129.767Z"
                        />
                    </g>
                    <mask
                        id="n"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#n)">
                        <path
                            fill="#D1C4E9"
                            d="M88.49 299.93c-3.363-3.878-7.62-7.224-8.961-12.119-.981-3.576-.207-7.36.175-11.048.383-3.688.249-7.766-2.137-10.605-1.966-2.339-5.071-3.354-8.058-3.997-2.987-.642-6.105-1.048-8.756-2.567-4.304-2.468-3.446-6.666-5.757-10.349-2.593-4.131-8.625-9.401-13.797-6.657-5.476 2.905-4.608 11.729-.965 15.624 2.416 2.584 5.51 5.063 5.865 8.582.535 5.3-5.536 10.071-3.866 15.129 1.233 3.735 5.942 5.02 8.268 8.192 2.3 3.14 1.837 7.539.482 11.188-1.354 3.648-3.488 7.022-4.33 10.821-1.725 7.775 4.376 13.148 11.327 14.882 6.387 1.592 20.163.84 20.163.84 4.916-1.719 10.367-6.038 13.07-10.756 2.041-3.565 2.324-8.085.742-11.877-.815-1.954-2.062-3.664-3.466-5.283Z"
                        />
                    </g>
                    <mask
                        id="o"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#o)">
                        <path
                            fill="#58B9FF"
                            d="M46.975 251.196s.09.139.262.412c2.58 4.11 23.368 38.375 25.752 76.062a.413.413 0 1 0 .824-.052c-2.575-40.48-26.131-76.84-26.145-76.871a.413.413 0 0 0-.693.449Z"
                        />
                    </g>
                    <mask
                        id="p"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#p)">
                        <path
                            fill="#58B9FF"
                            d="M26.371 299.981c.363-.311.89-.479 1.566-.498l.152-.003c2.189 0 4.379 1.391 6.513 4.138 1.62 2.087 2.996 4.424 4.174 7.098a14.511 14.511 0 0 0-2.634-2.097c-1.371-.862-2.857-1.552-4.293-2.221-1.119-.52-2.276-1.058-3.363-1.67-.881-.497-1.852-1.13-2.37-2.058-.459-.821-.488-2.051.255-2.689Z"
                        />
                    </g>
                    <mask
                        id="q"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#q)">
                        <path
                            fill="#58B9FF"
                            d="M22.752 315.366c.194-.437.599-.814 1.202-1.121l.136-.067c1.979-.937 4.553-.616 7.657.953 2.359 1.194 4.601 2.716 6.81 4.63-.999-.368-2.104-.629-3.277-.769-1.608-.192-3.247-.181-4.831-.17-1.234.008-2.51.017-3.754-.071-1.01-.072-2.158-.228-3.024-.845-.764-.546-1.317-1.645-.919-2.54Z"
                        />
                    </g>
                    <mask
                        id="r"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#r)">
                        <path
                            fill="#58B9FF"
                            d="M27.794 324.572c-.108-.308-.084-.685.072-1.12l.037-.098c.544-1.393 1.975-2.44 4.254-3.114 1.733-.512 3.561-.806 5.557-.889a9.838 9.838 0 0 0-1.99 1.153c-.89.658-1.7 1.432-2.482 2.18-.61.582-1.24 1.184-1.901 1.724-.536.437-1.18.897-1.9.996-.636.088-1.426-.2-1.647-.832Z"
                        />
                    </g>
                    <mask
                        id="s"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#s)">
                        <path
                            fill="#00004B"
                            d="M46.17 327.855c.005-.059-.1-14.61-17.812-26.92a.321.321 0 1 0-.367.528c8.754 6.087 13.13 12.697 15.328 17.781 1.098 2.543 1.65 4.704 1.928 6.226.138.76.209 1.362.244 1.77.018.205.027.361.032.465.004.104.004.152.004.152a.321.321 0 0 0 .644-.002Z"
                        />
                    </g>
                    <mask
                        id="t"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#t)">
                        <path
                            fill="#00004B"
                            d="M46.14 327.72c-.012-.025-1.381-2.956-4.61-5.894-3.225-2.937-8.327-5.876-15.74-5.874a.322.322 0 1 0 0 .643c7.239.002 12.167 2.854 15.308 5.707a22.11 22.11 0 0 1 3.411 3.925c.362.533.626.978.798 1.287.086.155.15.276.191.358l.06.119a.322.322 0 0 0 .582-.271Z"
                        />
                    </g>
                    <mask
                        id="u"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#u)">
                        <path
                            fill="#00004B"
                            d="m37.898 319.171-.086-.003c-.529 0-3.435.21-8.896 4.33a.321.321 0 1 0 .388.514c5.385-4.062 8.152-4.2 8.508-4.2l.034.001h.006l.007-.117-.01.117h.003l.007-.117-.01.117a.322.322 0 0 0 .049-.642Z"
                        />
                    </g>
                    <mask
                        id="v"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#v)">
                        <path
                            fill="#58B9FF"
                            d="M234.732 327.851H79.505a7.795 7.795 0 0 1-7.795-7.795V109.565a7.795 7.795 0 0 1 7.795-7.796h155.227a7.796 7.796 0 0 1 7.796 7.796v210.491a7.796 7.796 0 0 1-7.796 7.795Z"
                        />
                    </g>
                    <mask
                        id="w"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#w)">
                        <path
                            fill="#3A7FFF"
                            d="M71.71 156.846v163.21a7.795 7.795 0 0 0 7.795 7.795h155.227a7.796 7.796 0 0 0 7.796-7.795v-32.211L71.71 156.846Z"
                        />
                    </g>
                    <mask
                        id="x"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#x)">
                        <path
                            fill="#F0F6F6"
                            d="M229.417 317.416H84.82a3.186 3.186 0 0 1-3.185-3.186V115.382a3.186 3.186 0 0 1 3.185-3.186h144.597a3.186 3.186 0 0 1 3.185 3.186V314.23a3.185 3.185 0 0 1-3.185 3.186Z"
                        />
                    </g>
                    <mask
                        id="y"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#y)">
                        <path
                            fill="#481DA8"
                            d="M170.068 97.498c.01-.213.032-.424.032-.64 0-7.169-5.812-12.982-12.981-12.982-7.17 0-12.982 5.813-12.982 12.982 0 .216.022.427.032.64h-19.084v19.789h64.067v-19.79h-19.084Z"
                        />
                    </g>
                    <mask
                        id="z"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#z)">
                        <path fill="#651FFF" d="M125.085 97.498v19.789h64.067l-64.067-19.79Z" />
                    </g>
                    <mask
                        id="A"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#A)">
                        <path
                            fill="#3A7FFF"
                            d="M164.407 96.862a7.29 7.29 0 1 1-7.289-7.29 7.289 7.289 0 0 1 7.289 7.29Z"
                        />
                    </g>
                    <mask
                        id="B"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#B)">
                        <path
                            fill="#58B9FF"
                            d="M151.964 91.707a7.289 7.289 0 0 0 0 10.309 7.288 7.288 0 0 0 10.308 0l-10.308-10.309Z"
                        />
                    </g>
                    <mask
                        id="C"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#C)">
                        <path fill="#B2EBFC" d="M189.152 118.654h-64.067v-1.363h64.067v1.363Z" />
                    </g>
                    <mask
                        id="D"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#D)">
                        <path
                            fill="#481DA8"
                            d="M123.377 168.996v-.412H99.49v-23.475h23.475v23.887h.825v-24.712H98.665v25.125h25.125v-.413h-.413Z"
                        />
                    </g>
                    <mask
                        id="E"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#E)">
                        <path
                            fill="#F0F6F6"
                            d="m105.17 159.383 8.561 6.721 16.143-15.552-2.29-2.377-14.074 13.56-6.301-4.947-2.039 2.595Z"
                        />
                    </g>
                    <mask
                        id="F"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#F)">
                        <path
                            fill="#D1C4E9"
                            d="m103.52 157.738 8.56 6.721 16.143-15.552-2.29-2.377-14.074 13.56-6.301-4.947-2.038 2.595Z"
                        />
                    </g>
                    <mask
                        id="G"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#G)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 151.589h-79.179a.936.936 0 0 1 0-1.871h79.179a.935.935 0 1 1 0 1.871Z"
                        />
                    </g>
                    <mask
                        id="H"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#H)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 155.718h-79.179a.936.936 0 0 1 0-1.87h79.179a.934.934 0 1 1 0 1.87Z"
                        />
                    </g>
                    <mask
                        id="I"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#I)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 159.842h-79.179a.935.935 0 0 1 0-1.871h79.179a.935.935 0 1 1 0 1.871Z"
                        />
                    </g>
                    <mask
                        id="J"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#J)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 163.966h-79.179a.935.935 0 0 1 0-1.871h79.179a.935.935 0 1 1 0 1.871Z"
                        />
                    </g>
                    <mask
                        id="K"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#K)">
                        <path
                            fill="#481DA8"
                            d="M123.377 208.113v-.413H99.49v-23.474h23.475v23.887h.825v-24.712H98.665v25.124h25.125v-.412h-.413Z"
                        />
                    </g>
                    <mask
                        id="L"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#L)">
                        <path
                            fill="#F0F6F6"
                            d="m105.17 198.506 8.561 6.72 16.143-15.552-2.29-2.376-14.074 13.559-6.301-4.947-2.039 2.596Z"
                        />
                    </g>
                    <mask
                        id="M"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#M)">
                        <path
                            fill="#D1C4E9"
                            d="m103.52 196.851 8.56 6.721 16.143-15.553-2.29-2.376-14.074 13.559-6.301-4.947-2.038 2.596Z"
                        />
                    </g>
                    <mask
                        id="N"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#N)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 190.715h-79.179a.935.935 0 1 1 0-1.87h79.179a.935.935 0 1 1 0 1.87Z"
                        />
                    </g>
                    <mask
                        id="O"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#O)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 194.834h-79.179a.936.936 0 0 1 0-1.871h79.179a.935.935 0 1 1 0 1.871Z"
                        />
                    </g>
                    <mask
                        id="P"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#P)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 198.963h-79.179a.936.936 0 0 1 0-1.871h79.179a.935.935 0 1 1 0 1.871Z"
                        />
                    </g>
                    <mask
                        id="Q"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#Q)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 203.083h-79.179a.936.936 0 0 1 0-1.871h79.179a.935.935 0 1 1 0 1.871Z"
                        />
                    </g>
                    <mask
                        id="R"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#R)">
                        <path
                            fill="#481DA8"
                            d="M123.377 247.23v-.413H99.49v-23.475h23.475v23.888h.825v-24.712H98.665v25.124h25.125v-.412h-.413Z"
                        />
                    </g>
                    <mask
                        id="S"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#S)">
                        <path
                            fill="#F0F6F6"
                            d="m105.17 237.622 8.561 6.721 16.143-15.552-2.29-2.377-14.074 13.56-6.301-4.947-2.039 2.595Z"
                        />
                    </g>
                    <mask
                        id="T"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#T)">
                        <path
                            fill="#D1C4E9"
                            d="m103.52 235.967 8.56 6.721 16.143-15.552-2.29-2.377-14.074 13.56-6.301-4.947-2.038 2.595Z"
                        />
                    </g>
                    <mask
                        id="U"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#U)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 229.832h-79.179a.936.936 0 0 1 0-1.872h79.179a.936.936 0 1 1 0 1.872Z"
                        />
                    </g>
                    <mask
                        id="V"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#V)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 233.951h-79.179a.936.936 0 0 1 0-1.871h79.179a.935.935 0 1 1 0 1.871Z"
                        />
                    </g>
                    <mask
                        id="W"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#W)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 238.08h-79.179a.935.935 0 1 1 0-1.87h79.179a.934.934 0 1 1 0 1.87Z"
                        />
                    </g>
                    <mask
                        id="X"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#X)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 242.204h-79.179a.935.935 0 1 1 0-1.87h79.179a.935.935 0 1 1 0 1.87Z"
                        />
                    </g>
                    <mask
                        id="Y"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#Y)">
                        <path
                            fill="#481DA8"
                            d="M123.377 286.345v-.412H99.49v-23.474h23.475v23.886h.825v-24.711H98.665v25.124h25.125v-.413h-.413Z"
                        />
                    </g>
                    <mask
                        id="Z"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#Z)">
                        <path
                            fill="#F0F6F6"
                            d="m105.17 276.739 8.561 6.72 16.143-15.552-2.29-2.376-14.074 13.559-6.301-4.947-2.039 2.596Z"
                        />
                    </g>
                    <mask
                        id="aa"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aa)">
                        <path
                            fill="#D1C4E9"
                            d="m103.52 275.094 8.56 6.72 16.143-15.552-2.29-2.376-14.074 13.559-6.301-4.947-2.038 2.596Z"
                        />
                    </g>
                    <mask
                        id="ab"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ab)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 268.948h-79.179a.935.935 0 1 1 0-1.87h79.179a.935.935 0 1 1 0 1.87Z"
                        />
                    </g>
                    <mask
                        id="ac"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ac)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 273.077h-79.179a.936.936 0 0 1 0-1.871h79.179a.935.935 0 1 1 0 1.871Z"
                        />
                    </g>
                    <mask
                        id="ad"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ad)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 277.197h-79.179a.936.936 0 0 1 0-1.871h79.179a.935.935 0 1 1 0 1.871Z"
                        />
                    </g>
                    <mask
                        id="ae"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ae)">
                        <path
                            fill="#58B9FF"
                            d="M214.221 281.325h-79.179a.935.935 0 0 1 0-1.87h79.179a.934.934 0 1 1 0 1.87Z"
                        />
                    </g>
                    <mask
                        id="af"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#af)">
                        <path
                            fill="#FF6E95"
                            d="M249.466 165.537c-.505.386-5.085 3.09-5.085 3.09l-3.249-4.161.967-4.745 6.995.437 1.224 3.541c.29.841-.228 1.361-.852 1.838Z"
                        />
                    </g>
                    <mask
                        id="ag"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ag)">
                        <path
                            fill="#FF4684"
                            d="m249.095 160.158 1.055 3.103-3.226 1.3a2.959 2.959 0 0 1-4.117-3.074l.209-1.706 6.079.377Z"
                        />
                    </g>
                    <mask
                        id="ah"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ah)">
                        <path
                            fill="#D1C4E9"
                            d="m247.509 164.311 2.798.408 1.532-2.625a1.016 1.016 0 0 0-1.717-1.083l-2.613 3.3Z"
                        />
                    </g>
                    <mask
                        id="ai"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ai)">
                        <path fill="#fff" d="m245.393 175.526-5.768 1.458-2.062 16.697 6.751.276 1.079-18.431Z" />
                    </g>
                    <mask
                        id="aj"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aj)">
                        <path
                            fill="#FF6E95"
                            d="m321.209 189.083-10.08-1.269 2.307-18.326 10.08 1.269a9.235 9.235 0 1 1-2.307 18.326Z"
                        />
                    </g>
                    <mask
                        id="ak"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ak)">
                        <path fill="#D2DFDE" d="M322.378 189.156a9.236 9.236 0 0 1 0 0Z" />
                    </g>
                    <mask
                        id="al"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#al)">
                        <path
                            fill="#FF6281"
                            d="M322.375 189.156h-.001c-.372 0-.749-.022-1.128-.068l-.002-.001-.035-.004-2.456-.31.338-2.689.188-1.485 2.456.309a9.241 9.241 0 0 0 9.812-5.953 9.321 9.321 0 0 1-.012 2.044l-.001.009-.001.011a.185.185 0 0 1-.004.023v.006l-.003.025-.007.059-.011.075c-.646 4.599-4.589 7.947-9.129 7.949h-.004Z"
                        />
                    </g>
                    <mask
                        id="am"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#am)">
                        <path
                            fill="#EEA836"
                            d="M309.901 187.656 202.956 173.86l2.308-18.326 106.943 13.796-2.306 18.326Z"
                        />
                    </g>
                    <mask
                        id="an"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#an)">
                        <path fill="#FFF1D6" d="m183.904 162.162 19.052 11.706 2.307-18.326-21.359 6.62Z" />
                    </g>
                    <mask
                        id="ao"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ao)">
                        <path fill="#E3D9BE" d="m202.956 173.868-19.052-11.706 19.616 7.224-.564 4.482Z" />
                    </g>
                    <mask
                        id="ap"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ap)">
                        <path fill="#00004B" d="m190.265 160.182-6.361 1.971 5.674 3.487.687-5.458Z" />
                    </g>
                    <mask
                        id="aq"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aq)">
                        <path fill="#C1FFF3" d="m318.752 188.773-8.852-1.115 2.306-18.326 8.852 1.115-2.306 18.326Z" />
                    </g>
                    <mask
                        id="ar"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ar)">
                        <path fill="#C1FFF3" d="m318.653 189.559-3.026-.38 2.505-19.896 3.026.381-2.505 19.895Z" />
                    </g>
                    <mask
                        id="as"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#as)">
                        <path fill="#F8AA31" d="m309.902 187.636-106.946-13.778.564-4.483 106.947 13.779-.565 4.482Z" />
                    </g>
                    <mask
                        id="at"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#at)">
                        <path fill="#A8E7DE" d="m315.726 188.394-5.824-.751.565-4.482 5.823.75-.016.128-.548 4.355Z" />
                    </g>
                    <mask
                        id="au"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#au)">
                        <path
                            fill="#E8F1F0"
                            d="m312.207 169.331-60.211-7.766v-.007l66.021 8.505-5.81-.732Zm-62.312-8.037-.428-.056-.002-.007.435.056-.005.007Z"
                        />
                    </g>
                    <mask
                        id="av"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#av)">
                        <path fill="#54B5FF" d="m241.988 160.273-9.385-1.211v-.004l9.386 1.21-.001.005Z" />
                    </g>
                    <mask
                        id="aw"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aw)">
                        <path fill="#E8F1F0" d="m232.602 159.06-25.934-3.345h.001l25.933 3.341v.004Z" />
                    </g>
                    <mask
                        id="ax"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ax)">
                        <path fill="#54B5FF" d="M206.669 155.718h-.001l-1.405-.182 1.406.182Z" />
                    </g>
                    <mask
                        id="ay"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#ay)">
                        <path
                            fill="#FF6B90"
                            d="m249.467 161.232-.006-.001-.003-.007.007.001.002.007Zm-6.528-.842-.953-.122.001-.006.953.122-.001.006Z"
                        />
                    </g>
                    <mask
                        id="az"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#az)">
                        <path fill="#FF447F" d="m249.461 161.232-6.521-.841.001-.006 6.518.84.002.007Z" />
                    </g>
                    <mask
                        id="aA"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aA)">
                        <path fill="#FF4D89" d="m251.995 161.568-2.101-.272.005-.006 2.096.27v.008Z" />
                    </g>
                    <mask
                        id="aB"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aB)">
                        <path
                            fill="#FFB63F"
                            d="m311.645 173.797-106.946-13.778.564-4.483 1.405.182 25.934 3.345 9.385 1.211.953.122 6.521.841.007.001.427.056 2.101.271 60.211 7.766-.562 4.466Z"
                        />
                    </g>
                    <mask
                        id="aC"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aC)">
                        <path fill="#BAFBEE" d="m317.469 174.544-5.824-.75.562-4.466 5.81.732.016.002-.564 4.482Z" />
                    </g>
                    <mask
                        id="aD"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aD)">
                        <path
                            fill="#AEEFE3"
                            d="m318.752 188.773.667-5.297-.141 1.122-.188 1.485-.338 2.69Zm-3.027-.381.549-4.354.008-.067-.557 4.421Z"
                        />
                    </g>
                    <mask
                        id="aE"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aE)">
                        <path
                            fill="#AEEFE3"
                            d="m318.653 189.559-3.026-.38.098-.785.557-4.421.007-.061.104-.815 3.026.381-.667 5.297-.099.784Z"
                        />
                    </g>
                    <mask
                        id="aF"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aF)">
                        <path fill="#98D3CD" d="m316.273 184.034.016-.127-.008.061-.008.066Z" />
                    </g>
                    <mask
                        id="aG"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aG)">
                        <path
                            fill="#FF4684"
                            d="m274.814 224.768 1.519-3.906 5.091-.397c.937-.101 1.767.467 1.853 1.269.087.802-.603 1.535-1.539 1.635l-6.924 1.399Z"
                        />
                    </g>
                    <mask
                        id="aH"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aH)">
                        <path
                            fill="#D1C4E9"
                            d="m272.191 220.882 2.622 3.886 4.995-1.009-5.564-8.327-1.079.71a3.423 3.423 0 0 0-.974 4.74Z"
                        />
                    </g>
                    <mask
                        id="aI"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aI)">
                        <path
                            fill="#481DA8"
                            d="M277.105 158.291c-5.186-7.56-18.25-5.543-17.91 6.569l.005.109c-.031 1.536.019 3.1-.382 4.545-.204.73-.556 1.41-1.088 1.9-.528.496-1.213.788-1.934.941-.729.162-1.515.202-2.325.364a7.5 7.5 0 0 0-2.33.893c-1.443.84-2.622 2.217-3.162 3.848-1.033 3.236-.206 6.977 2.23 9.41a7.661 7.661 0 0 0 2.102 1.468c.778.379 1.662.521 2.379.665 1.508.329 3.033.765 4.59 1.071l.043-.134c-1.434-.662-2.848-1.356-4.366-1.881-.793-.278-1.473-.439-2.085-.82a6.772 6.772 0 0 1-1.656-1.343c-.958-1.065-1.656-2.378-2.056-3.781-.397-1.4-.478-2.916-.084-4.309.388-1.386 1.323-2.593 2.559-3.395a6.634 6.634 0 0 1 2.017-.876c.726-.182 1.516-.257 2.316-.469.804-.206 1.593-.612 2.179-1.235.592-.62.93-1.419 1.099-2.21a9.833 9.833 0 0 0 .187-1.688c.141 2.257-.055 4.55-2.377 5.417-1.339.501-2.643.501-3.887 1.332-1.219.813-2.187 2.018-2.66 3.41-1.456 4.285 2.339 9.826 6.8 10.3 1.846.196 3.693.643 5.519.971.51.091 7.691 1.563 7.75 1.391l8.307-24.59-1.78-7.873Z"
                        />
                    </g>
                    <mask
                        id="aJ"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aJ)">
                        <path fill="#fff" d="m276.709 219.119 16.845-11.754-2.351-6.509-16.959 14.574 2.465 3.689Z" />
                    </g>
                    <mask
                        id="aK"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aK)">
                        <path
                            fill="#fff"
                            d="M289.056 205.761a3.377 3.377 0 1 0 6.108-2.889 3.377 3.377 0 1 0-6.108 2.889Z"
                        />
                    </g>
                    <mask
                        id="aL"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aL)">
                        <path
                            fill="#fff"
                            d="m289.897 206.971 4.802-4.752-13.87-15.597a4.345 4.345 0 0 0-6.547-.501c-1.88 1.861-1.677 7.032.431 8.63l15.184 12.22Z"
                        />
                    </g>
                    <mask
                        id="aM"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aM)">
                        <path fill="#D1C4E9" d="m266.426 185.419 5.679.481 1.007-11.898-5.678-.481-1.008 11.898Z" />
                    </g>
                    <mask
                        id="aN"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aN)">
                        <path
                            fill="#fff"
                            d="M240.578 191.149a3.379 3.379 0 1 0 .453 6.743 3.379 3.379 0 0 0-.453-6.743Z"
                        />
                    </g>
                    <mask
                        id="aO"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aO)">
                        <path
                            fill="#fff"
                            d="m238.452 191.65 3.421 6.08 20.915-6.083c2.563-.653 3.953-5.502 2.944-7.947a4.345 4.345 0 0 0-6.228-2.082l-21.052 10.032Z"
                        />
                    </g>
                    <mask
                        id="aP"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aP)">
                        <path
                            fill="#fff"
                            d="m270.455 215.105 10.585-25.972a3.675 3.675 0 0 0-3.07-4.538l-15.194-3.445a3.675 3.675 0 0 0-4.169 3.556l-5.201 28.322 17.049 2.077Z"
                        />
                    </g>
                    <mask
                        id="aQ"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aQ)">
                        <path
                            fill="#D1C4E9"
                            d="M268.75 159.679c-1.754 2.22-4.909 3.154-5.652 5.189l-.158.939v.131l-.018-.03-.481 2.849a6.621 6.621 0 0 0 13.058 2.206l.541-3.207c-.373-3.265-6.336-3.517-7.29-8.077Z"
                        />
                    </g>
                    <mask
                        id="aR"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aR)">
                        <path
                            fill="#D1C4E9"
                            d="M274.808 169.447a1.536 1.536 0 1 0 3.032.512 1.538 1.538 0 0 0-3.032-.512Z"
                        />
                    </g>
                    <mask
                        id="aS"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aS)">
                        <path
                            fill="#2463D8"
                            d="m260.893 213.944 7.615 18.8-7.277 87.837h-5.588l-6.584-88.383 4.347-19.166 7.487.912Z"
                        />
                    </g>
                    <mask
                        id="aT"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aT)">
                        <path
                            fill="#3A7FFF"
                            d="M260.892 213.944v18.8l34.278 87.837h4.204l-18.341-91.152-10.578-14.32-9.563-1.165Z"
                        />
                    </g>
                    <mask
                        id="aU"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aU)">
                        <path fill="#D1C4E9" d="M258.771 325.17h-2.336v-4.586h3.029l-.693 4.586Z" />
                    </g>
                    <mask
                        id="aV"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aV)">
                        <path fill="#D1C4E9" d="M297.938 325.17h2.336l-1.384-4.586h-3.029l2.077 4.586Z" />
                    </g>
                    <mask
                        id="aW"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aW)">
                        <path
                            fill="#fff"
                            d="M263.704 195.318a4.796 4.796 0 1 1-4.796-4.797 4.796 4.796 0 0 1 4.796 4.797Z"
                        />
                    </g>
                    <mask
                        id="aX"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aX)">
                        <path fill="#D1C4E9" d="m263.213 181.277.608 10.301 8.9-9.07-9.508-1.231Z" />
                    </g>
                    <mask
                        id="aY"
                        width="414"
                        height="414"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654.673V413.16H413.14V.673H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aY)">
                        <path
                            fill="#481DA8"
                            d="M282.594 160.48a8.574 8.574 0 0 0-2.722-2.297c-1.673-.881-3.564-.784-5.098-2.107l1.197 12.089c2.202-.63 2.072 4.113-.472 2.802 0 0-5.043 2.158-6.957 6.879-1.313 3.17-1.531 6.868-1.187 8.985.614 3.79 3.832 5.753 7.481 4.638 2.18-.666 3.954-2.314 5.211-4.214 4.413-6.669 7.353-17.62 3.579-25.146a9.716 9.716 0 0 0-1.032-1.629Z"
                        />
                    </g>
                    <mask
                        id="aZ"
                        width="414"
                        height="353"
                        x="0"
                        y="61"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'luminance' }}
                    >
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M.654 61.777V413.16H413.14V61.777H.654Z"
                            clipRule="evenodd"
                        />
                    </mask>
                    <g mask="url(#aZ)">
                        <path
                            fill="#D1C4E9"
                            d="m242.035 159.018-.123.767a2.94 2.94 0 0 0 2.435 3.371l1.253.201a2.94 2.94 0 0 0 3.37-2.435l.124-.767-7.059-1.137Z"
                        />
                    </g>
                </g>
            </svg>
        </Box>
    );
};
