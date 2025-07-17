// lib/useAuthGuard.js
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { usePathname, Redirect } from "expo-router";

export default function useAuthGuard() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener?.subscription?.unsubscribe?.();
    };
  }, []);

  const publicRoutes = ["/login", "/signup"];

  if (loading) return { loading: true, redirect: null };
  if (!session && !publicRoutes.includes(pathname)) return { loading: false, redirect: <Redirect href="/login" /> };

  return { loading: false, redirect: null, session };
}
