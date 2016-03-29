var mongoose = require('mongoose');
mongoose.connect('mongodb://162.243.131.177:27017/nba');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var playerSchema = new Schema({
  _id: ObjectId
  , ast: Number
  , ast_ma: Number
  , ast_ma_1: Number
  , ast_perc: Number
  , blk: Number
  , blk_perc: Number
  , date: String
  , def_rtg: Number
  , dk_fp: Number
  , dk_fp_ma: Number
  , dk_fp_ma_1: Number
  , dnp: Number
  , drb: Number
  , drb_perc: Number
  , efg: Number
  , fd_fp: Number
  , fd_fp_ma: Number
  , fd_fp_ma_1: Number
  , fg: Number
  , fg_perc: Number
  , fga: Number
  , ft: Number
  , ft_perc: String
  , fta: Number
  , ftar: Number
  , min_ma: Number
  , min_ma_1: Number
  , minutes: Number
  , name: String
  , off_rtg: Number
  , opp: String
  , opp_ast: Number
  , opp_ast_ma: Number
  , opp_ast_ma_1: Number
  , opp_pace: Number
  , opp_pace_ma: Number
  , opp_pace_ma_1: Number
  , opp_pts: Number
  , opp_pts_ma: Number
  , opp_pts_ma_1: Number
  , opp_stl: Number
  , opp_stl_ma: Number
  , opp_stl_ma_1: Number
  , opp_team_efg_perc: Number
  , opp_team_efg_perc_ma: Number
  , opp_team_efg_perc_ma_1: Number
  , opp_team_fg_fga: Number
  , opp_team_fg_fga_ma: Number
  , opp_team_fg_fga_ma_1: Number
  , opp_team_off_rtg: Number
  , opp_team_off_rtg_ma: Number
  , opp_team_off_rtg_ma_1: Number
  , opp_team_orb_perc: Number
  , opp_team_orb_perc_ma: Number
  , opp_team_orb_perc_ma_1: Number
  , opp_team_tov_perc: Number
  , opp_team_tov_perc_ma: Number
  , opp_team_tov_perc_ma_1: Number
  , opp_tov: Number
  , opp_tov_ma: Number
  , opp_tov_ma_1: Number
  , opp_tp: Number
  , opp_tp_ma: Number
  , opp_tp_ma_1: Number
  , opp_trb: Number
  , opp_trb_ma: Number
  , opp_trb_ma_1: Number
  , orb: Number
  , orb_perc: Number
  , pace: Number
  , pf: Number
  , plus_minus: Number
  , pts: Number
  , pts_ma: Number
  , pts_ma_1: Number
  , season: Number
  , start: String
  , stl: Number
  , stl_ma: Number
  , stl_ma_1: Number
  , stl_perc: Number
  , suspended: Number
  , team: String
  , team_efg_perc: Number
  , team_fg_fga: Number
  , team_off_rtg: Number
  , team_orb_perc: Number
  , team_tov_perc: Number
  , tov: Number
  , tov_ma: Number
  , tov_ma_1: Number
  , tov_perc: Number
  , tp: Number
  , tp_ma: Number
  , tp_ma_1: Number
  , tp_perc: Number
  , tpa: Number
  , tpar: Number
  , trb: Number
  , trb_ma: Number
  , trb_ma_1: Number
  , trb_perc: Number
  , true_shooting: Number
  , usg_perc: Number
  , venue: String
});

module.exports = mongoose.model('playerstat', playerSchema);

