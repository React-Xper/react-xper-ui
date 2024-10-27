import React, { useEffect, useRef } from "react";
import styles from "./Login.module.css";
import GoogleIcon from "../icons/google-icon";
import FacebookIcon from "../icons/facebook-icon";
import GitHubIcon from "../icons/github-icon";
import { jwtDecode } from "jwt-decode";

/**
 * @name ILogin
 * @description Props interface for Login JSX element
 * @thirdParties Default(google, facebook, github) Additional (gitlab, bitbucket, slack, apple, microsoft)
 */
interface ILogin
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  thirdParties?: string[];
  googleClientId?: string;
  facebookAppId?: string;
  onGoogleAuth?: Function;
  onFacebookAuth?: Function;
  dark?: boolean;
}

/**
 * @name  Login
 * @description Login 3rd-party JSX element
 */
export default function ThirdPartyLogin({
  children,
  color,
  className = "",
  thirdParties = ["google", "facebook", "github"], // gitlab, bitbucket, slack, apple, microsoft
  googleClientId = "",
  facebookAppId = "",
  onGoogleAuth = () => {},
  onFacebookAuth = () => {},
  dark = false,
  ...props
}: ILogin) {
  const googleLoginWrapperButtonRef = useRef<HTMLElement | null>();
  const fbRef = useRef<any>(null);

  useEffect(() => {
    const handleGoogleLoginCallback = (response: any) => {
      const token = jwtDecode(response?.credential);
      onGoogleAuth(token);
    };

    const handleGoogleLoaded = () => {
      (window as any).google.accounts.id.initialize({
        client_id: googleClientId,
        ux_mode: "popup",
        callback: handleGoogleLoginCallback,
      });

      const googleLoginWrapper = document.createElement("div");
      googleLoginWrapper.style.display = "none";
      googleLoginWrapper.classList.add("custom-google-button");

      document.body.appendChild(googleLoginWrapper);

      // Use GSI javascript api to render the button inside our wrapper
      // You can ignore the properties because this button will not appear
      (window as any).google.accounts.id.renderButton(googleLoginWrapper, {
        type: "icon",
        width: "200",
      });

      googleLoginWrapperButtonRef.current =
        googleLoginWrapper.querySelector<HTMLElement>("div[role=button]");
    };

    const handleFacebookLoaded = () => {
      (window as any).FB.init({
        appId: facebookAppId,
        xfbml: true,
        version: "v21.0",
      });

      fbRef.current = (window as any).FB;
    };

    const loadGoogleScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = () => handleGoogleLoaded();

      document.body.appendChild(script);
    };

    const loadFacebookScript = () => {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.onload = () => handleFacebookLoaded();

      document.body.appendChild(script);
    };

    if (thirdParties.includes("google")) {
      loadGoogleScript();
    }
    if (thirdParties.includes("facebook")) {
      loadFacebookScript();
    }
  }, [googleClientId, facebookAppId, onGoogleAuth, thirdParties]);

  const handleFacebookLogin = () => {
    fbRef.current.login(
      function (response: any) {
        if (response.status === "connected") {
          fbRef.current.api(
            "/me",
            { fields: "name,email,picture" },
            function (response: any) {
              onFacebookAuth(response);
            }
          );
        }
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <div
      className={`${className} ${styles?.["rxp-ui__third-party_login"]} ${
        dark ? styles?.["rxp-ui__third-party_dark"] : ""
      }`}
      {...props}
    >
      {thirdParties.includes("google") && (
        <button
          onClick={() =>
            googleLoginWrapperButtonRef.current &&
            googleLoginWrapperButtonRef.current.click()
          }
        >
          <GoogleIcon className="rxp-ui__third-party_icon" />{" "}
          <span>Continue with Google</span>
        </button>
      )}
      {thirdParties.includes("facebook") && (
        <button onClick={handleFacebookLogin}>
          <FacebookIcon className="rxp-ui__third-party_icon" />{" "}
          <span>Continue with Facebook</span>
        </button>
      )}
      {thirdParties.includes("github") && (
        <button>
          <GitHubIcon className="rxp-ui__third-party_icon" />{" "}
          <span>Continue with Github</span>
        </button>
      )}
    </div>
  );
}
