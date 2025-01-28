"use client"
import { logout } from "@/app/actions/auth";

export function LogoutBtn() {
  return (
    <button
      onClick={() => logout()}
      className="list-group-item list-group-item-action d-flex align-items-center">
      <i className="ci-log-out fs-base opacity-75 me-2"></i>
      Çıkış yap
    </button>
  );
}