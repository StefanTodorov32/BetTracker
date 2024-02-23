import { Bet } from '@/components/CreateBetModal';
import {supabaseClient} from './supabaseClient';

export const getBets = async({userId, token}: {userId: string; token: string}) => {
    const supabase = await supabaseClient(token);
    const {data: bets} = await supabase.from('bets').select("*").eq('user_id', userId);
    return bets;
}

export const createBet = async({userId, token, bet}: {userId: string; token: string; bet: Bet}) => {
    console.log("🚀 ~ createBet ~ bet:", bet)
    console.log("🚀 ~ createBet ~ userId:", userId)
    const supabase = await supabaseClient(token);
    const {data} = await supabase.from('bets').insert({...bet, user_id: userId, datetime: bet.datetime.toISOString()});
    return data;
    
}