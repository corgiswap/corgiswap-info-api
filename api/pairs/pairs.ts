import { VercelRequest, VercelResponse } from "@vercel/node";
import { getPairByAddress } from "../../utils";
import { return200, return400, return500 } from "../../utils/response";
import { getAddress } from "@ethersproject/address";

export default async function (req: VercelRequest, res: VercelResponse): Promise<void> {
  if (
    !req.query.address ||
    typeof req.query.address !== "string" ||
    !req.query.address.match(/^0x[0-9a-fA-F]{40}$/)
  ) {
    return400(res, "Invalid address");
    return;
  }

  try {
    const address = getAddress(req.query.address);
    const pair = await getPairByAddress(address.toLowerCase());

    const pId = getAddress(pair?.id);
    const t0Id = getAddress(pair?.token0.id);
    const t1Id = getAddress(pair?.token1.id);

    return200(res, {
      updated_at: new Date().getTime(),
      data: {
        id: pId,
        pair_address: pId,
        base_name: pair?.token0.name,
        base_symbol: pair?.token0.symbol,
        base_address: t0Id,
        quote_name: pair?.token1.name,
        quote_symbol: pair?.token1.symbol,
        quote_address: t1Id,
        price: pair?.price,
        base_volume: pair?.previous24hVolumeToken0,
        quote_volume: pair?.previous24hVolumeToken1,
        liquidity: pair?.reserveUSD,
        liquidity_BNB: pair?.reserveBNB,
      },
    });
  } catch (error) {
    return500(res, error);
  }
}
